# Configuração do Sistema de Contato

## Funcionalidades Implementadas

✅ **Envio de Email**
- Formulário de contato envia emails automaticamente
- Email para a clínica com os dados do cliente
- Email de confirmação para o cliente
- Validação de campos obrigatórios
- Tratamento de erros

✅ **Integração com WhatsApp**
- Botão para contato direto via WhatsApp
- Pré-preenche mensagem com dados do formulário
- Número configurado: (61) 98425-4982

## Configuração Necessária

### 1. Configurar Email (Gmail)

1. **Criar arquivo `.env`** na raiz do projeto com:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

2. **Configurar Gmail:**
   - Ativar verificação em duas etapas na sua conta Google
   - Gerar uma "Senha de app" específica:
     - Acesse: [myaccount.google.com](https://myaccount.google.com)
     - Segurança → Verificação em duas etapas → Senhas de app
     - Gerar senha para "Aplicativo personalizado"
   - Use essa senha de app no `.env` (não a senha normal da conta)

### 2. Outros Provedores de Email

**Outlook/Hotmail:**
```env
EMAIL_USER=seu-email@outlook.com
EMAIL_PASS=sua-senha
```

**Configuração personalizada:** Edite `app/api/contact/route.ts` e substitua:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.seu-provedor.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### 3. Testar o Sistema

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse o formulário de contato no site

3. Teste ambas as funcionalidades:
   - Envio de email pelo formulário
   - Contato via WhatsApp

## Estrutura dos Arquivos

- `app/api/contact/route.ts` - API route para envio de emails
- `components/ContactSection.tsx` - Componente do formulário
- `.env.example` - Exemplo de configuração
- `.env` - Configuração real (não commitado)

## Segurança

- Arquivo `.env` está no `.gitignore`
- Nunca commite credenciais no código
- Use sempre variáveis de ambiente em produção

## Troubleshooting

**Email não envia:**
- Verifique as credenciais no `.env`
- Confirme se a senha de app está correta
- Verifique os logs no console do navegador

**WhatsApp não abre:**
- Verifique se o número está correto
- Teste em diferentes dispositivos/browsers

## Personalização

**Alterar número do WhatsApp:**
Edite a linha no `ContactSection.tsx`:
```javascript
const whatsappUrl = `https://wa.me/5561984254982?text=${encodedMessage}`;
```

**Alterar email de destino:**
Edite no `app/api/contact/route.ts`:
```javascript
to: 'novo-email@clinica.com',
