import { Sparkles, BookOpen, ShoppingBag, Users } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🪔</div>
        <div className="absolute bottom-20 right-10 text-8xl">✨</div>
        <div className="absolute top-40 right-1/4 text-6xl">🌙</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-orange-600 text-white rounded-full">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Trusted by 50,000+ Users
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl text-orange-900 mb-6">
            Unlock Your Cosmic Destiny
          </h1>
          
          <p className="text-xl text-orange-800 mb-8 max-w-2xl mx-auto">
            Get personalized Vedic astrology insights, Kundali matching, gemstone recommendations, 
            and spiritual remedies from certified Jyotish experts
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              onClick={() => onNavigate('kundali')}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Generate Free Kundali
            </Button>
            <Button 
              onClick={() => onNavigate('astrologers')}
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8"
            >
              <Users className="w-5 h-5 mr-2" />
              Consult Astrologer
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl text-orange-600 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Kundalis Created</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl text-orange-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Expert Astrologers</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">💎</div>
              <div className="text-2xl text-orange-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Authentic Products</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">🌟</div>
              <div className="text-2xl text-orange-600 mb-1">4.8/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}