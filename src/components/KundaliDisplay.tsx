import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import type { BirthDetails } from '../App';

interface KundaliDisplayProps {
  birthDetails: BirthDetails;
  onBack: () => void;
}

export function KundaliDisplay({ birthDetails, onBack }: KundaliDisplayProps) {
  // Sample Kundali data - North Indian style
  const houses = [
    { number: 1, sign: 'Aries', symbol: '♈', planets: [{ name: 'लग्न', degree: '28°', color: 'text-red-600' }, { name: 'चन्द्र', degree: '24°', color: 'text-blue-600' }], lord: 'Mars' },
    { number: 2, sign: 'Taurus', symbol: '♉', planets: [{ name: 'सूर्य', degree: '9°', color: 'text-red-600' }, { name: 'बुध', degree: '28°', color: 'text-green-600' }], lord: 'Venus' },
    { number: 3, sign: 'Gemini', symbol: '♊', planets: [], lord: 'Mercury' },
    { number: 4, sign: 'Cancer', symbol: '♋', planets: [{ name: 'गुरु', degree: '19°', color: 'text-purple-600' }, { name: 'राहु', degree: '25°', color: 'text-blue-600' }], lord: 'Moon' },
    { number: 5, sign: 'Leo', symbol: '♌', planets: [], lord: 'Sun' },
    { number: 6, sign: 'Virgo', symbol: '♍', planets: [{ name: 'मंगल', degree: '14°', color: 'text-red-600' }, { name: 'शनि', degree: '21°', color: 'text-blue-600' }], lord: 'Mercury' },
    { number: 7, sign: 'Libra', symbol: '♎', planets: [], lord: 'Venus' },
    { number: 8, sign: 'Scorpio', symbol: '♏', planets: [], lord: 'Mars' },
    { number: 9, sign: 'Sagittarius', symbol: '♐', planets: [], lord: 'Jupiter' },
    { number: 10, sign: 'Capricorn', symbol: '♑', planets: [], lord: 'Saturn' },
    { number: 11, sign: 'Aquarius', symbol: '♒', planets: [{ name: 'केतु', degree: '25°', color: 'text-purple-600' }], lord: 'Saturn' },
    { number: 12, sign: 'Pisces', symbol: '♓', planets: [{ name: 'शुक्र', degree: '27°', color: 'text-pink-600' }], lord: 'Jupiter' }
  ];

  const planetaryPositions = [
    { planet: 'Sun (Surya)', sign: 'Aries', degree: '15°23\'', house: 1, strength: 'Strong' },
    { planet: 'Moon (Chandra)', sign: 'Sagittarius', degree: '8°45\'', house: 9, strength: 'Medium' },
    { planet: 'Mars (Mangal)', sign: 'Gemini', degree: '22°11\'', house: 3, strength: 'Strong' },
    { planet: 'Mercury (Budh)', sign: 'Aries', degree: '18°56\'', house: 1, strength: 'Medium' },
    { planet: 'Jupiter (Guru)', sign: 'Leo', degree: '12°34\'', house: 5, strength: 'Exalted' },
    { planet: 'Venus (Shukra)', sign: 'Libra', degree: '25°19\'', house: 7, strength: 'Strong' },
    { planet: 'Saturn (Shani)', sign: 'Aquarius', degree: '6°42\'', house: 11, strength: 'Own Sign' },
    { planet: 'Rahu', sign: 'Pisces', degree: '14°28\'', house: 12, strength: 'Medium' },
    { planet: 'Ketu', sign: 'Virgo', degree: '14°28\'', house: 6, strength: 'Medium' }
  ];

  const dashas = [
    { period: 'Maha Dasha', planet: 'Venus', from: '2020-01-15', to: '2040-01-15' },
    { period: 'Antar Dasha', planet: 'Sun', from: '2023-05-20', to: '2024-09-20' },
    { period: 'Pratyantar Dasha', planet: 'Moon', from: '2024-10-01', to: '2024-12-15' }
  ];

  // North Indian chart layout - houses are in fixed positions
  const northIndianLayout = [
    11, 0, 1, 2,
    10, null, null, 3,
    9, null, null, 4,
    8, 7, 6, 5
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button onClick={onBack} variant="outline" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Form
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Birth Details */}
      <Card className="border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">👤</span>
            Birth Details
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p>{birthDetails.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p>{new Date(birthDetails.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time of Birth</p>
              <p>{birthDetails.time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Place of Birth</p>
              <p>{birthDetails.place}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Birth Chart Tabs */}
      <Tabs defaultValue="rasi" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="rasi">Rasi Chart</TabsTrigger>
          <TabsTrigger value="navamsa">Navamsa</TabsTrigger>
          <TabsTrigger value="bhava">Bhava Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="rasi">
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Rasi Chart (North Indian Style)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="max-w-2xl mx-auto">
                <p className="text-center mb-4 text-sm text-gray-600">
                  Ascendant (Lagna): <span className="text-orange-600">Aries (Mesha)</span>
                </p>
                <NorthIndianChart houses={houses} layout={northIndianLayout} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navamsa">
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Navamsa Chart (D9) - North Indian Style
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="max-w-2xl mx-auto">
                <p className="text-center mb-4 text-sm text-gray-600">
                  Navamsa Lagna: <span className="text-orange-600">Leo (Simha)</span>
                </p>
                <NorthIndianChart houses={houses} layout={northIndianLayout} />
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Navamsa chart is used for marriage compatibility and detailed analysis
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bhava">
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Bhava Chart (Chalit) - North Indian Style
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="max-w-2xl mx-auto">
                <p className="text-center mb-4 text-sm text-gray-600">
                  Bhava Madhya: <span className="text-orange-600">Based on house cusps</span>
                </p>
                <NorthIndianChart houses={houses} layout={northIndianLayout} />
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Bhava chart shows the actual house cusps for precise predictions
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Planetary Positions */}
      <Card className="border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🪐</span>
            Planetary Positions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-3 px-4">Planet</th>
                  <th className="text-left py-3 px-4">Sign</th>
                  <th className="text-left py-3 px-4">Degree</th>
                  <th className="text-left py-3 px-4">House</th>
                  <th className="text-left py-3 px-4">Strength</th>
                </tr>
              </thead>
              <tbody>
                {planetaryPositions.map((planet, index) => (
                  <tr key={index} className="border-b border-orange-100 hover:bg-orange-50">
                    <td className="py-3 px-4">{planet.planet}</td>
                    <td className="py-3 px-4">{planet.sign}</td>
                    <td className="py-3 px-4">{planet.degree}</td>
                    <td className="py-3 px-4">{planet.house}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        planet.strength === 'Exalted' || planet.strength === 'Own Sign' 
                          ? 'bg-green-100 text-green-800' 
                          : planet.strength === 'Strong' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {planet.strength}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Dasha System */}
      <Card className="border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            Current Dasha Periods (Vimshottari)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {dashas.map((dasha, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div>
                  <p>{dasha.period}</p>
                  <p className="text-orange-600">{dasha.planet}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{new Date(dasha.from).toLocaleDateString('en-IN')} to</p>
                  <p>{new Date(dasha.to).toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <span className="text-2xl">💎</span>
            Gemstone Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💍</span>
              <div>
                <p><strong>Primary Gemstone:</strong> Red Coral (Moonga)</p>
                <p className="text-sm text-gray-700">For strengthening Mars - Wear on Tuesday morning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💍</span>
              <div>
                <p><strong>Secondary Gemstone:</strong> Yellow Sapphire (Pukhraj)</p>
                <p className="text-sm text-gray-700">For strengthening Jupiter - Wear on Thursday morning</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function NorthIndianChart({ houses, layout }: { houses: any[]; layout: (number | null)[] }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Diamond-shaped Kundali Chart */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          {/* Background gradient */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FEF3C7', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FDE68A', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
            </linearGradient>
            
            {/* Rounded corner paths for the 4 cardinal directions */}
            <clipPath id="roundedDiamond">
              <path d="M400,50 L700,350 Q750,400,700,450 L450,700 Q400,750,350,700 L100,450 Q50,400,100,350 L350,100 Q400,50,400,50 Z" />
            </clipPath>
          </defs>
          
          {/* Main background */}
          <rect width="800" height="800" fill="url(#bgGradient)" clipPath="url(#roundedDiamond)" />
          
          {/* Border */}
          <path 
            d="M400,50 L700,350 Q750,400,700,450 L450,700 Q400,750,350,700 L100,450 Q50,400,100,350 L350,100 Q400,50,400,50 Z" 
            fill="none" 
            stroke="#D97706" 
            strokeWidth="4"
          />
          
          {/* Diagonal lines creating houses */}
          <line x1="400" y1="50" x2="400" y2="750" stroke="#374151" strokeWidth="2" />
          <line x1="50" y1="400" x2="750" y2="400" stroke="#374151" strokeWidth="2" />
          <line x1="150" y1="150" x2="650" y2="650" stroke="#374151" strokeWidth="2" />
          <line x1="650" y1="150" x2="150" y2="650" stroke="#374151" strokeWidth="2" />
          
          {/* Center circle for Ganesha */}
          <circle cx="400" cy="400" r="60" fill="#2563EB" stroke="#1E40AF" strokeWidth="3" />
          <text x="400" y="420" textAnchor="middle" fontSize="48" fill="white">🕉️</text>
        </svg>
        
        {/* House content positioned absolutely */}
        <div className="absolute inset-0">
          {/* House 12 - Top */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center w-32">
            <HouseContent house={houses[11]} />
          </div>
          
          {/* House 1 - Top Right */}
          <div className="absolute top-[15%] right-[15%] text-center w-32">
            <HouseContent house={houses[0]} />
          </div>
          
          {/* House 2 - Right Top */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[8%] text-center w-32">
            <HouseContent house={houses[1]} />
          </div>
          
          {/* House 3 - Right Bottom */}
          <div className="absolute bottom-[15%] right-[15%] text-center w-32">
            <HouseContent house={houses[2]} />
          </div>
          
          {/* House 4 - Bottom */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center w-32">
            <HouseContent house={houses[3]} />
          </div>
          
          {/* House 5 - Bottom Left */}
          <div className="absolute bottom-[15%] left-[15%] text-center w-32">
            <HouseContent house={houses[4]} />
          </div>
          
          {/* House 6 - Left Bottom */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[8%] text-center w-32">
            <HouseContent house={houses[5]} />
          </div>
          
          {/* House 7 - Left Top */}
          <div className="absolute top-[15%] left-[15%] text-center w-32">
            <HouseContent house={houses[6]} />
          </div>
          
          {/* House 8 - Top left section */}
          <div className="absolute top-[22%] left-[28%] text-center w-20">
            <div className="text-lg text-pink-600">{houses[7].number}</div>
          </div>
          
          {/* House 9 - Top center section */}
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 text-center w-20">
            <div className="text-lg text-red-600">{houses[8].number}</div>
          </div>
          
          {/* House 10 - Left center section */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[22%] text-center w-20">
            <div className="text-lg text-blue-600">{houses[9].number}</div>
          </div>
          
          {/* House 11 - Bottom left section */}
          <div className="absolute bottom-[28%] left-[28%] text-center w-20">
            <div className="text-lg text-green-600">{houses[10].number}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HouseContent({ house }: { house: any }) {
  return (
    <div className="space-y-1">
      <div className="text-xl font-bold" style={{ color: getHouseNumberColor(house.number) }}>
        {house.number}
      </div>
      {house.planets.length > 0 && (
        <div className="space-y-1">
          {house.planets.map((planet: { name: string; degree: string; color: string }, idx: number) => (
            <div key={idx} className="text-sm">
              <span className={planet.color}>{planet.name}</span>
              <span className="text-blue-600 ml-1">{planet.degree}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getHouseNumberColor(num: number): string {
  const colors = [
    '#DC2626', // 1 - red
    '#DC2626', // 2 - red  
    '#DC2626', // 3 - red
    '#2563EB', // 4 - blue
    '#8B5CF6', // 5 - purple
    '#DB2777', // 6 - pink
    '#059669', // 7 - green
    '#DB2777', // 8 - pink
    '#DC2626', // 9 - red
    '#2563EB', // 10 - blue
    '#059669', // 11 - green
    '#8B5CF6', // 12 - purple
  ];
  return colors[num - 1] || '#000000';
}

function NorthIndianHouse({ house, isCorner }: { house: any; isCorner: boolean }) {
  return (
    <div className={`aspect-square border border-orange-400 p-2 hover:bg-orange-50 transition-colors relative ${
      isCorner ? 'bg-orange-50/50' : 'bg-white'
    }`}>
      <div className="h-full flex flex-col">
        {/* House number in top-left corner */}
        <div className="absolute top-1 left-1 text-xs text-gray-400 font-mono">
          {house.number}
        </div>
        
        {/* Sign and symbol */}
        <div className="text-center mt-3 mb-1">
          <div className="text-sm text-gray-600">{house.sign}</div>
          <div className="text-lg text-orange-600">{house.symbol}</div>
        </div>
        
        {/* Planets */}
        {house.planets.length > 0 && (
          <div className="flex-1 flex flex-col gap-1 mt-1">
            {house.planets.map((planet: { name: string; degree: string; color: string }, idx: number) => (
              <div 
                key={idx} 
                className={`text-xs ${planet.color} rounded px-1 py-0.5 text-center leading-tight`}
              >
                {planet.name} {planet.degree}
              </div>
            ))}
          </div>
        )}
        
        {/* Lord - small text at bottom */}
        <div className="text-xs text-gray-400 text-center mt-auto">
          {house.lord}
        </div>
      </div>
    </div>
  );
}