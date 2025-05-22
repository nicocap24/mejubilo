import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              MeJubilo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/acerca" className="text-gray-600 hover:text-gray-900">
              Acerca de
            </Link>
            <Link href="/precios" className="text-gray-600 hover:text-gray-900">
              Precios
            </Link>
            <Link href="/aprende" className="text-gray-600 hover:text-gray-900">
              Aprende
            </Link>
            <Link 
              href="/entra" 
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full transition-colors"
            >
              Entra
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 