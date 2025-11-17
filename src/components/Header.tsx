import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat' | 'dashboard') => void;
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ currentPage, onNavigate, cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'kundali', label: 'Kundali' },
    { id: 'horoscope', label: 'Horoscope' },
    { id: 'panchang', label: 'Panchang' },
    { id: 'astrologers', label: 'Astrologers' },
    { id: 'chat', label: 'Chat' },
    { id: 'shop', label: 'Shop' },
  ];

  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl">🕉️</span>
            </div>
            <div>
              <h1 className="text-2xl tracking-wide">Jyotish Kendra</h1>
              <p className="text-xs text-orange-100">Vedic Astrology & Spiritual Solutions</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`hover:text-orange-200 transition-colors ${
                  currentPage === item.id ? 'border-b-2 border-white pb-1' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-orange-700 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-orange-900 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-orange-700 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors ${
                  currentPage === item.id ? 'bg-orange-700' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}