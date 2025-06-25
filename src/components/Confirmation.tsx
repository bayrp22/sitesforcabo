import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback for motion elements
  motion = {
    section: 'section',
    div: 'div',
  };
}

interface ConfirmationProps {
  path: "site" | "nosite";
}

const Confirmation: React.FC<ConfirmationProps> = ({ path }) => {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  // Listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };
    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  }, []);

  // Auto-scroll to this component when it renders
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('confirmation')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Check if Framer Motion is available
  const isFramerAvailable = typeof motion !== 'object' || motion.section !== 'section';

  // Motion props for entrance animation
  const sectionProps = isFramerAvailable ? {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  } : {};

  // Component selection based on availability
  const Section = isFramerAvailable ? motion.section : 'section';

  const content = {
    EN: {
      site: {
        title: "We're On It!",
        message: "Thanks! We'll review your site and deliver your audit within 1 business day.",
        subtitle: "What happens next:",
        steps: [
          "Comprehensive site analysis",
          "Performance & SEO audit", 
          "Personalized recommendations"
        ]
      },
      nosite: {
        title: "Your Blueprint is Coming!",
        message: "Thanks! Your Digital Launchpad Blueprint will be in your inbox within 1 business day.",
        subtitle: "What's included:",
        steps: [
          "Custom website strategy",
          "Design mockups & wireframes",
          "Timeline & pricing breakdown"
        ]
      }
    },
    ES: {
      site: {
        title: "¡Estamos en Ello!",
        message: "¡Gracias! Revisaremos tu sitio y entregaremos tu auditoría dentro de 1 día hábil.",
        subtitle: "Qué sigue:",
        steps: [
          "Análisis integral del sitio",
          "Auditoría de rendimiento y SEO",
          "Recomendaciones personalizadas"
        ]
      },
      nosite: {
        title: "¡Tu Plan Está en Camino!",
        message: "¡Gracias! Tu Plan de Lanzamiento Digital estará en tu bandeja de entrada dentro de 1 día hábil.",
        subtitle: "Qué incluye:",
        steps: [
          "Estrategia web personalizada",
          "Bocetos y wireframes de diseño",
          "Cronograma y desglose de precios"
        ]
      }
    }
  };

  const currentContent = content[language][path];

  return (
    <Section
      id="confirmation"
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24"
      {...sectionProps}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center">
          
          {/* Success Icon with Animation */}
          <div className="relative mb-8">
            <div className="bg-[#A5FF00]/20 rounded-full border-4 border-[#A5FF00] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-black relative z-10" />
              
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {currentContent.message}
            </p>

            {/* What's Next Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                {currentContent.subtitle}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {currentContent.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="bg-[#A5FF00] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Reminder */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm md:text-base">
                {language === 'EN' 
                  ? "Have questions? Feel free to call or email us anytime."
                  : "¿Tienes preguntas? No dudes en llamarnos o escribirnos en cualquier momento."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Confirmation; 