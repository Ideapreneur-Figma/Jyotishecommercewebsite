import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🕉️</span>
              <h3 className="text-xl">Jyotish Kendra</h3>
            </div>
            <p className="text-orange-100 text-sm mb-4">
              Your trusted platform for authentic Vedic astrology services, spiritual products, 
              and personalized guidance from expert astrologers.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-orange-100">
              <li>
                <button onClick={() => onNavigate('kundali')} className="hover:text-white transition-colors">
                  Kundali Generation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('horoscope')} className="hover:text-white transition-colors">
                  Daily Horoscope
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('panchang')} className="hover:text-white transition-colors">
                  Panchang & Muhurat
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('astrologers')} className="hover:text-white transition-colors">
                  Consult Astrologer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  Shop Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chat')} className="hover:text-white transition-colors">
                  Chat with Astrologer
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li>Birth Chart Analysis</li>
              <li>Kundali Matching</li>
              <li>Gemstone Consultation</li>
              <li>Vastu Shastra</li>
              <li>Numerology</li>
              <li>Palmistry</li>
              <li>Tarot Reading</li>
              <li>Spiritual Remedies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-orange-100 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Temple Road, Varanasi, Uttar Pradesh 221001, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@jyotishkendra.com</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-orange-800 rounded-lg">
              <p className="text-xs text-orange-100">
                ⏰ Available 24/7 for consultations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-orange-200">
            <p>© 2025 Jyotish Kendra. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}