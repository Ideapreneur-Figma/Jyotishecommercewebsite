import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, Menu, Moon, Bell, ChevronDown, TrendingUp, TrendingDown,
  Phone, MessageCircle, FileText, Plus, Calendar as CalendarIcon,
  User, BarChart3, Wallet, MoreVertical, PhoneIncoming, PhoneOutgoing,
  PhoneMissed, ShoppingBag, Star, Sparkles, BookOpen
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardProps {
  onNavigate: (page: 'home' | 'kundali' | 'shop' | 'horoscope' | 'panchang' | 'astrologers' | 'chat' | 'dashboard') => void;
  onOpenCart: () => void;
  cartCount: number;
}

export function Dashboard({ onNavigate, onOpenCart, cartCount }: DashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('Yearly');

  // Stats data
  const stats = [
    {
      title: 'Active Sessions',
      value: '8',
      subtitle: '3 calls, 5 chats',
      change: null
    },
    {
      title: 'Kundalis Generated',
      value: '12',
      subtitle: '6 Kundali, 6 others',
      change: null
    },
    {
      title: 'Consultations',
      value: '24',
      subtitle: '-48% From last month',
      change: 'down',
      changeValue: '-48%'
    }
  ];

  const revenueCards = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Revenue',
      amount: 'Rs.50,000',
      subtitle: '16 calls completed',
      color: 'bg-blue-50'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Chat Revenue',
      amount: '8',
      subtitle: '18 chat sessions',
      color: 'bg-green-50'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Report Revenue',
      amount: '12',
      subtitle: '2 reports delivered',
      color: 'bg-purple-50'
    }
  ];

  const actionButtons = [
    {
      icon: <Plus className="w-5 h-5 text-gray-600" />,
      title: 'New Session',
      subtitle: 'Start a new consultation',
      color: 'bg-white',
      action: () => onNavigate('chat')
    },
    {
      icon: <FileText className="w-5 h-5 text-orange-600" />,
      title: 'Generate Report',
      subtitle: 'Create Kundali report',
      color: 'bg-orange-50',
      action: () => onNavigate('kundali')
    },
    {
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      title: 'Add Balance',
      subtitle: 'Renew account balance',
      color: 'bg-blue-50',
      action: () => onOpenCart()
    },
    {
      icon: <Bell className="w-5 h-5 text-green-600" />,
      title: 'Notifications',
      subtitle: 'View pending alerts',
      color: 'bg-green-50',
      action: () => {}
    }
  ];

  const callStats = [
    {
      title: 'Incoming Calls',
      value: '45',
      subtitle: 'Vs 497 prev. 7 days',
      period: 'Last 7 days',
      icon: <PhoneIncoming className="w-8 h-8 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Answered Calls',
      value: '100',
      subtitle: 'Vs 497 prev. 7 days',
      period: 'Last 7 days',
      icon: <Phone className="w-8 h-8 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Abandoned Calls',
      value: '12',
      subtitle: 'Vs 497 prev. 7 days',
      period: 'Last 7 days',
      icon: <PhoneMissed className="w-8 h-8 text-white" />,
      color: 'bg-red-500'
    }
  ];

  const recentActivity = [
    {
      name: 'Rajesh Kumar',
      action: 'Requested a call session',
      time: '45 min',
      amount: '₹800',
      status: 'completed',
      avatar: 'RK',
      bgColor: 'bg-orange-100 text-orange-700',
      onClick: () => onNavigate('chat')
    },
    {
      name: 'Amit Patel',
      action: 'Requested Kundali report',
      time: '1 hour ago',
      amount: '₹500',
      status: 'delivered',
      avatar: 'AP',
      bgColor: 'bg-blue-100 text-blue-700',
      onClick: () => onNavigate('kundali')
    },
    {
      name: 'Priya Sharma',
      action: 'started a chat session',
      time: 'ongoing',
      amount: '₹200',
      status: 'active',
      avatar: 'PS',
      bgColor: 'bg-pink-100 text-pink-700',
      onClick: () => onNavigate('chat')
    },
    {
      name: 'Sunita Devi',
      action: 'missed call attempt',
      time: '6 min',
      amount: '₹0',
      status: 'missed',
      avatar: 'SD',
      bgColor: 'bg-red-100 text-red-700',
      onClick: () => onNavigate('chat')
    }
  ];

  const upcomingSchedule = [
    {
      time: '09:20 AM',
      title: 'Business Analytics Press',
      subtitle: 'Exploring the Future of Data-Driven +6 more',
      label: 'Wed, 11 Jan'
    },
    {
      time: '10:35 AM',
      title: 'Business Sprint',
      subtitle: 'Techniques from Business Sprint +2 more',
      label: 'Fri, 13 Feb'
    },
    {
      time: '1:15 AM',
      title: 'Customer Review Meeting',
      subtitle: 'Insights from the Customer Review Meeting',
      label: 'Thu, 18 mar'
    }
  ];

  const countriesData = [
    { name: 'India', users: '1,240 Users', percentage: 80, color: 'bg-blue-500' },
    { name: 'USA', users: '1,240 Users', percentage: 60, color: 'bg-red-500' },
    { name: 'UK', users: '1,240 Users', percentage: 49, color: 'bg-orange-500' },
    { name: 'Canada', users: '1,240 Users', percentage: 100, color: 'bg-green-500' },
    { name: 'Australia', users: '1,240 Users', percentage: 30, color: 'bg-indigo-500' },
    { name: 'Nepal', users: '1,240 Users', percentage: 95, color: 'bg-yellow-500' }
  ];

  const earningsData = [
    { day: 'Sun', value: 90 },
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 75 },
    { day: 'Wed', value: 85 },
    { day: 'Thu', value: 95 },
    { day: 'Fri', value: 80 },
    { day: 'Sat', value: 70 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🕉️</span>
            </div>
            <span className="text-lg">Mero Jyotish</span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-xs text-gray-400 uppercase mb-3 px-3">MENU</p>
          <nav className="space-y-1">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-3 px-3 py-2.5 bg-orange-50 text-orange-600 rounded-lg w-full text-left"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => onNavigate('panchang')}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
            >
              <CalendarIcon className="w-5 h-5" />
              <span>Panchang</span>
            </button>
            <button 
              onClick={() => onNavigate('astrologers')}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
            >
              <User className="w-5 h-5" />
              <span>Astrologers</span>
            </button>
            
            <div>
              <button className="flex items-center justify-between w-full px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  <span>Kundali</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="ml-8 mt-1 space-y-1">
                <button 
                  onClick={() => onNavigate('kundali')}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 w-full text-left"
                >
                  Generate Kundali
                </button>
                <button 
                  onClick={() => onNavigate('horoscope')}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 w-full text-left"
                >
                  Horoscope
                </button>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('chat')}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </button>
            <button 
              onClick={() => onNavigate('chat')}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat</span>
            </button>
            <button 
              onClick={() => onNavigate('shop')}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Shop</span>
              {cartCount > 0 && (
                <Badge className="ml-auto bg-orange-600 text-white">{cartCount}</Badge>
              )}
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="mt-8">
            <p className="text-xs text-gray-400 uppercase mb-3 px-3">QUICK ACCESS</p>
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('horoscope')}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-orange-50 rounded-lg w-full text-left group"
              >
                <Star className="w-5 h-5 group-hover:text-orange-600" />
                <span className="group-hover:text-orange-600">Daily Horoscope</span>
              </button>
              <button 
                onClick={() => onNavigate('kundali')}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-orange-50 rounded-lg w-full text-left group"
              >
                <Sparkles className="w-5 h-5 group-hover:text-orange-600" />
                <span className="group-hover:text-orange-600">Free Kundali</span>
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-orange-50 rounded-lg w-full text-left group"
              >
                <BookOpen className="w-5 h-5 group-hover:text-orange-600" />
                <span className="group-hover:text-orange-600">Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search or type command..."
                  className="pl-10 border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Moon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onOpenCart}
                className="rounded-full relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?w=100"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Roresh Pudasaini</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-3xl">{stat.value}</h3>
                    {stat.change && (
                      <span className={`text-sm ${stat.change === 'down' ? 'text-red-500' : 'text-green-500'}`}>
                        {stat.changeValue}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Revenue Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {revenueCards.map((card, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center`}>
                      {card.icon}
                    </div>
                    <p className="text-sm text-gray-600">{card.title}</p>
                  </div>
                  <h3 className="text-2xl mb-1">{card.amount}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.action}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow text-left"
              >
                <div className={`w-10 h-10 ${button.color} rounded-lg flex items-center justify-center`}>
                  {button.icon}
                </div>
                <div>
                  <p className="text-sm">{button.title}</p>
                  <p className="text-xs text-gray-500">{button.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Call Stats */}
            {callStats.map((stat, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mb-3`}>
                      {stat.icon}
                    </div>
                    <h4 className="mb-1">{stat.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{stat.period}</p>
                    <h2 className="text-4xl mb-2">{stat.value}</h2>
                    <p className="text-xs text-gray-500">{stat.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Earnings Chart */}
            <Card className="border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Agent Avg. Earnings</CardTitle>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
                  <option>Yearly</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl">Rs.50,000</h3>
                    <p className="text-sm text-gray-500">Total Earning</p>
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="flex items-end justify-between h-48 gap-2">
                  {earningsData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '100%' }}>
                        <div 
                          className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg"
                          style={{ height: `${data.value}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{data.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                  <span>0%</span>
                  <span>20%</span>
                  <span>40%</span>
                  <span>60%</span>
                  <span>80%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Service Level & CSAT */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Service Level Circle */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 mb-4">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="12"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="12"
                          strokeDasharray={`${85.7 * 4.4} ${100 * 4.4}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-4xl">85.7</h3>
                        <p className="text-xs text-gray-500">Target: 90%</p>
                      </div>
                    </div>
                    <h4>Service Level</h4>
                  </div>

                  {/* Average CSAT */}
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="mb-2">Average CSAT</h4>
                    <p className="text-sm text-gray-500 mb-4">All time</p>
                    <div className="flex items-baseline gap-2">
                      <h2 className="text-5xl">4.7</h2>
                      <Badge className="bg-green-500 text-white">of 5</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Recent Activity */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div 
                      key={index} 
                      onClick={activity.onClick}
                      className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-orange-50 p-2 rounded-lg transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-full ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-sm">{activity.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <p className="text-sm">
                              <span className="text-gray-900">{activity.name}</span>
                              <Badge className={`ml-2 ${
                                activity.status === 'completed' ? 'bg-yellow-100 text-yellow-700' :
                                activity.status === 'delivered' ? 'bg-blue-100 text-blue-700' :
                                activity.status === 'active' ? 'bg-green-100 text-green-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {activity.status}
                              </Badge>
                            </p>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{activity.time}</span>
                          <span>•</span>
                          <span className="text-orange-600">{activity.amount}</span>
                          <span>•</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card className="border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Upcoming Schedule</CardTitle>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSchedule.map((schedule, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <div className="text-sm">
                        <p className="text-gray-500">{schedule.label}</p>
                        <p className="text-lg">{schedule.time}</p>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{schedule.title}</h4>
                        <p className="text-sm text-gray-500">{schedule.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sales by Countries */}
          <Card className="border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Consultations by Countries</CardTitle>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Map placeholder */}
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-500">World Map Visualization</p>
                  </div>
                </div>

                {/* Countries List */}
                <div className="space-y-4">
                  {countriesData.map((country, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 ${country.color} rounded`}></div>
                          <div>
                            <p className="text-sm">{country.name}</p>
                            <p className="text-xs text-gray-500">{country.users}</p>
                          </div>
                        </div>
                        <span className="text-sm">{country.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${country.color}`}
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}