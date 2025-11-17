import { Sparkles, Heart, Gem, Calendar, Moon, Star, MessageCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ServicesSectionProps {
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat') => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-orange-600" />,
      title: 'Kundali Generation',
      description: 'Get your detailed birth chart with planetary positions, dashas, and predictions',
      action: () => onNavigate('kundali'),
      buttonText: 'Create Kundali'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'Kundali Matching',
      description: 'Check compatibility for marriage with Ashtakoot Milan and Manglik Dosha analysis',
      action: () => onNavigate('kundali'),
      buttonText: 'Match Kundali'
    },
    {
      icon: <Gem className="w-8 h-8 text-purple-600" />,
      title: 'Gemstone Recommendation',
      description: 'Discover the perfect gemstone based on your birth chart for prosperity',
      action: () => onNavigate('shop'),
      buttonText: 'Find Gemstone'
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: 'Muhurat Selection',
      description: 'Find auspicious time for important events like marriage, business, travel',
      action: () => onNavigate('panchang'),
      buttonText: 'Check Muhurat'
    },
    {
      icon: <Moon className="w-8 h-8 text-indigo-600" />,
      title: 'Daily Panchang',
      description: 'Get daily tithi, nakshatra, yoga, karana and auspicious timings',
      action: () => onNavigate('panchang'),
      buttonText: 'View Panchang'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: 'Daily Horoscope',
      description: 'Read personalized daily predictions for all zodiac signs',
      action: () => onNavigate('horoscope'),
      buttonText: 'Read Horoscope'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: 'Live Consultation',
      description: 'Chat or call with expert astrologers for personalized guidance',
      action: () => onNavigate('astrologers'),
      buttonText: 'Consult Now'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Remedies & Solutions',
      description: 'Get personalized remedies for doshas, planetary afflictions, and life problems',
      action: () => onNavigate('astrologers'),
      buttonText: 'Get Remedies'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-orange-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Vedic astrology services to guide you through life's journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-orange-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={service.action}
                  variant="outline" 
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}