import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock, Moon, Sun, Star } from 'lucide-react';

export function PanchangSection() {
  const today = new Date();
  const panchangData = {
    date: today.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tithi: 'Shukla Paksha Panchami (5th day of waxing moon)',
    nakshatra: 'Rohini (रोहिणी)',
    yoga: 'Siddha Yoga',
    karana: 'Bava',
    sunrise: '06:42 AM',
    sunset: '05:38 PM',
    moonrise: '09:15 AM',
    moonset: '08:42 PM',
    paksha: 'Shukla Paksha (Waxing Moon)',
    rashi: 'Vrishabha (Taurus)',
    vikramSamvat: '2082',
    shakaSamvat: '1947',
    kaliSamvat: '5127',
    auspiciousTimes: [
      { name: 'Abhijit Muhurat', time: '11:52 AM - 12:38 PM', type: 'Very Auspicious' },
      { name: 'Brahma Muhurat', time: '05:10 AM - 06:02 AM', type: 'Spiritual' },
      { name: 'Vijaya Muhurat', time: '02:15 PM - 03:01 PM', type: 'Victory' }
    ],
    inauspiciousTimes: [
      { name: 'Rahu Kaal', time: '03:00 PM - 04:30 PM' },
      { name: 'Yamaganda', time: '09:00 AM - 10:30 AM' },
      { name: 'Gulika Kaal', time: '01:30 PM - 03:00 PM' }
    ],
    festivals: ['Kartik Purnima'],
    vrat: 'Ekadashi Fast (upcoming)'
  };

  const muhuratData = [
    {
      purpose: 'Marriage',
      date: 'November 25, 2025',
      time: '10:30 AM - 12:00 PM',
      nakshatra: 'Uttara Phalguni',
      status: 'Highly Auspicious'
    },
    {
      purpose: 'Business Opening',
      date: 'November 20, 2025',
      time: '11:15 AM - 12:45 PM',
      nakshatra: 'Pushya',
      status: 'Auspicious'
    },
    {
      purpose: 'Vehicle Purchase',
      date: 'November 22, 2025',
      time: '09:00 AM - 10:30 AM',
      nakshatra: 'Ashwini',
      status: 'Favorable'
    },
    {
      purpose: 'Griha Pravesh',
      date: 'November 28, 2025',
      time: '07:00 AM - 09:00 AM',
      nakshatra: 'Rohini',
      status: 'Highly Auspicious'
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-orange-900 mb-4">Panchang & Muhurat</h2>
        <p className="text-lg text-gray-600">
          Daily Hindu calendar with auspicious timings for all activities
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Main Panchang Card */}
        <Card className="lg:col-span-2 border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-orange-600" />
              Today's Panchang
            </CardTitle>
            <CardDescription>{panchangData.date}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-sm text-gray-600 mb-1">Tithi (तिथि)</h4>
                  <p>{panchangData.tithi}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-sm text-gray-600 mb-1">Nakshatra (नक्षत्र)</h4>
                  <p>{panchangData.nakshatra}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-sm text-gray-600 mb-1">Yoga (योग)</h4>
                  <p>{panchangData.yoga}</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-sm text-gray-600 mb-1">Karana (करण)</h4>
                  <p>{panchangData.karana}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-600" />
                    Sun Timings
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sunrise:</span>
                      <span>{panchangData.sunrise}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunset:</span>
                      <span>{panchangData.sunset}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-indigo-50 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-600" />
                    Moon Timings
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Moonrise:</span>
                      <span>{panchangData.moonrise}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Moonset:</span>
                      <span>{panchangData.moonset}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-pink-50 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-2">Additional Info</h4>
                  <div className="space-y-1 text-sm">
                    <div><strong>Paksha:</strong> {panchangData.paksha}</div>
                    <div><strong>Rashi:</strong> {panchangData.rashi}</div>
                    <div><strong>Vikram Samvat:</strong> {panchangData.vikramSamvat}</div>
                  </div>
                </div>
              </div>
            </div>

            {panchangData.festivals.length > 0 && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <h4 className="mb-2 text-yellow-800 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <strong>Today's Festival:</strong>
                </h4>
                <p className="text-yellow-900">{panchangData.festivals.join(', ')}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Timings Card */}
        <div className="space-y-6">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Clock className="w-5 h-5" />
                Auspicious Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {panchangData.auspiciousTimes.map((time, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-green-200">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-green-800">{time.name}</p>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                        {time.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{time.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <Clock className="w-5 h-5" />
                Inauspicious Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {panchangData.inauspiciousTimes.map((time, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                    <p className="text-red-800 mb-1">{time.name}</p>
                    <p className="text-sm text-gray-600">{time.time}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-red-700 mt-4">
                ⚠️ Avoid starting new ventures during these times
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Muhurat */}
      <Card className="border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-600" />
            Upcoming Auspicious Muhurat
          </CardTitle>
          <CardDescription>
            Best dates and times for important life events
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {muhuratData.map((muhurat, index) => (
              <div key={index} className="p-4 border-2 border-orange-100 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg text-orange-900 mb-1">{muhurat.purpose}</h4>
                    <p className="text-sm text-gray-600">{muhurat.date}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    muhurat.status === 'Highly Auspicious' 
                      ? 'bg-green-100 text-green-800' 
                      : muhurat.status === 'Auspicious'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {muhurat.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>{muhurat.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-4 h-4 text-orange-600" />
                    <span>{muhurat.nakshatra}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
