import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { KundaliForm } from './components/KundaliForm';
import { KundaliDisplay } from './components/KundaliDisplay';
import { ProductsSection } from './components/ProductsSection';
import { AstrologersSection } from './components/AstrologersSection';
import { HoroscopeSection } from './components/HoroscopeSection';
import { PanchangSection } from './components/PanchangSection';
import { ConsultationInterface } from './components/ConsultationInterface';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';

export interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
  latitude: string;
  longitude: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat' | 'dashboard'>('dashboard');
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const handleGenerateKundali = (details: BirthDetails) => {
    setBirthDetails(details);
  };

  const handleBackToForm = () => {
    setBirthDetails(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {currentPage !== 'dashboard' && (
        <Header 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />
      )}
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={setCurrentPage} />
          <ServicesSection onNavigate={setCurrentPage} />
          <ProductsSection addToCart={addToCart} />
          <AstrologersSection />
        </>
      )}

      {currentPage === 'kundali' && (
        <div className="container mx-auto px-4 py-12">
          {!birthDetails ? (
            <KundaliForm onGenerate={handleGenerateKundali} />
          ) : (
            <KundaliDisplay birthDetails={birthDetails} onBack={handleBackToForm} />
          )}
        </div>
      )}

      {currentPage === 'shop' && (
        <div className="container mx-auto px-4 py-12">
          <ProductsSection addToCart={addToCart} fullPage />
        </div>
      )}

      {currentPage === 'horoscope' && (
        <div className="container mx-auto px-4 py-12">
          <HoroscopeSection />
        </div>
      )}

      {currentPage === 'panchang' && (
        <div className="container mx-auto px-4 py-12">
          <PanchangSection />
        </div>
      )}

      {currentPage === 'astrologers' && (
        <div className="container mx-auto px-4 py-12">
          <AstrologersSection fullPage />
        </div>
      )}

      {currentPage === 'chat' && (
        <ConsultationInterface />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard 
          onNavigate={setCurrentPage}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
      )}

      {currentPage !== 'dashboard' && currentPage !== 'chat' && (
        <Footer onNavigate={setCurrentPage} />
      )}

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
      />
    </div>
  );
}