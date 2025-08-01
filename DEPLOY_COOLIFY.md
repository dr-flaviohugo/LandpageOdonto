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

### 3. Configurar Build Settings

**Build Pack:** `Node.js`

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npx serve@latest out -p $PORT
```

**Port:** `3000` (ou a porta que o Coolify configurar automaticamente)

**Root Directory:** `/` (raiz do projeto)

**Output Directory:** `out`

### 4. Configurar Domínio

1. Na aba "Domains" do projeto
2. Adicionar domínio: `iosaodontologia.com.br`
3. Habilitar SSL automático (Let's Encrypt)

### 5. Variáveis de Ambiente (se necessário)

```
NODE_ENV=production
```

### 6. Advanced Settings (Opcionais)

**Docker Settings:**
- **Base Image:** `node:18-alpine`
- **Build Arguments:** (deixar vazio)

**Health Check:**
- **Path:** `/`
- **Method:** `GET`
- **Expected Status:** `200`

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

### Problema: Build falha
**Solução:** Verificar se todas as dependências estão no package.json

### Problema: Site não carrega
**Solução:** Verificar se a pasta `out` foi gerada corretamente no build

### Problema: SSL não funciona
**Solução:** Verificar se o DNS está apontando corretamente para o VPS

### Problema: Imagens não carregam
**Solução:** Verificar se `unoptimized: true` está no next.config.ts

## Otimizações Adicionais

1. **CDN:** Considere usar um CDN como Cloudflare para melhor performance
2. **Compressão:** Coolify já comprime automaticamente
3. **Cache:** Headers de cache são configurados automaticamente
4. **Monitoring:** Configure alertas no Coolify para monitorar uptime
