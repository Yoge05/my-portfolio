import { useState } from 'react';
import stackImage from '../assets/about/Hero Image.png';
import linkedinQr from '../assets/about/linkedin-qr.svg';
import { aboutContent, socialLinks } from '../data/portfolioData';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex flex-col items-center justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0 pointer-events-none"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-30 shadow-[0_2px_10px_rgba(0,0,0,0.3)] pointer-events-none"></div>
            
            {/* 3D Flip Card Container */}
            <div 
              className="perspective-1000 w-full max-w-[280px] z-20 cursor-pointer group select-none"
              onClick={() => setIsFlipped(!isFlipped)}
              title="Click to flip ID card"
            >
              <div 
                className={`relative w-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                }`}
              >
                
                {/* FRONT FACE: Photo ID */}
                <div className="backface-hidden bg-gray-900 w-full rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative border border-white/10">
                  {/* Cutout Hole */}
                  <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                    <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                  </div>
                  {/* Image Container */}
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                    <img 
                      src={stackImage} 
                      alt="Santhosh HG — Software Developer" 
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                </div>

                {/* BACK FACE: Reverse Side with LinkedIn QR */}
                <div className="backface-hidden rotate-y-180 absolute inset-0 bg-gray-950 w-full h-full rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/15 flex flex-col justify-between items-center text-center">
                  {/* Cutout Hole */}
                  <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-950 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                    <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                  </div>

                  {/* Top Bar / Header */}
                  <div className="pt-2 flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-white font-black text-sm tracking-wide">
                      <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn Connect</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-0.5">
                      Scan to View Profile
                    </span>
                  </div>

                  {/* QR Code Container */}
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 block"
                    title="Scan with phone or click to open LinkedIn profile"
                  >
                    <img 
                      src={linkedinQr} 
                      alt="LinkedIn Profile QR Code" 
                      className="w-36 h-36 md:w-40 md:h-40 object-contain mx-auto"
                    />
                  </a>

                  {/* Bottom Info & Link */}
                  <div className="pb-1 flex flex-col items-center">
                    <p className="text-white font-bold text-xs">Santhosh HG</p>
                    <p className="text-gray-400 text-[10px]">Technical Trainer & Developer</p>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 text-[11px] text-[#0077b5] hover:text-blue-400 font-semibold underline flex items-center gap-1"
                    >
                      Open profile in browser ↗
                    </a>
                  </div>

                </div>

              </div>
            </div>

            {/* Flip Hint Button */}
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-4 flex items-center gap-2 text-xs font-semibold text-black/80 bg-white/40 hover:bg-white hover:text-black backdrop-blur-sm px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>{isFlipped ? "Flip to Photo" : "Hover / Click to Flip QR"}</span>
            </button>

          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
