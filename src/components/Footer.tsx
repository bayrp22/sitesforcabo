
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Wild Cabo</h2>
            <p className="text-gray-400 mt-2">Microsite Ecosystem Proposal</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#tier-showcase" className="text-gray-400 hover:text-white transition-colors">Tiers</a></li>
                <li><a href="#pricing-table" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#proposal-summary" className="text-gray-400 hover:text-white transition-colors">Summary</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@wildcabo.com</li>
                <li className="text-gray-400">(123) 456-7890</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Wild Cabo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
