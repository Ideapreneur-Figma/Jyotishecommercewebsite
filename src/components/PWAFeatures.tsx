import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Smartphone, Zap, WifiOff, Bell, Download, 
  Shield, Battery, Repeat 
} from 'lucide-react';

export function PWAFeatures() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: 'Install Like Native App',
      description: 'Add to your home screen and access instantly like any other app'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Lightning Fast',
      description: '90% faster loading with intelligent caching technology'
    },
    {
      icon: <WifiOff className="w-8 h-8 text-blue-600" />,
      title: 'Works Offline',
      description: 'Access your Kundali and saved content without internet'
    },
    {
      icon: <Bell className="w-8 h-8 text-green-600" />,
      title: 'Push Notifications',
      description: 'Get instant alerts for consultations and daily horoscopes'
    },
    {
      icon: <Download className="w-8 h-8 text-purple-600" />,
      title: 'No App Store Needed',
      description: 'Install directly from browser - no downloads or updates'
    },
    {
      icon: <Battery className="w-8 h-8 text-emerald-600" />,
      title: 'Battery Efficient',
      description: 'Uses less battery and data than traditional apps'
    },
    {
      icon: <Repeat className="w-8 h-8 text-indigo-600" />,
      title: 'Auto Updates',
      description: 'Always get the latest features automatically'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Secure & Private',
      description: 'HTTPS encrypted with local data storage'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm mb-4">
            📱 Progressive Web App
          </div>
          <h2 className="text-4xl mb-4">Install Mero Jyotish App</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of a native app with all the benefits of the web. 
            Install now for instant access to all features!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-orange-200">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl mb-6 text-center">How to Install</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Android */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h4 className="mb-3">Android</h4>
              <ol className="text-sm text-gray-600 text-left space-y-2">
                <li>1. Tap install prompt at bottom</li>
                <li>2. Or tap menu (⋮) → "Add to Home Screen"</li>
                <li>3. Confirm installation</li>
                <li>4. Launch from home screen</li>
              </ol>
            </div>

            {/* iOS */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍎</span>
              </div>
              <h4 className="mb-3">iOS</h4>
              <ol className="text-sm text-gray-600 text-left space-y-2">
                <li>1. Open in Safari browser</li>
                <li>2. Tap Share button (↑)</li>
                <li>3. Scroll to "Add to Home Screen"</li>
                <li>4. Tap "Add" to confirm</li>
              </ol>
            </div>

            {/* Desktop */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="mb-3">Desktop</h4>
              <ol className="text-sm text-gray-600 text-left space-y-2">
                <li>1. Look for install icon (⊕) in address bar</li>
                <li>2. Click "Install"</li>
                <li>3. Confirm installation</li>
                <li>4. Launch from desktop</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl text-orange-600 mb-2">90%</div>
            <div className="text-sm text-gray-600">Faster Loading</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Offline Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-600 mb-2">0MB</div>
            <div className="text-sm text-gray-600">Download Size</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}
