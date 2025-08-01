
'use client';
import Link from 'next/link';

export default function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-light text-gray-800 tracking-wide">ODONTO ANDRADE</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-medium">
              Início
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-medium">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-medium">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-medium">
              Contato
            </Link>
            <button 
              onClick={scrollToContact}
              className="bg-gray-800 text-white px-6 py-3 rounded-sm hover:bg-gray-900 transition-colors cursor-pointer whitespace-nowrap font-medium"
            >
              Agendar Consulta
            </button>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-700 w-6 h-6 flex items-center justify-center cursor-pointer">
              <i className="ri-menu-line w-6 h-6"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
