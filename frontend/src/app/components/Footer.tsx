import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">MeJubilo</h2>
            <p className="text-gray-300 max-w-xs">
              Información previsional clara e independiente
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculadora" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Calculadora
                </Link>
              </li>
              <li>
                <Link href="/beneficios" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:nico@pensionfi.com" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  nico@pensionfi.com
                </a>
              </li>
              <li className="text-gray-300">
                De Chile al 🌎
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MeJubilo. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacidad" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 