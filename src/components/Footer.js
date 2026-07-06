
/*function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-brandYellow/10 text-center">
            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="text-gray-400">
                Desenvolvido por <span className="text-white font-bold">Gustavo Alves</span>
              </p>
              <a
                href="mailto:gustavodevgarcia@gmail.com"
                className="text-brandYellow hover:underline transition-all text-xs"
              >
                gustavodevgarcia@gmail.com
              </a>

            </div>
        </footer>
    );
}
*/

import React from 'react';

function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-brandYellow/10 text-center">
            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="text-gray-400">
                Desenvolvido por <span className="text-white font-bold">Gustavo Alves</span>
              </p>
              <a
                href="mailto:gustavodevgarcia@gmail.com"
                className="text-brandYellow hover:underline transition-all text-xs block mb-4"
              >
                gustavodevgarcia@gmail.com
              </a>

              {/* Container das Redes Sociais em SVG (Estilo Lucide) */}
              <div className="flex justify-center items-center gap-6 mt-4">
                
                {/* Link para o Instagram da loja */}
                <a
                  href="https://www.instagram.com/bolatec.assistencia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brandYellow hover:text-white transition-all transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                  aria-label="Instagram"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* Link para o TikTok da loja */}
                <a
                  href="https://www.tiktok.com/@bolatec7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brandYellow hover:text-white transition-all transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                  aria-label="TikTok"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>

              </div>

            </div>
        </footer>
    );
}

export default Footer;