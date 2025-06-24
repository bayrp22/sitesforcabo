import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback for motion elements
  motion = {
    h1: 'h1',
    p: 'p',
    div: 'div',
  };
}

const HeroSection: React.FC = () => {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  const changeLanguage = (newLanguage: 'EN' | 'ES') => {
    setLanguage(newLanguage);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLanguage }));
  };

  const scrollToNextSection = (e: React.MouseEvent) => {
    e.preventDefault();

    const nextSection = document.getElementById('quote-wizard');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuoteWizard = (e: React.MouseEvent) => {
    e.preventDefault();

    const quoteSection = document.getElementById('quote-wizard');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Use regular React components if Framer Motion isn't available
  const isFramerAvailable = typeof motion !== 'object' || motion.h1 !== 'h1';

  // Motion props, only applied if Framer is available
  const headlineProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2 }
  } : {};

  const sublineProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.35 }
  } : {};

  const trustBadgeProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5 }
  } : {};

  const ctaProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.65 }
  } : {};

  // Component selection based on availability
  const Headline = isFramerAvailable ? motion.h1 : 'h1';
  const Paragraph = isFramerAvailable ? motion.p : 'p';
  const TrustBadges = isFramerAvailable ? motion.div : 'div';
  const CTAContainer = isFramerAvailable ? motion.div : 'div';

  // Content based on language
  const content = {
    EN: {
      headline: "Launch a Professional Website in Weeks – Without Breaking the Bank",
      subhead: "SWS builds custom, high-quality websites fast and at a fraction of typical costs—so Los Cabos businesses get online quickly and affordably.",
      primaryCTA: "Get My Free Quote →",
      secondaryCTA: "Talk to a Local Expert →",
      arrowText: "↓ See How It Works"
    },
    ES: {
      headline: "Lanza un Sitio Web Profesional en Semanas – Sin Quebrar el Banco",
      subhead: "SWS construye sitios web personalizados y de alta calidad rápidamente y a una fracción de los costos típicos—para que los negocios de Los Cabos se pongan en línea rápida y económicamente.",
      primaryCTA: "Obtener Mi Cotización Gratis →",
      secondaryCTA: "Hablar con un Experto Local →",
      arrowText: "↓ Ver Cómo Funciona"
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 hero--grain"></div>

      {/* Pink flowing lines background - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-no-repeat bg-contain opacity-80 pointer-events-none z-10"
        style={{
          backgroundImage: 'url(/images/2.3%20CUSTOM%20PINK%20BG.png)',
          backgroundPosition: 'bottom right',
          backgroundSize: 'contain'
        }}
      ></div>

      {/* Company logo in top-left corner with SWS text */}
      <button
        className="absolute top-6 left-6 flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <img
          src="/img/company-logo.svg"
          alt="Company Logo"
          className="w-14 h-auto"
        />
        <span className="text-white text-xl font-semibold ml-2">
          SWS
        </span>
      </button>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
          <button
            onClick={() => changeLanguage('ES')}
            className={`text-white transition-all duration-200 ${
              language === 'ES' ? 'font-bold underline' : 'hover:opacity-80'
            }`}
          >
            ES
          </button>
          <span className="text-white/60">|</span>
          <button
            onClick={() => changeLanguage('EN')}
            className={`text-white transition-all duration-200 ${
              language === 'EN' ? 'font-bold underline' : 'hover:opacity-80'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="text-center px-4 md:px-8 max-w-4xl flex flex-col items-center relative z-20">
        {/* Magnifying glass logo - centered at top */}
        <img
          src="/img/company-logo.svg"
          alt="SWS Logo"
          className="w-24 h-auto mb-8"
        />

        <Headline
          className="text-4xl md:text-6xl font-bold text-white mb-8 whitespace-pre-line"
          {...headlineProps}
        >
          {content[language].headline}
        </Headline>

        <Paragraph
          className="text-xl md:text-2xl text-white/90 mb-8"
          {...sublineProps}
        >
          {content[language].subhead}
        </Paragraph>

        {/* Trust Badges Row */}
        <TrustBadges
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-10"
          {...trustBadgeProps}
        >
          <div className="flex items-center space-x-2 text-white">
            <span className="text-2xl">📍</span>
            <span className="text-lg font-medium">{language === 'EN' ? 'Local to Los Cabos' : 'Local en Los Cabos'}</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-2xl">🗣️</span>
            <span className="text-lg font-medium">Hablamos Español</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-2xl">🤝</span>
            <span className="text-lg font-medium">{language === 'EN' ? 'Face-to-Face Service' : 'Servicio Cara a Cara'}</span>
          </div>
        </TrustBadges>

        {/* Primary & Secondary CTAs */}
        <CTAContainer
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          {...ctaProps}
        >
          <button
            onClick={scrollToQuoteWizard}
            className="bg-[#A5FF00] text-black font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#94E600] transition-colors duration-200 shadow-lg"
          >
            {content[language].primaryCTA}
          </button>
          <button
            onClick={scrollToQuoteWizard}
            className="text-white text-lg font-medium underline hover:no-underline transition-all duration-200"
          >
            {content[language].secondaryCTA}
          </button>
        </CTAContainer>
      </div>

      {/* Enhanced Arrow Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white mb-3 text-sm">{content[language].arrowText}</p>
        <ArrowDown
          className="w-6 h-6 text-white cursor-pointer animate-pulse-custom"
          onClick={scrollToNextSection}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-custom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-pulse-custom {
            animation: pulse-custom 1.5s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default HeroSection;
