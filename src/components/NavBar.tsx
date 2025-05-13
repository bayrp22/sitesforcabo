import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#', id: 'home' },
  { name: 'Tiers', href: '#tier-showcase', id: 'tier-showcase' },
  { name: 'UX Flow', href: '#ux-flow', id: 'ux-flow' },
  { name: 'Demos', href: '#site-demo', id: 'site-demo' },
  { name: 'Pricing', href: '#pricing-table', id: 'pricing-table' },
  { name: 'Timeline', href: '#delivery-timeline', id: 'delivery-timeline' },
  { name: 'Summary', href: '#proposal-summary', id: 'proposal-summary' },
];

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className={cn(
            "font-bold text-xl",
            isScrolled ? "text-cabo-blue" : "text-white"
          )}>Wild Cabo</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className={cn(
                "font-medium hover:text-cabo-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            "w-6 h-0.5 my-1.5 transition-colors",
            isScrolled ? "bg-gray-800" : "bg-white"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 my-1.5 transition-colors",
            isScrolled ? "bg-gray-800" : "bg-white"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 my-1.5 transition-colors",
            isScrolled ? "bg-gray-800" : "bg-white"
          )}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-xl text-cabo-blue">Wild Cabo</span>
            <button 
              className="focus:outline-none" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl text-gray-700">&times;</span>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-700 font-medium hover:text-cabo-blue transition-colors text-lg"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
