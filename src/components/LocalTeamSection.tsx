import React from 'react';
import { Phone, Mail } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback for motion elements
  motion = {
    section: 'section',
    div: 'div',
    h2: 'h2',
    p: 'p',
  };
}

const LocalTeamSection: React.FC = () => {
  // Check if Framer Motion is available
  const isFramerAvailable = typeof motion !== 'object' || motion.section !== 'section';

  // Motion props for scroll reveal
  const sectionProps = isFramerAvailable ? {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  const textProps = isFramerAvailable ? {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  const profilesProps = isFramerAvailable ? {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  // Component selection based on availability
  const Section = isFramerAvailable ? motion.section : 'section';
  const TextContent = isFramerAvailable ? motion.div : 'div';
  const ProfilesContainer = isFramerAvailable ? motion.div : 'div';

  const founders = [
    {
      name: "Bay Purcell",
      title: "CEO & Founder",
      image: "/images/Bay Profile.png",
      phone: "+52 624 123 4567",
      email: "bay@swsloscabos.com"
    },
    {
      name: "Borja Ponce",
      title: "COO & Co-Founder", 
      image: "/images/Borja Profile.png",
      phone: "+52 624 123 4568",
      email: "borja@swsloscabos.com"
    }
  ];

  return (
    <Section
      id="local-team"
      className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 min-h-screen flex items-center justify-center py-16 md:py-20 lg:py-24"
      {...sectionProps}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <TextContent
            className="space-y-6"
            {...textProps}
          >
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Your Local<br />
               Los Cabos<br />
               Web Partners
             </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We're not a faceless agency. We're your neighbors in Los Cabos, building relationships 
              and websites that matter to our community.
            </p>
                                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
               Meet our founders who live and work right here in Los Cabos. We met as kids 
               at Colegio El Camino and now work together locally. We understand Cabo, 
               speak both languages fluently, and are always available for face-to-face meetings.
             </p>
          </TextContent>

                     {/* Right Side - Founder Profiles */}
           <ProfilesContainer
             className="space-y-8"
             {...profilesProps}
           >
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Floating Profile Images */}
               {founders.map((founder, index) => (
                 <div key={`image-${index}`} className="flex justify-center">
                   <img
                     src={founder.image}
                     alt={`${founder.name} - ${founder.title}`}
                     className="w-40 h-48 md:w-48 md:h-56 lg:w-52 lg:h-64 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                   />
                 </div>
               ))}
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Profile Info Cards */}
               {founders.map((founder, index) => (
                 <div
                   key={`info-${index}`}
                   className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                 >
                   <div className="text-center">
                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                       {founder.name}
                     </h3>
                     <p className="text-gray-600 font-medium mb-6 text-base">
                       {founder.title}
                     </p>
                     
                     {/* Contact Information */}
                     <div className="space-y-3">
                       <div className="flex items-center justify-center space-x-3">
                         <Phone className="w-4 h-4 text-gray-500" />
                         <a 
                           href={`tel:${founder.phone}`}
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                         >
                           {founder.phone}
                         </a>
                       </div>
                       <div className="flex items-center justify-center space-x-3">
                         <Mail className="w-4 h-4 text-gray-500" />
                         <a 
                           href={`mailto:${founder.email}`}
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                         >
                           {founder.email}
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </ProfilesContainer>

        </div>
      </div>
    </Section>
  );
};

export default LocalTeamSection; 