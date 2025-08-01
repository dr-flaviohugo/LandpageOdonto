
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
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
