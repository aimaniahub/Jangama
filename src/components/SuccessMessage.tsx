import { useState } from "react";
import { Button } from "../components/ui/button";

interface SuccessMessageProps {}

export function SuccessMessage({}: SuccessMessageProps) {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const content = {
    en: {
      welcome: "Welcome to the matrimonial platform specially designed for Jangama and Lingayat community. We are here to help you find your life partner.",
      contact: "Direct Contact: ",
      phone: "7829146919",
    },
    kn: {
      welcome: "ಜಂಗಮ ಮತ್ತು ಲಿಂಗಾಯತ ಸಮುದಾಯಕ್ಕಾಗಿ ವಿಶೇಷವಾಗಿ ರೂಪಿಸಲಾದ ವೈವಾಹಿಕ ವೇದಿಕೆಗೆ ಸ್ವಾಗತ. ನಿಮ್ಮ ಜೀವನ ಸಂಗಾತಿಯನ್ನು ಹುಡುಕಲು ನಾವು ಇಲ್ಲಿದ್ದೇವೆ.",
      contact: "ನೇರ ಸಂಪರ್ಕ- ",
      phone: "7829146919",
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
        >
          {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
        </Button>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center text-orange-600">
          {content[language].welcome}
        </h1>
        <p className="text-xl font-semibold text-center">
          {content[language].contact}
          <a href={`tel:${content[language].phone}`} className="text-blue-600 underline">
            {content[language].phone}
          </a>
        </p>
        <p className="text-lg text-center">
          Thank you for registering with us! We will be in touch soon.
        </p>
      </div>
    </div>
  );
} 