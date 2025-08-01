
'use client';

export default function Footer() {
  const openWhatsApp = () => {
    const phoneNumber = '556135474755'; // WhatsApp number with country code
    const message = 'Olá! Gostaria de agendar uma consulta na Clínica Odonto Andrade.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/odontostephanieandrade/';
    window.open(instagramUrl, '_blank');
  };

  const openFacebook = () => {
    const facebookUrl = 'https://www.facebook.com/odontostephanieandrade/';
    window.open(facebookUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-light text-white tracking-wide">ODONTO ANDRADE</span>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Cuidando do seu sorriso com excelência, tecnologia e carinho há mais de 15 anos.
            </p>
            <div className="flex gap-4 mt-6">
              <button 
                onClick={openFacebook}
                className="bg-gray-700 text-white p-2 rounded-sm hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button 
                onClick={openInstagram}
                className="bg-gray-700 text-white p-2 rounded-sm hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-gray-700 text-white p-2 rounded-sm hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Clínica Geral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Cirurgia Oral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Estética Dental</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Ortodontia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Odontopediatria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer font-light">Periodontia</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300 font-light">Quadra C1 Lote 1 TTC sala 237</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line w-4 h-4 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300 font-light">(61) 3547-4755</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center text-yellow-400"></i>
                <span className="text-gray-300 font-light">dra.stephanieandrade.odonto@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Horários</h3>
            <div className="space-y-2 text-gray-300 font-light">
              <div className="flex justify-between">
                <span>Seg - Sex:</span>
                <span>08:00 - 18:00</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </div> */}
              <div className="flex justify-between">
                <span>Sábado e Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
            
            {/* <button className="w-full mt-6 bg-gray-700 text-white py-3 rounded-sm hover:bg-gray-600 transition-colors cursor-pointer font-medium whitespace-nowrap">
              Emergência 24h
            </button> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-light">
            2024 Clínica Odonto Andrade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
