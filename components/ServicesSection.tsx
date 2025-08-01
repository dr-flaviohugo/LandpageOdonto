
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Clínica Geral',
      description: 'Consultas preventivas, limpeza, tratamento de cáries e cuidados básicos para manter sua saúde bucal em dia.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20dental%20checkup%20with%20dentist%20examining%20patient%20teeth%20in%20modern%20clinic%20with%20neutral%20gray%20and%20beige%20colors%2C%20clean%20minimalist%20medical%20environment%20with%20contemporary%20design&width=400&height=300&seq=service-general-new-1&orientation=landscape'
    },
    {
      icon: 'ri-scissors-line',
      title: 'Cirurgia Oral',
      description: 'Extrações, implantes dentários e cirurgias especializadas realizadas com segurança e conforto.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20dental%20surgery%20room%20with%20contemporary%20equipment%2C%20neutral%20gray%20tones%2C%20professional%20surgical%20instruments%20in%20luxurious%20minimalist%20healthcare%20setting&width=400&height=300&seq=service-surgery-new-1&orientation=landscape'
    },
    {
      icon: 'ri-star-smile-line',
      title: 'Estética Dental',
      description: 'Clareamento, facetas, laminados e tratamentos para deixar seu sorriso ainda mais bonito.',
      image: 'https://readdy.ai/api/search-image?query=Cosmetic%20dentistry%20treatment%20room%20with%20elegant%20design%2C%20neutral%20gray%20and%20beige%20palette%2C%20modern%20aesthetic%20dental%20equipment%20in%20luxurious%20contemporary%20healthcare%20environment&width=400&height=300&seq=service-aesthetic-new-1&orientation=landscape'
    },
    {
      icon: 'ri-tooth-line',
      title: 'Ortodontia',
      description: 'Aparelhos fixos e móveis, alinhadores invisíveis para correção de problemas ortodônticos.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20orthodontic%20consultation%20room%20with%20dental%20models%20and%20braces%20samples%2C%20contemporary%20clinic%20design%20with%20neutral%20gray%20colors%20and%20professional%20equipment&width=400&height=300&seq=service-orthodontic-new-1&orientation=landscape'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Odontopediatria',
      description: 'Cuidados especializados para crianças em ambiente acolhedor e adaptado aos pequenos.',
      image: 'https://readdy.ai/api/search-image?query=Child-friendly%20dental%20office%20with%20elegant%20contemporary%20design%2C%20neutral%20gray%20and%20beige%20colors%2C%20pediatric%20dental%20equipment%20in%20modern%20minimalist%20healthcare%20environment&width=400&height=300&seq=service-pediatric-new-1&orientation=landscape'
    },
    {
      icon: 'ri-medicine-bottle-line',
      title: 'Periodontia',
      description: 'Tratamento especializado das gengivas e estruturas de suporte dos dentes.',
      image: 'https://readdy.ai/api/search-image?query=Periodontal%20treatment%20room%20with%20specialized%20equipment%2C%20modern%20dental%20clinic%20with%20neutral%20gray%20tones%2C%20professional%20instruments%20in%20contemporary%20minimalist%20medical%20environment&width=400&height=300&seq=service-periodontal-new-1&orientation=landscape'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Oferecemos uma gama completa de serviços odontológicos com tecnologia de ponta e profissionais especializados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white p-3 rounded-sm">
                  <i className={`${service.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <button className="mt-4 text-gray-800 font-medium hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
