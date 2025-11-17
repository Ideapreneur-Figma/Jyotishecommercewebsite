import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Clock, MessageCircle, Phone, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AstrologersSectionProps {
  fullPage?: boolean;
}

export function AstrologersSection({ fullPage }: AstrologersSectionProps) {
  const astrologers = [
    {
      id: '1',
      name: 'Pandit Rajesh Sharma',
      expertise: ['Vedic Astrology', 'Kundali Matching', 'Career Guidance'],
      experience: 25,
      rating: 4.9,
      reviews: 1234,
      languages: ['Hindi', 'English', 'Sanskrit'],
      price: 299,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      specialization: 'Marriage & Relationships'
    },
    {
      id: '2',
      name: 'Dr. Priya Acharya',
      expertise: ['Numerology', 'Vastu', 'Gemstone Therapy'],
      experience: 18,
      rating: 4.8,
      reviews: 987,
      languages: ['Hindi', 'English', 'Marathi'],
      price: 399,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      specialization: 'Business & Finance'
    },
    {
      id: '3',
      name: 'Acharya Vikram Joshi',
      expertise: ['Prashna Kundali', 'Remedies', 'Muhurat'],
      experience: 30,
      rating: 5.0,
      reviews: 2156,
      languages: ['Hindi', 'English', 'Gujarati'],
      price: 499,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: false,
      specialization: 'Health & Remedies'
    },
    {
      id: '4',
      name: 'Pandit Suresh Kumar',
      expertise: ['KP Astrology', 'Medical Astrology', 'Sports'],
      experience: 22,
      rating: 4.7,
      reviews: 765,
      languages: ['Hindi', 'English', 'Tamil'],
      price: 349,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      specialization: 'Career & Education'
    },
    {
      id: '5',
      name: 'Guruji Anand Tiwari',
      expertise: ['Lal Kitab', 'Palmistry', 'Tarot'],
      experience: 15,
      rating: 4.8,
      reviews: 543,
      languages: ['Hindi', 'English', 'Bengali'],
      price: 249,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      specialization: 'Love & Compatibility'
    },
    {
      id: '6',
      name: 'Dr. Meera Desai',
      expertise: ['Vedic Remedies', 'Child Astrology', 'Name Numerology'],
      experience: 20,
      rating: 4.9,
      reviews: 1098,
      languages: ['Hindi', 'English', 'Kannada'],
      price: 379,
      image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
      specialization: 'Family & Children'
    }
  ];

  const displayAstrologers = fullPage ? astrologers : astrologers.slice(0, 3);

  return (
    <section className={`${fullPage ? '' : 'py-16 bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-orange-900 mb-4">
            {fullPage ? 'Our Expert Astrologers' : 'Consult Expert Astrologers'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance from certified Jyotish experts with years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayAstrologers.map((astrologer) => (
            <Card key={astrologer.id} className="hover:shadow-xl transition-shadow">
              <CardHeader className="relative pb-0">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-200">
                      <ImageWithFallback
                        src={astrologer.image}
                        alt={astrologer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {astrologer.available && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{astrologer.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{astrologer.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400">({astrologer.reviews} reviews)</span>
                    </div>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      {astrologer.experience} yrs exp
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-3">
                  <p className="text-sm mb-2">{astrologer.specialization}</p>
                  <div className="flex flex-wrap gap-1">
                    {astrologer.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>{astrologer.languages.join(', ')}</span>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-xl text-orange-600">₹{astrologer.price}/session</div>
                  </div>
                  {astrologer.available ? (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      <Clock className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Busy</Badge>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    disabled={!astrologer.available}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    disabled={!astrologer.available}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    disabled={!astrologer.available}
                  >
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!fullPage && (
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              View All Astrologers
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
