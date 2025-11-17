import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Send, Phone, Video, Paperclip, Smile, ArrowLeft, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'astrologer';
  timestamp: Date;
  image?: string;
}

interface AstrologerChatProps {
  astrologer: {
    id: string;
    name: string;
    image: string;
    specialization: string;
    available: boolean;
  };
  onClose: () => void;
}

export function AstrologerChat({ astrologer, onClose }: AstrologerChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste 🙏 Welcome to my consultation. How can I guide you today?',
      sender: 'astrologer',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      text: 'I want to make an appointment tomorrow from 2:00 to 5:00pm?',
      sender: 'user',
      timestamp: new Date(Date.now() - 3500000)
    },
    {
      id: '3',
      text: 'I want more detailed information about my career prospects.',
      sender: 'user',
      timestamp: new Date(Date.now() - 3400000)
    },
    {
      id: '4',
      text: 'Of course! I can help you with that. Based on your birth chart, let me analyze your career house and planetary positions.',
      sender: 'astrologer',
      timestamp: new Date(Date.now() - 3300000)
    },
    {
      id: '5',
      text: "I'll need your complete birth details for accurate predictions. Could you please share your date, time, and place of birth?",
      sender: 'astrologer',
      timestamp: new Date(Date.now() - 3200000)
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate astrologer response after 2 seconds
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for sharing. Let me analyze your chart and provide guidance...",
          sender: 'astrologer',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <Card className="rounded-none border-b-2 border-orange-200 shadow-md">
        <CardHeader className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="hover:bg-orange-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200">
                  <ImageWithFallback
                    src={astrologer.image}
                    alt={astrologer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {astrologer.available && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              <div>
                <CardTitle className="text-lg">{astrologer.name}</CardTitle>
                <p className="text-sm text-gray-500">{astrologer.specialization}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Video className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-md ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-tr-none'
                    : 'bg-white border border-gray-200 text-gray-900 rounded-tl-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p className={`text-xs text-gray-400 mt-1 px-2 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}>
                {getTimeAgo(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <Card className="rounded-none border-t-2 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-end gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-orange-50 text-gray-500"
            >
              <Smile className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-orange-50 text-gray-500"
            >
              <Paperclip className="w-5 h-5" />
            </Button>

            <div className="flex-1">
              <Input
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-gray-300 focus:border-orange-500 rounded-full"
              />
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-10 w-10 p-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
