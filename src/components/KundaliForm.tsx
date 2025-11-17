import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import type { BirthDetails } from '../App';

interface KundaliFormProps {
  onGenerate: (details: BirthDetails) => void;
}

export function KundaliForm({ onGenerate }: KundaliFormProps) {
  const [formData, setFormData] = useState<BirthDetails>({
    name: '',
    date: '',
    time: '',
    place: '',
    latitude: '',
    longitude: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If coordinates not provided, use sample coordinates (Delhi)
    const details = {
      ...formData,
      latitude: formData.latitude || '28.6139',
      longitude: formData.longitude || '77.2090'
    };
    onGenerate(details);
  };

  const handleChange = (field: keyof BirthDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-orange-900 mb-4">Generate Your Kundali</h2>
        <p className="text-lg text-gray-600">
          Enter your birth details to get your personalized Vedic birth chart
        </p>
      </div>

      <Card className="border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Birth Details Form
          </CardTitle>
          <CardDescription>
            All fields are required for accurate Kundali generation
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-orange-600" />
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="border-orange-200 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  Date of Birth
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  required
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  Time of Birth
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  required
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="place" className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                Place of Birth
              </Label>
              <Input
                id="place"
                type="text"
                placeholder="City, State, Country"
                value={formData.place}
                onChange={(e) => handleChange('place', e.target.value)}
                required
                className="border-orange-200 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="latitude" className="mb-2 block">
                  Latitude (Optional)
                </Label>
                <Input
                  id="latitude"
                  type="text"
                  placeholder="e.g., 28.6139"
                  value={formData.latitude}
                  onChange={(e) => handleChange('latitude', e.target.value)}
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="longitude" className="mb-2 block">
                  Longitude (Optional)
                </Label>
                <Input
                  id="longitude"
                  type="text"
                  placeholder="e.g., 77.2090"
                  value={formData.longitude}
                  onChange={(e) => handleChange('longitude', e.target.value)}
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800">
                💡 <strong>Tip:</strong> For accurate predictions, please enter the exact time of birth. 
                If you don't know the coordinates, they will be automatically calculated based on your birth place.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
            >
              Generate Kundali
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
