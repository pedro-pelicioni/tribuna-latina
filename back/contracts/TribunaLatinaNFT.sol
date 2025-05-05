// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TribunaLatinaNFT is ERC721, Ownable, Pausable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Estrutura para armazenar informações do jogador
    struct PlayerInfo {
        address playerAddress;  // Endereço do jogador para receber royalties
        uint256 maxCopies;     // Máximo de cópias permitidas
        uint256 currentCopies; // Cópias atuais
        uint256 price;         // Preço em CHZ
        uint256 royaltyPercentage; // Porcentagem de royalties para o jogador
        string metadataURI;    // URI dos metadados no IPFS
    }

    // Mapeamento de tokenId para PlayerInfo
    mapping(uint256 => PlayerInfo) public playerInfo;
    
    // Mapeamento de jogador para lista de seus tokens
    mapping(address => uint256[]) public playerTokens;
    
    // Endereço do token CHZ
    IERC20 public chzToken;
    
    // Preço base em CHZ (5 USD)
    uint256 public constant BASE_PRICE = 5 * 10**18; // 5 CHZ (assumindo 18 decimais)
    
    // Eventos
    event PlayerNFTMinted(uint256 indexed tokenId, address indexed player, address indexed owner);
    event RoyaltyPaid(uint256 indexed tokenId, address indexed player, uint256 amount);
    event PlayerRegistered(uint256 indexed tokenId, address indexed player, string metadataURI);

    constructor(address _chzToken) ERC721("Tribuna Latina Player", "TLP") {
        chzToken = IERC20(_chzToken);
    }

    // Função para registrar um novo jogador
    function registerPlayer(
        address _playerAddress,
        uint256 _maxCopies,
        uint256 _royaltyPercentage,
        string memory _metadataURI
    ) public onlyOwner {
        require(_maxCopies <= 555, "Maximo de 555 copias permitido");
        require(_royaltyPercentage <= 100, "Royalty nao pode ser maior que 100%");
        require(bytes(_metadataURI).length > 0, "URI dos metadados nao pode ser vazia");
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        playerInfo[newTokenId] = PlayerInfo({
            playerAddress: _playerAddress,
            maxCopies: _maxCopies,
            currentCopies: 0,
            price: BASE_PRICE,
            royaltyPercentage: _royaltyPercentage,
            metadataURI: _metadataURI
        });
        
        playerTokens[_playerAddress].push(newTokenId);
        
        emit PlayerRegistered(newTokenId, _playerAddress, _metadataURI);
    }

    // Função para comprar um NFT
    function mint(uint256 _tokenId) public whenNotPaused {
        PlayerInfo storage info = playerInfo[_tokenId];
        require(info.currentCopies < info.maxCopies, "Limite de copias atingido");
        
        // Transferir CHZ do comprador para o contrato
        require(
            chzToken.transferFrom(msg.sender, address(this), info.price),
            "Transferencia de CHZ falhou"
        );
        
        // Calcular e transferir royalties para o jogador
        uint256 royaltyAmount = (info.price * info.royaltyPercentage) / 100;
        if (royaltyAmount > 0) {
            require(
                chzToken.transfer(info.playerAddress, royaltyAmount),
                "Transferencia de royalties falhou"
            );
            emit RoyaltyPaid(_tokenId, info.playerAddress, royaltyAmount);
        }
        
        // Criar o NFT
        _safeMint(msg.sender, _tokenId);
        info.currentCopies++;
        
        emit PlayerNFTMinted(_tokenId, info.playerAddress, msg.sender);
    }

    // Função para pausar o contrato em caso de emergência
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // Função para retirar CHZ acumulado no contrato
    function withdrawCHZ() public onlyOwner {
        uint256 balance = chzToken.balanceOf(address(this));
        require(balance > 0, "Sem CHZ para retirar");
        require(chzToken.transfer(owner(), balance), "Transferencia falhou");
    }

    // Função para atualizar o preço base
    function updateBasePrice(uint256 _newPrice) public onlyOwner {
        require(_newPrice > 0, "Preco deve ser maior que zero");
        BASE_PRICE = _newPrice;
    }

    // Função para obter informações de um jogador
    function getPlayerInfo(uint256 _tokenId) public view returns (
        address playerAddress,
        uint256 maxCopies,
        uint256 currentCopies,
        uint256 price,
        uint256 royaltyPercentage,
        string memory metadataURI
    ) {
        PlayerInfo storage info = playerInfo[_tokenId];
        return (
            info.playerAddress,
            info.maxCopies,
            info.currentCopies,
            info.price,
            info.royaltyPercentage,
            info.metadataURI
        );
    }

    // Função para obter todos os tokens de um jogador
    function getPlayerTokens(address _player) public view returns (uint256[] memory) {
        return playerTokens[_player];
    }

    // Função para retornar a URI dos metadados
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token nao existe");
        return playerInfo[tokenId].metadataURI;
    }
} 