# Preferências do Projeto

## Git
- Após commits, o push é feito manualmente pelo usuário
- Mensagens de commit em português, seguindo Conventional Commits

## Stack
- Next.js 15 (Pages Router) + React 19
- PostgreSQL 16.8 via Docker
- Node.js lts/jod (24.x)
- Deploy na Vercel

## Padrões
- Indentação: 2 espaços
- Linting: ESLint + Prettier
- Testes: Jest (integração via API, com orchestrator)
- CI: GitHub Actions (testes + linting + audit em PRs)
