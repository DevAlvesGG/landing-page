import React from "react";

function Footer() {
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

              {/* Implementar link para o Intagram da loja */}

              {/* implementar link para o TikTok da loja */}

            </div>
        </footer>
    );
}



export default Footer;