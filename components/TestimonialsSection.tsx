
'use client';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Paciente há 3 anos',
      image: '/images/testimonials/maria-silva.jpg',
      text: 'Excelente atendimento! A Dra. Andrade é muito cuidadosa e sempre me deixa tranquila durante os procedimentos. Recomendo de olhos fechados!'
    },
    {
      name: 'João Santos',
      role: 'Paciente há 5 anos',
      image: '/images/testimonials/joao-santos.jpg',
      text: 'Fiz meu implante aqui e o resultado superou todas as expectativas. Equipe profissional e clínica com estrutura moderna. Muito satisfeito!'
    },
    {
      name: 'Ana Costa',
      role: 'Paciente há 2 anos',
      image: '/images/testimonials/ana-costa.jpg',
      text: 'Meu tratamento ortodôntico foi um sucesso! Adorei o resultado e todo o processo foi muito tranquilo. Equipe maravilhosa!'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Paciente há 4 anos',
      image: '/images/testimonials/carlos-oliveira.jpg',
      text: 'Clareamento dental ficou perfeito! Ambiente muito acolhedor e profissionais extremamente competentes. Indico para todos!'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            O que nossos pacientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Histórias reais de pessoas que transformaram seus sorrisos conosco.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full object-cover object-top shadow-md"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <i className="ri-double-quotes-l text-4xl text-yellow-500 w-10 h-10 flex items-center justify-center mx-auto md:mx-0"></i>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic font-light">
                  {testimonials[currentTestimonial].text}
                </p>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 font-light">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-gray-800 text-white p-3 rounded-sm hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentTestimonial ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-gray-800 text-white p-3 rounded-sm hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
