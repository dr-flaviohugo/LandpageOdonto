
'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError(result.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const { name, phone, service, message } = formData;
    
    let whatsappMessage = `Olá! Gostaria de agendar uma consulta.`;
    
    if (name) whatsappMessage += `\n\n*Nome:* ${name}`;
    if (phone) whatsappMessage += `\n*Telefone:* ${phone}`;
    if (service) whatsappMessage += `\n*Serviço:* ${service}`;
    if (message) whatsappMessage += `\n*Mensagem:* ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5561984254982?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Estamos prontos para cuidar do seu sorriso. Agende sua consulta hoje mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 text-white p-3 rounded-sm flex-shrink-0">
                  <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600 font-light">
                    Quadra C1 Lote 01/12 Taguatinga Trade Center Sala 237, Centro, <br/>
                    Taguatinga - DF, 72010-010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 text-white p-3 rounded-sm flex-shrink-0">
                  <i className="ri-phone-line w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Telefones</h3>
                  <p className="text-gray-600 font-light">
                    (61) 3547-4755<br/>
                    (61) 98425-4982
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 text-white p-3 rounded-sm flex-shrink-0">
                  <i className="ri-time-line w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600 font-light">
                    Segunda à Sexta: 08:00 - 18:00<br/>
                    Sábado: 08:00 - 12:00<br/>
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 text-white p-3 rounded-sm flex-shrink-0">
                  <i className="ri-mail-line w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">E-mail</h3>
                  <p className="text-gray-600 font-light">
                    dra.stephanieandrade.odonto@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-sm overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5738534567!2d-48.05467532482896!3d-15.831606784935816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd2af935d9b05%3A0x6764779fe92867e4!2sTaguatinga%20Trade%20Center!5e0!3m2!1spt!2sbr!4v1641234567890!5m2!1spt!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Odonto Andrade - Taguatinga Trade Center"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} id="contact-form" className="bg-white rounded-sm p-8 shadow-md">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600 font-light">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-medium text-gray-800 mb-6">Agende sua Consulta</h3>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-sm p-4 mb-4">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent text-sm font-light"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Seu e-mail"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent text-sm font-light"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Telefone/WhatsApp"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent text-sm font-light"
                      />
                    </div>

                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent text-sm font-light pr-8"
                      >
                        <option value="">Selecione o serviço desejado</option>
                        <option value="clinica-geral">Clínica Geral</option>
                        <option value="cirurgia-oral">Cirurgia Oral</option>
                        <option value="estetica-dental">Estética Dental</option>
                        <option value="ortodontia">Ortodontia</option>
                        <option value="odontopediatria">Odontopediatria</option>
                        <option value="periodontia">Periodontia</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre sua necessidade..."
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent text-sm resize-none font-light"
                        suppressHydrationWarning={true}
                      />
                      <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 caracteres</p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 text-white py-4 rounded-sm hover:bg-gray-900 transition-colors cursor-pointer font-medium whitespace-nowrap disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">ou</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="w-full bg-green-600 text-white py-4 rounded-sm hover:bg-green-700 transition-colors cursor-pointer font-medium whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.097"/>
                      </svg>
                      Falar no WhatsApp
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
