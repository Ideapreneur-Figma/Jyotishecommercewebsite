import { Home, Calendar, MessageCircle, ShoppingBag, BarChart3, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat' | 'dashboard') => void;
  cartCount: number;
}

export function MobileBottomNav({ currentPage, onNavigate, cartCount }: MobileBottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'kundali', label: 'Kundali', icon: Sparkles },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'shop', label: 'Shop', icon: ShoppingBag, badge: cartCount }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 safe-area-inset-bottom">
      <nav className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-colors relative ${
                isActive ? 'text-orange-600' : 'text-gray-600'
              }`}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'text-orange-600' : 'text-gray-600'}`} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
