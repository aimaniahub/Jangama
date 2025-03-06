import React from 'react';
import { Flower2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-orange-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Flower2 className="w-12 h-12 opacity-80" />
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold mb-2">ಕಲ್ಯಾಣ ಬೆಳಕು</h1>
          <p className="text-xl">ಜಂಗಮ ಮತ್ತು ಲಿಂಗಾಯಿತ ವಧು ವರರ ವೇದಿಕೆ</p>
        </div>
        <Flower2 className="w-12 h-12 opacity-80" />
      </div>
    </header>
  );
}