
'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero/dental-clinic-hero.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight tracking-wide">
              Seu sorriso é nossa
              <span className="text-yellow-400 block font-normal">prioridade</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
              Na Clínica Odonto Andrade, oferecemos cuidados odontológicos de excelência com tecnologia avançada e atendimento humanizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gray-800 text-white px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors cursor-pointer text-lg font-medium whitespace-nowrap"
              >
                Agendar Consulta
              </button>
              
              <button 
                onClick={scrollToServices}
                className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-gray-900 transition-all cursor-pointer text-lg font-medium whitespace-nowrap"
              >
                Nossos Serviços
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl w-6 h-6 flex items-center justify-center"></i>
      </div>
    </section>
  );
}
