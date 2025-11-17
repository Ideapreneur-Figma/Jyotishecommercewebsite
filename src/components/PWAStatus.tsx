import { useEffect, useState } from 'react';
import { Smartphone, Chrome } from 'lucide-react';

export function PWAStatus() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if running as PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    
    setIsPWA(isStandalone || isInWebAppiOS);
  }, []);

  if (!isPWA) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-1 px-4 text-center text-xs z-50">
      <div className="flex items-center justify-center gap-2">
        <Smartphone className="w-3 h-3" />
        <span>Running as installed app</span>
      </div>
    </div>
  );
}
