import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Chat {
  id: string;
  astrologer: {
    name: string;
    image: string;
    specialization: string;
    available: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface ChatListProps {
  onSelectChat: (astrologer: Chat['astrologer']) => void;
}

export function ChatList({ onSelectChat }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const chats: Chat[] = [
    {
      id: '1',
      astrologer: {
        name: 'Pandit Rajesh Sharma',
        image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Vedic Astrology',
        available: true
      },
      lastMessage: 'I can help you with Kundali analysis',
      timestamp: '15 mins',
      unread: 2
    },
    {
      id: '2',
      astrologer: {
        name: 'Dr. Priya Acharya',
        image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Numerology',
        available: false
      },
      lastMessage: 'Your lucky number is 7',
      timestamp: '30 mins',
      unread: 0
    },
    {
      id: '3',
      astrologer: {
        name: 'Acharya Vikram Joshi',
        image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'Remedies',
        available: true
      },
      lastMessage: 'The remedies will start showing effect',
      timestamp: '45 mins',
      unread: 1
    },
    {
      id: '4',
      astrologer: {
        name: 'Pandit Suresh Kumar',
        image: 'https://images.unsplash.com/photo-1694886322033-86d7e8b9a275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhc3Ryb2xvZ2VyfGVufDF8fHx8MTc2MzM2MTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        specialization: 'KP Astrology',
        available: true
      },
      lastMessage: 'Let me check your career prospects',
      timestamp: '2 days',
      unread: 0
    }
  ];

  const filteredChats = chats.filter(chat =>
    chat.astrologer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.astrologer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="h-full border-r-2 border-orange-200 rounded-none">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-amber-50">
        <CardTitle className="text-xl">Chats</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.astrologer)}
              className="p-4 border-b border-gray-100 hover:bg-orange-50 cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200">
                    <ImageWithFallback
                      src={chat.astrologer.image}
                      alt={chat.astrologer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {chat.astrologer.available && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h4 className="text-sm truncate">{chat.astrologer.name}</h4>
                      <p className="text-xs text-gray-500">{chat.astrologer.specialization}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                      {chat.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <Badge className="ml-2 bg-orange-600 text-white rounded-full px-2 py-0.5 text-xs">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
