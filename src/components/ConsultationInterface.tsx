import { useState } from 'react';
import { ChatList } from './ChatList';
import { AstrologerChat } from './AstrologerChat';
import { Card, CardContent } from './ui/card';

export function ConsultationInterface() {
  const [selectedAstrologer, setSelectedAstrologer] = useState<any>(null);

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Chat List Sidebar */}
      <div className="w-80 flex-shrink-0">
        <ChatList onSelectChat={setSelectedAstrologer} />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedAstrologer ? (
          <AstrologerChat
            astrologer={selectedAstrologer}
            onClose={() => setSelectedAstrologer(null)}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
            <Card className="max-w-md border-2 border-orange-200">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-6">💬</div>
                <h3 className="text-2xl text-orange-900 mb-3">
                  Select a Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose an astrologer from the list to start or continue your conversation
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✨ Get instant astrological guidance</p>
                  <p>📞 Available for call & video consultations</p>
                  <p>🔮 Personalized remedies and predictions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
