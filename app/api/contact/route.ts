import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validação básica
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporter (usando Gmail como exemplo)
    // Em produção, use variáveis de ambiente para as credenciais
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'seu-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'sua-senha-de-app'
      }
    });

    // Configuração do email para a clínica
    const mailToClinic = {
      from: process.env.EMAIL_USER || 'seu-email@gmail.com',
      to: 'dra.stephanieandrade.odonto@gmail.com',
      subject: `Nova mensagem do site - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 20px;">Nova mensagem de contato</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Serviço:</strong> ${service}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Mensagem:</strong></p>
            <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
          </div>
        </div>
      `
    };

    // Configuração do email de confirmação para o cliente
    const mailToClient = {
      from: process.env.EMAIL_USER || 'seu-email@gmail.com',
      to: email,
      subject: 'Mensagem recebida - Clínica Odonto Andrade',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 20px;">Obrigada pelo contato!</h2>
          
          <p>Olá ${name},</p>
          
          <p>Recebemos sua mensagem sobre <strong>${service}</strong> e entraremos em contato em breve.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Resumo da sua mensagem:</strong></p>
            <p style="margin: 10px 0 0 0;">${message}</p>
          </div>
          
          <p>Nosso tempo de resposta é de até 24 horas úteis.</p>
          
          <div style="background-color: #e9f7ef; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #155724;"><strong>Para urgências, entre em contato diretamente:</strong></p>
            <p style="margin: 5px 0 0 0; color: #155724;">📞 (61) 3547-4755 | (61) 98425-4982</p>
          </div>
          
          <p>Atenciosamente,<br>
          <strong>Dra. Stephanie Andrade</strong><br>
          Clínica Odonto Andrade</p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Quadra C1 Lote 01/12 Taguatinga Trade Center Sala 237<br>
            Centro, Taguatinga - DF, 72010-010</p>
          </div>
        </div>
      `
    };

    // Enviar emails
    await transporter.sendMail(mailToClinic);
    await transporter.sendMail(mailToClient);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    );
  }
}
