# Deploy da Landing Page no Coolify

## Configuração do Projeto no Coolify

### 1. Criar Novo Projeto
1. Acesse o painel do Coolify no seu VPS
2. Clique em "New Project"
3. Selecione "Git Repository"

### 2. Configurar Repositório
```
Repository URL: https://github.com/dr-flaviohugo/LandpageOdonto.git
Branch: main
```

### 3. Configurar Build Settings (Nixpacks)

**Build Pack:** `Nixpacks` (auto-detecta Node.js)

**⚠️ IMPORTANTE:** Desmarque "Is it a Static site" para permitir API routes

**Build Command:** (deixe vazio para auto-detecção ou use `npm run build`)

**Start Command:** (deixe vazio para auto-detecção ou use `npm start`)

**Port:** `3000` (auto-detectado)

**Root Directory:** `/` (raiz do projeto)

### 4. Configurar Domínio

1. Na aba "Domains" do projeto
2. Adicionar domínio: `iosaodontologia.com.br`
3. Habilitar SSL automático (Let's Encrypt)

### 5. Variáveis de Ambiente (OBRIGATÓRIO para API de contato)

```
NODE_ENV=production
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gmail
```

**⚠️ IMPORTANTE:** 
- Use uma senha de app do Gmail, não a senha normal
- Configure estas variáveis na aba "Environment Variables" do Coolify

### 6. Advanced Settings (Opcionais)

**Docker Settings (se usar Dockerfile em vez de Nixpacks):**
- O Dockerfile foi atualizado para suportar API routes
- Usa `output: "standalone"` para otimização
- Executa com `node server.js` em vez de `serve`

**Health Check:**
- **Path:** `/`
- **Method:** `GET`
- **Expected Status:** `200`

**Variáveis de Ambiente Adicionais para Dockerfile:**
```
HOSTNAME=0.0.0.0
NEXT_TELEMETRY_DISABLED=1
```

## Verificações Pós-Deploy

### 1. Teste de Funcionamento
- [ ] Site carrega em `https://iosaodontologia.com.br`
- [ ] SSL está funcionando (cadeado verde)
- [ ] Todas as páginas carregam corretamente
- [ ] Responsividade funciona em mobile

### 2. Performance
- [ ] Tempo de carregamento < 3 segundos
- [ ] Lighthouse score > 90

### 3. SEO
- [ ] Meta tags carregam corretamente
- [ ] Título da página está correto
- [ ] Descrição está presente

## Comandos Úteis para Debug

### No servidor (se necessário):
```bash
# Verificar logs do container
docker logs [container-name]

# Acessar container
docker exec -it [container-name] sh

# Verificar arquivos gerados
ls -la out/
```

### Localmente (para testar):
```bash
# Testar build localmente
npm run build

# Servir arquivos estáticos localmente
npm run serve
```

## Troubleshooting

### Problema: Erro 405 (Method Not Allowed) na API de contato
**Causa:** Projeto configurado como "Static site" no Coolify
**Solução:** 
1. Desmarque "Is it a Static site" no Coolify
2. Verifique se `output: "export"` foi removido do next.config.ts
3. Faça redeploy do projeto

### Problema: Build falha
**Solução:** Verificar se todas as dependências estão no package.json

### Problema: Site não carrega
**Solução:** Verificar se a pasta `.next` foi gerada corretamente no build

### Problema: SSL não funciona
**Solução:** Verificar se o DNS está apontando corretamente para o VPS

### Problema: Imagens não carregam
**Solução:** Verificar se `unoptimized: true` está no next.config.ts

### Problema: Emails não são enviados
**Solução:** 
1. Verificar se as variáveis EMAIL_USER e EMAIL_PASS estão configuradas
2. Usar senha de app do Gmail (não a senha normal)
3. Verificar logs do container para erros específicos

## Otimizações Adicionais

1. **CDN:** Considere usar um CDN como Cloudflare para melhor performance
2. **Compressão:** Coolify já comprime automaticamente
3. **Cache:** Headers de cache são configurados automaticamente
4. **Monitoring:** Configure alertas no Coolify para monitorar uptime
