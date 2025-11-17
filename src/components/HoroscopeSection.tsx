import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function HoroscopeSection() {
  const [selectedSign, setSelectedSign] = useState<string>('aries');

  const zodiacSigns = [
    { id: 'aries', name: 'Aries', symbol: '♈', emoji: '🐏', dates: 'Mar 21 - Apr 19' },
    { id: 'taurus', name: 'Taurus', symbol: '♉', emoji: '🐂', dates: 'Apr 20 - May 20' },
    { id: 'gemini', name: 'Gemini', symbol: '♊', emoji: '👯', dates: 'May 21 - Jun 20' },
    { id: 'cancer', name: 'Cancer', symbol: '♋', emoji: '🦀', dates: 'Jun 21 - Jul 22' },
    { id: 'leo', name: 'Leo', symbol: '♌', emoji: '🦁', dates: 'Jul 23 - Aug 22' },
    { id: 'virgo', name: 'Virgo', symbol: '♍', emoji: '👸', dates: 'Aug 23 - Sep 22' },
    { id: 'libra', name: 'Libra', symbol: '♎', emoji: '⚖️', dates: 'Sep 23 - Oct 22' },
    { id: 'scorpio', name: 'Scorpio', symbol: '♏', emoji: '🦂', dates: 'Oct 23 - Nov 21' },
    { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', emoji: '🏹', dates: 'Nov 22 - Dec 21' },
    { id: 'capricorn', name: 'Capricorn', symbol: '♑', emoji: '🐐', dates: 'Dec 22 - Jan 19' },
    { id: 'aquarius', name: 'Aquarius', symbol: '♒', emoji: '🏺', dates: 'Jan 20 - Feb 18' },
    { id: 'pisces', name: 'Pisces', symbol: '♓', emoji: '🐟', dates: 'Feb 19 - Mar 20' }
  ];

  const horoscopes: Record<string, any> = {
    aries: {
      daily: {
        overall: 'Today brings new opportunities for growth and success. Your energy levels are high.',
        love: 'Single Aries may encounter someone special. Couples should focus on communication.',
        career: 'A promotion or recognition is on the horizon. Stay confident in your abilities.',
        health: 'Good day for physical activities. Maintain hydration and balanced diet.',
        lucky: { number: 7, color: 'Red', time: '10 AM - 12 PM' }
      }
    },
    // Add more signs as needed (using same template for demo)
  };

  const currentHoroscope = horoscopes[selectedSign] || horoscopes.aries;
  const currentSign = zodiacSigns.find(s => s.id === selectedSign) || zodiacSigns[0];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-orange-900 mb-4">Daily Horoscope</h2>
        <p className="text-lg text-gray-600">
          Read your personalized daily predictions - Updated every day
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {zodiacSigns.map((sign) => (
          <Button
            key={sign.id}
            onClick={() => setSelectedSign(sign.id)}
            variant={selectedSign === sign.id ? 'default' : 'outline'}
            className={`h-auto flex-col py-4 ${
              selectedSign === sign.id 
                ? 'bg-orange-600 hover:bg-orange-700' 
                : 'border-orange-200 hover:bg-orange-50'
            }`}
          >
            <span className="text-3xl mb-2">{sign.emoji}</span>
            <span className="text-sm">{sign.name}</span>
            <span className="text-xs opacity-70">{sign.dates}</span>
          </Button>
        ))}
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-4xl">{currentSign.emoji}</span>
                  <div>
                    <div>{currentSign.name} {currentSign.symbol}</div>
                    <CardDescription>{currentSign.dates}</CardDescription>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-orange-600">Overall</h3>
                    <p className="text-gray-700">{currentHoroscope.daily.overall}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-pink-600">❤️ Love</h3>
                    <p className="text-gray-700">{currentHoroscope.daily.love}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-blue-600">💼 Career</h3>
                    <p className="text-gray-700">{currentHoroscope.daily.career}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-green-600">🏥 Health</h3>
                    <p className="text-gray-700">{currentHoroscope.daily.health}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🍀</span>
                    Lucky Factors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{currentHoroscope.daily.lucky.number}</div>
                      <div className="text-sm text-gray-600">Lucky Number</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-red-500"></div>
                      </div>
                      <div className="text-sm text-gray-600">{currentHoroscope.daily.lucky.color}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">⏰</div>
                      <div className="text-sm text-gray-600">{currentHoroscope.daily.lucky.time}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💫</span>
                    Planetary Transits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>☀️ Sun in Aries</span>
                      <span className="text-green-600">Favorable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>🌙 Moon in Sagittarius</span>
                      <span className="text-green-600">Favorable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>♂️ Mars in Gemini</span>
                      <span className="text-orange-600">Moderate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="weekly">
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle>Weekly Horoscope - {currentSign.name} {currentSign.emoji}</CardTitle>
              <CardDescription>Week of November 17 - November 23, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                This week brings significant opportunities for personal and professional growth. The planetary alignments 
                favor your sign, especially mid-week when Jupiter's influence peaks. Focus on long-term goals and maintain 
                positive relationships. Financial matters look promising after Thursday.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="text-orange-600 mb-2">Highlights</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Career advancement opportunities</li>
                    <li>✓ Improved family relationships</li>
                    <li>✓ Financial gains expected</li>
                    <li>✓ Good health throughout the week</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="text-yellow-700 mb-2">Things to Watch</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>⚠ Avoid major decisions on Monday</li>
                    <li>⚠ Be cautious with expenses</li>
                    <li>⚠ Stay patient in relationships</li>
                    <li>⚠ Rest adequately on weekends</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle>Monthly Horoscope - {currentSign.name} {currentSign.emoji}</CardTitle>
              <CardDescription>November 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                November is a transformative month for {currentSign.name}. The cosmic energies are aligned in your favor, 
                bringing opportunities for growth, success, and personal development. This is an excellent time to pursue 
                new ventures, strengthen relationships, and focus on your health and well-being.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="text-pink-700 mb-2">❤️ Love & Relationships</h4>
                  <p className="text-sm text-gray-700">
                    Romance is in the air! Singles may meet someone special around mid-month. Couples should plan 
                    quality time together. Communication is key to harmony.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-blue-700 mb-2">💼 Career & Finance</h4>
                  <p className="text-sm text-gray-700">
                    Professional growth is highlighted. Expect recognition for your hard work. Financial stability 
                    improves after the 15th. Good time for investments.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-green-700 mb-2">🏥 Health & Wellness</h4>
                  <p className="text-sm text-gray-700">
                    Overall health remains good. Focus on maintaining a balanced diet and regular exercise routine. 
                    Stress management is important towards month-end.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
