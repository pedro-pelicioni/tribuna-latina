# Tribuna Latina 🏆⚽🏀

Figma do App: https://www.figma.com/design/Co7QTigYIuTFyADqb3x5aq/Tribuna-Latina?node-id=12-454&p=f&t=HfQIm6p2SW5wSWAA-0

## Sobre o Projeto

Tribuna Latina é uma plataforma desenvolvida para o hackathon da rede Chiliz que permite criar e gerenciar NFTs (Non-Fungible Tokens) de jogadores, conectando-os com seus fãs através dos fan tokens da rede Chiliz.

## Visão Geral

A plataforma permite que:
- Jogadores criem e gerenciem seus próprios NFTs
- Fãs colecionem NFTs de seus jogadores favoritos
- Suporte aos jogadores através de fan tokens 
- Interações exclusivas entre jogadores e fãs mediante posse de tokens

## Tecnologias

- Frontend: Next.js 14 com TypeScript
- Backend: Node.js com Express
- Blockchain: Rede Chiliz (Testnet)
- Smart Contracts: Solidity
- Autenticação: Web3Auth
- Contrato Deployado: `0x1234567890abcdef1234567890abcdef12345678` (Chiliz Testnet): https://testnet.chiliscan.com/address/0x2fED6fa1D4E1D033d5E2953A6eb3254F6610B54a

## Instalação

```bash
# Clone o repositório
git clone https://github.com/pedro-pelicioni/tribuna-latina.git

# Entre no diretório
cd tribuna-latina

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Estrutura do Projeto

```
tribuna-latina/
├── contracts/       # Smart contracts para NFTs e interações
├── public/          # Arquivos estáticos
├── src/             # Código fonte da aplicação
│   ├── components/  # Componentes reutilizáveis
│   ├── pages/       # Páginas da aplicação
│   ├── services/    # Serviços e APIs
│   └── styles/      # Estilos e CSS
├── tests/           # Testes automatizados
└── README.md        # Este arquivo
```

## Funcionalidades

- **Criação de NFTs**: Permite que jogadores criem NFTs personalizados
- **Marketplace**: Plataforma para compra, venda e troca de NFTs
- **Integração com Fan Tokens**: Uso de fan tokens para desbloquear conteúdo exclusivo
- **Perfis de Jogadores**: Páginas dedicadas para jogadores mostrarem seus NFTs
- **Sistema de Recompensas**: Incentivos para fãs que apoiam seus jogadores favoritos
- **Gamificação**: Sistema de pontos e conquistas para engajamento dos fãs

## Roadmap

### Fase 1 - MVP (Concluído ✅)
- [x] Definição do escopo do projeto
- [x] Desenvolvimento dos smart contracts
- [x] Deploy do contrato na Chiliz Testnet
- [x] Desenvolvimento da UI/UX
- [x] Integração com a rede Chiliz
- [x] MVP funcional para submissão ao grant

### Fase 2 - Aprimoramento (Em Desenvolvimento 🚀)
- [ ] Integração completa dos smart contracts com a plataforma
- [ ] Testes de integração e auditoria de segurança
- [ ] Lançamento beta com parceiros selecionados
- [ ] Implementação de feedback dos usuários
- [ ] Expansão para mais times e ligas

### Fase 3 - Crescimento (Planejado 📈)
- [ ] Integração com mais redes de blockchain
- [ ] Programa de parcerias com clubes
- [ ] Sistema de recompensas aprimorado
- [ ] Marketplace descentralizado

## Equipe

- Pedro Pelicioni - Desenvolvedor Full Stack
- Jenny T. - Designer

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## Contato

- GitHub: [@pedro-pelicioni](https://github.com/pedro-pelicioni)
- Twitter: [@pedropelicioni](https://x.com/pelicioni_xlm)
- GitHub: [@JennyT3](https://github.com/JennyT3)
- Twitter: [@jennyt_eth](https://x.com/jennyt_eth)

---

Desenvolvido com ❤️ para o Hackathon Chiliz sob o nome Tribuna Latina. 