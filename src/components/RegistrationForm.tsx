import React, { useState, useEffect } from "react";
import { FormField } from "./FormField";
import { Loader2 } from "lucide-react";
import { PreviewModal } from "./PreviewModal";
import { useNavigate, useBeforeUnload } from 'react-router-dom';
import { appConfig, validateConfig } from '../config/app.config';

interface TimeState {
  hour: string;
  minute: string;
  period: string;
}

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthName: "",
    birthDate: "",
    birthTime: "",
    place: "",
    raashi: "",
    nakshatra: "",
    caste: "Veerashaiva Lingayata",
    subcaste: "",
    peeta: "",
    homegod: "",
    district: "",
    height: "",
    education: "",
    occupation: "",
    maritalStatus: "",
    annualIncome: "",
    otherDetails: "",
    partnerPreference: "",
    gender: "",
    father: "",
    fathersOccupation: "",
    mother: "",
    mothersOccupation: "",
    sisters: "",
    brothers: "",
    contact: "",
    email: "",
    address: "",
    image1: "",
    image2: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [birthTimeState, setBirthTimeState] = useState<TimeState>({
    hour: "12",
    minute: "00",
    period: "AM"
  });

  const navigate = useNavigate();

  // Check if form has any data entered
  const hasFormData = () => {
    return Object.entries(formData).some(([key, value]) => {
      // Skip checking caste since it has a default value
      if (key === 'caste') return false;
      return value && value.trim() !== '';
    });
  };

  // Handle beforeunload event to warn user about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasFormData()) {
        e.preventDefault();
        // Modern browsers will show their own message, but we still need to prevent default
        return 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formData]);



  // Use React Router's useBeforeUnload to handle page refresh/close
  useBeforeUnload(
    React.useCallback(() => {
      if (hasFormData()) {
        return "You have unsaved changes. Are you sure you want to leave?";
      }
    }, [formData])
  );

  const raashiOptions = [
    { value: 'mesha', label: 'ಮೇಷ (Aries)' },
    { value: 'vrishabha', label: 'ವೃಷಭ (Taurus)' },
    { value: 'mithuna', label: 'ಮಿಥುನ (Gemini)' },
    { value: 'karka', label: 'ಕರ್ಕ (Cancer)' },
    { value: 'simha', label: 'ಸಿಂಹ (Leo)' },
    { value: 'kanya', label: 'ಕನ್ಯಾ (Virgo)' },
    { value: 'tula', label: 'ತುಲಾ (Libra)' },
    { value: 'vrischika', label: 'ವೃಷ್ಚಿಕ (Scorpio)' },
    { value: 'dhanu', label: 'ಧನು (Sagittarius)' },
    { value: 'makara', label: 'ಮಕರ (Capricorn)' },
    { value: 'kumbha', label: 'ಕುಂಭ (Aquarius)' },
    { value: 'meena', label: 'ಮೀನ (Pisces)' },
  ];

  const nakshatraOptions = [
    { value: 'ashwini', label: 'ಅಶ್ವಿನಿ (Ashwini)' },
    { value: 'bharani', label: 'ಭರಣಿ (Bharani)' },
    { value: 'krittika', label: 'ಕೃತಿಕ (Krittika)' },
    { value: 'rohini', label: 'ರೋಹಿಣಿ (Rohini)' },
    { value: 'mriga', label: 'ಮೃಗಶಿರ (Mrigashira)' },
    { value: 'ardra', label: 'ಆರ್ಧ್ರಾ (Ardra)' },
    { value: 'punarvasu', label: 'ಪುಣರ್ವಸು (Punarvasu)' },
    { value: 'pushya', label: 'ಪುಷ್ಯ (Pushya)' },
    { value: 'ashlesha', label: 'ಆಶ್ಲೇಷಾ (Ashlesha)' },
    { value: 'magha', label: 'ಮಘಾ (Magha)' },
    { value: 'purvaphalguni', label: 'ಪೂರ್ವಫಾಲ್ಗುಣ (Purvaphalguni)' },
    { value: 'uttaraphalguni', label: 'ಉತ್ತರಫಾಲ್ಗುಣ (Uttaraphalguni)' },
    { value: 'hasta', label: 'ಹಸ್ತ (Hasta)' },
    { value: 'chitra', label: 'ಚಿತ್ರ (Chitra)' },
    { value: 'swati', label: 'ಸ್ವಾತಿ (Swati)' },
    { value: 'vishakha', label: 'ವಿಶಾಖಾ (Vishakha)' },
    { value: 'anuradha', label: 'ಅನುರಾಧಾ (Anuradha)' },
    { value: 'jatak', label: 'ಜ್ಯೇಷ್ಠ (Jyeshtha)' },
    { value: 'moola', label: 'ಮೂಲ (Moola)' },
    { value: 'purvashada', label: 'ಪೂರ್ವಾಷಾಢ (Purvashada)' },
    { value: 'uttarashada', label: 'ಉತ್ತರಾಷಾಢ (Uttarashada)' },
    { value: 'shravan', label: 'ಶ್ರಾವಣ (Shravana)' },
    { value: 'dhanishta', label: 'ಧನಿಷ್ಠ (Dhanishta)' },
    { value: 'shatabhisha', label: 'ಶತಭಿಷಕ (Shatabhisha)' },
    { value: 'purvabhadrapada', label: 'ಪೂರ್ವಭಾದ್ರಪದ (Purvabhadrapada)' },
    { value: 'uttarabhadrapada', label: 'ಉತ್ತರಭಾದ್ರಪದ (Uttarabhadrapada)' },
    { value: 'revati', label: 'ರೇವತಿ (Revati)' },
  ];

  const heightOptions = [
    "3ft", "3.1ft", "3.2ft", "3.3ft", "3.4ft", "3.5ft", "3.6ft", "3.7ft", "3.8ft", "3.9ft","3.10ft", "3.11ft", 
    "4ft", "4.1ft", "4.2ft", "4.3ft", "4.4ft", "4.5ft", "4.6ft", "4.7ft", "4.8ft", "4.9ft", "4.10ft", "4.11ft",
    "5ft", "5.1ft", "5.2ft", "5.3ft", "5.4ft", "5.5ft", "5.6ft", "5.7ft", "5.8ft", "5.9ft", "5.10ft", "5.11ft",
    "6ft", "6.1ft", "6.2ft", "6.3ft", "6.4ft", "6.5ft", "6.6ft", "6.7ft", "6.8ft", "6.9ft", "6.10ft", "6.11ft",
    "7ft"
  ];

  const subcasteOptions = [
    { value: 'jangama', label: 'ಜಂಗಮ (Jangama)' },
    { value: 'banajiga', label: 'ಬಣಜಿಗ (Banajiga)' },
    { value: 'panchamasali', label: 'ಪಂಚಮಸಾಲಿ (Panchamasali)' },
    { value: 'ganiga', label: 'ಗಾಣಿಗ (Ganiga)' },
    { value: 'kumbar', label: 'ಕುಂಬಾರ (Kumbar/Kumbara)' },
    { value: 'madivala', label: 'ಮಾದಿವಾಲ (Madivala)' },
    { value: 'sadar', label: 'ಸದರ್ (Sadar)' },
    { value: 'gowda', label: 'ಗೌಡ (Gowda)' },
    { value: 'aradhya', label: 'ಆರಾಧ್ಯ (Aradhya)' },
    { value: 'devanga', label: 'ದೇವಾಂಗ (Devanga)' },
    { value: 'nonamba', label: 'ನೊನಂಬ (Nonamba/Nolamba)' },
    { value: 'shivashimpi', label: 'ಶಿವಶಿಂಪಿ (Shivashimpi/Javali)' },
    { value: 'veerashaiva', label: 'ವೀರಶೈವ (Veerashaiva)' },
    { value: 'pakanakl', label: 'ಪಕನಕಲ (Pakanakl)' },
    { value: 'other', label: 'ಇತರ (Other)' }
  ];

  const karnatakaDistrictsOptions = [
    { value: 'bagalkot', label: 'ಬಾಗಲಕೋಟೆ (Bagalkot)' },
    { value: 'ballari', label: 'ಬಳ್ಳಾರಿ (Ballari)' },
    { value: 'belagavi', label: 'ಬೆಳಗಾವಿ (Belagavi)' },
    { value: 'bengaluru_rural', label: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ (Bengaluru Rural)' },
    { value: 'bengaluru_urban', label: 'ಬೆಂಗಳೂರು ನಗರ (Bengaluru Urban)' },
    { value: 'bidar', label: 'ಬೀದರ್ (Bidar)' },
    { value: 'chamarajanagar', label: 'ಚಾಮರಾಜನಗರ (Chamarajanagar)' },
    { value: 'chikkaballapur', label: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ (Chikkaballapur)' },
    { value: 'chikkamagaluru', label: 'ಚಿಕ್ಕಮಗಳೂರು (Chikkamagaluru)' },
    { value: 'chitradurga', label: 'ಚಿತ್ರದುರ್ಗ (Chitradurga)' },
    { value: 'dakshina_kannada', label: 'ದಕ್ಷಿಣ ಕನ್ನಡ (Dakshina Kannada)' },
    { value: 'davanagere', label: 'ದಾವಣಗೆರೆ (Davanagere)' },
    { value: 'dharwad', label: 'ಧಾರವಾಡ (Dharwad)' },
    { value: 'gadag', label: 'ಗದಗ (Gadag)' },
    { value: 'hassan', label: 'ಹಾಸನ (Hassan)' },
    { value: 'haveri', label: 'ಹಾವೇರಿ (Haveri)' },
    { value: 'kalaburagi', label: 'ಕಲಬುರಗಿ (Kalaburagi)' },
    { value: 'kodagu', label: 'ಕೊಡಗು (Kodagu)' },
    { value: 'kolar', label: 'ಕೋಲಾರ (Kolar)' },
    { value: 'koppal', label: 'ಕೊಪ್ಪಳ (Koppal)' },
    { value: 'mandya', label: 'ಮಂಡ್ಯ (Mandya)' },
    { value: 'mysuru', label: 'ಮೈಸೂರು (Mysuru)' },
    { value: 'raichur', label: 'ರಾಯಚೂರು (Raichur)' },
    { value: 'ramanagara', label: 'ರಾಮನಗರ (Ramanagara)' },
    { value: 'shivamogga', label: 'ಶಿವಮೊಗ್ಗ (Shivamogga)' },
    { value: 'tumakuru', label: 'ತುಮಕೂರು (Tumakuru)' },
    { value: 'udupi', label: 'ಉಡುಪಿ (Udupi)' },
    { value: 'uttara_kannada', label: 'ಉತ್ತರ ಕನ್ನಡ (Uttara Kannada)' },
    { value: 'vijayapura', label: 'ವಿಜಯಪುರ (Vijayapura)' },
    { value: 'yadgir', label: 'ಯಾದಗಿರಿ (Yadgir)' }
  ];

  const generateHourOptions = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const hour = (i + 1).toString();
      return { value: hour, label: hour };
    });
  };

  const generateMinuteOptions = () => {
    return Array.from({ length: 60 }, (_, i) => {
      const minute = i.toString().padStart(2, '0');
      return { value: minute, label: minute };
    });
  };

  const handleTimeChange = (type: keyof TimeState, value: string) => {
    const newTimeState = { ...birthTimeState, [type]: value };
    setBirthTimeState(newTimeState);

    const timeString = `${newTimeState.hour}:${newTimeState.minute} ${newTimeState.period}`;
    updateField('birthTime', timeString);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true); // Show preview instead of submitting directly
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Format the data to match the Google Apps Script's expected format
      const payload = {
        data: formData
      };

      // Get the App Script URL from configuration
      const appScriptUrl = appConfig.appScriptUrl;

      // Validate configuration
      if (!validateConfig()) {
        throw new Error('App Script URL not configured. Please check your configuration.');
      }

      // Use fetch with proper error handling
      await fetch(
        appScriptUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload),
          // We need to use no-cors mode for Google Apps Script
          mode: "no-cors"
        }
      );

      // With no-cors mode, we can't check response.ok or parse the response
      // We'll assume success if no error is thrown
      console.log("Form submitted successfully");

      // Form submitted successfully - no need to track unsaved changes anymore

      // Navigate to success page
      setShowPreview(false);
      navigate('/success');

      // Reset form
      setFormData({
        name: "",
        birthName: "",
        birthDate: "",
        birthTime: "",
        place: "",
        raashi: "",
        nakshatra: "",
        caste: "Veerashaiva Lingayata",
        subcaste: "",
        peeta: "",
        homegod: "",
        district: "",
        height: "",
        education: "",
        occupation: "",
        maritalStatus: "",
        annualIncome: "",
        otherDetails: "",
        partnerPreference: "",
        gender: "",
        father: "",
        fathersOccupation: "",
        mother: "",
        mothersOccupation: "",
        sisters: "",
        brothers: "",
        contact: "",
        email: "",
        address: "",
        image1: "",
        image2: ""
      });
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAnnualIncomeChange = (value: string) => {
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue) {
      // Store the formatted value with "lakhs" for submission
      const formattedValue = `${numericValue} lakhs`;
      updateField('annualIncome', formattedValue);
    } else {
      updateField('annualIncome', '');
    }
  };

  // Helper function to get display value for annual income (without "lakhs")
  const getAnnualIncomeDisplayValue = () => {
    if (formData.annualIncome && formData.annualIncome.includes('lakhs')) {
      return formData.annualIncome.replace(' lakhs', '');
    }
    return formData.annualIncome;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-xl p-8 border-2 border-orange-100"
      >
        {/* Form fields go here */}
        {/* Personal Information */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ (Personal Information)</h2>

          <FormField
            label="ಹೆಸರು"
            englishLabel="Name"
            value={formData.name}
            onChange={(value) => updateField('name', value)}
          />

          <FormField
            label="ಜನ್ಮ ನಾಮ"
            englishLabel="Birth Name"
            value={formData.birthName}
            onChange={(value) => updateField('birthName', value)}
          />

          <FormField
            label="ಜನ್ಮ ದಿನಾಂಕ"
            englishLabel="Birth Date"
            type="date"
            value={formData.birthDate}
            onChange={(value) => updateField('birthDate', value)}
          />

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              ಜನ್ಮ ಸಮಯ (Birth Time)
            </label>
            <div className="flex gap-2">
              <FormField
                label=""
                englishLabel="Hour"
                type="select"
                options={generateHourOptions()}
                value={birthTimeState.hour}
                onChange={(value) => handleTimeChange('hour', value)}
                className="w-24"
              />
              <FormField
                label=""
                englishLabel="Minute"
                type="select"
                options={generateMinuteOptions()}
                value={birthTimeState.minute}
                onChange={(value) => handleTimeChange('minute', value)}
                className="w-24"
              />
              <FormField
                label=""
                englishLabel="Period"
                type="select"
                options={[
                  { value: 'AM', label: 'AM' },
                  { value: 'PM', label: 'PM' }
                ]}
                value={birthTimeState.period}
                onChange={(value) => handleTimeChange('period', value)}
                className="w-24"
              />
            </div>
          </div>

          <FormField
            label="ಜನ್ಮ ಸ್ಥಳ (Birth Place)"
            englishLabel="Birth Place"
            value={formData.place}
            onChange={(value) => updateField('place', value)}
          />
        </div>

        {/* Horoscope Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಜಾತಕ ವಿವರಗಳು (Horoscope Details)</h2>

          <FormField
            label="ರಾಶಿ (Raashi)"
            englishLabel="Raashi"
            type="select"
            options={raashiOptions}
            value={formData.raashi}
            onChange={(value) => updateField('raashi', value)}
          />

          <FormField
            label="ನಕ್ಷತ್ರ (Nakshatra)"
            englishLabel="Nakshatra"
            type="select"
            options={nakshatraOptions}
            value={formData.nakshatra}
            onChange={(value) => updateField('nakshatra', value)}
          />
        </div>

        {/* Community Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಸಮುದಾಯದ ವಿವರಗಳು (Community Details)</h2>

          <FormField
            label="ಜಾತಿ"
            englishLabel="Caste"
            value={formData.caste}
            onChange={(value) => updateField('caste', value)}
            required
            disabled
          />

          <FormField
            label="ಉಪಜಾತಿ (Sub-caste)"
            englishLabel="Sub-caste"
            type="select"
            options={subcasteOptions}
            value={formData.subcaste}
            onChange={(value) => updateField('subcaste', value)}
          />

          <FormField
            label="ಪೀಠ (Peeta)"
            englishLabel="Peeta"
            value={formData.peeta}
            onChange={(value) => updateField('peeta', value)}
          />

          <FormField
            label="ಮನೆದೇವರು (Home God)"
            englishLabel="Home God"
            value={formData.homegod}
            onChange={(value) => updateField('homegod', value)}
          />
        </div>

        {/* Personal Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)</h2>

          <FormField
            label="ಜಿಲ್ಲೆ (District)"
            englishLabel="District"
            type="select"
            options={karnatakaDistrictsOptions}
            value={formData.district}
            onChange={(value) => updateField('district', value)}
            required
          />

          <FormField
            label="ಎತ್ತರ (Height)"
            englishLabel="Height"
            type="select"
            options={heightOptions.map(height => ({ value: height, label: height }))}
            value={formData.height}
            onChange={(value) => updateField('height', value)}
          />

          <FormField
            label="ವಿದ್ಯಾಭ್ಯಾಸ"
            englishLabel="Education"
            value={formData.education}
            onChange={(value) => updateField('education', value)}
            required
          />

          <FormField
            label="ಉದ್ಯೋಗ"
            englishLabel="Occupation"
            value={formData.occupation}
            onChange={(value) => updateField('occupation', value)}
          />

          <FormField
            label="ವೈವಾಹಿಕ ಸ್ಥಿತಿ"
            englishLabel="Marital Status"
            type="select"
            options={[
              { value: 'Unmarried', label: 'ಅವಿವಾಹಿತ (Unmarried)' },
              { value: 'Divorced', label: 'ವಿಚ್ಛೇದಿತ (Divorced)' },
              { value: 'Widowed', label: 'ವಿಧವೆ/ವಿಧುರ (Widowed)' }
            ]}
            value={formData.maritalStatus}
            onChange={(value) => updateField('maritalStatus', value)}
          />

          <div className="relative">
            <FormField
              label="ವಾರ್ಷಿಕ ಆದಾಯ (Annual Income)"
              englishLabel="Annual Income"
              type="text"
              value={getAnnualIncomeDisplayValue()}
              onChange={handleAnnualIncomeChange}
              placeholder="Enter yearly salary"
            />
            <div className="absolute right-3 top-9 text-gray-500 text-sm pointer-events-none">
              lakhs
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ (Additional Information)</h2>

          <FormField
            label="ಇತರ ವಿವರಗಳು"
            englishLabel="Other Details"
            type="textarea"
            value={formData.otherDetails}
            onChange={(value) => updateField('otherDetails', value)}
            maxLength={37}
          />

          <FormField
            label="ಜೀವನ ಸಂಗಾತಿ ಆದ್ಯತೆಗಳು"
            englishLabel="Partner Preferences"
            type="textarea"
            value={formData.partnerPreference}
            onChange={(value) => updateField('partnerPreference', value)}
            maxLength={37}
          />
        </div>
         <FormField
            label="ಲಿಂಗ"
            englishLabel="Gender"
            type="select"
            options={[
              { value: 'male', label: 'ಪುರುಷ (Male)' },
              { value: 'female', label: 'ಮಹಿಳೆ (Female)' }
            ]}
            value={formData.gender}
            onChange={(value) => updateField('gender', value)}
            required
          />

        {/* Family Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಕುಟುಂಬದ ವಿವರಗಳು (Family Details)</h2>

          <FormField
            label="ತಂದೆಯ ಹೆಸರು"
            englishLabel="Father's Name"
            value={formData.father}
            onChange={(value) => updateField('father', value)}
          />

          <FormField
            label="ತಂದೆಯ ಉದ್ಯೋಗ"
            englishLabel="Father's Occupation"
            value={formData.fathersOccupation}
            onChange={(value) => updateField('fathersOccupation', value)}
          />

          <FormField
            label="ತಾಯಿಯ ಹೆಸರು"
            englishLabel="Mother's Name"
            value={formData.mother}
            onChange={(value) => updateField('mother', value)}
          />

          <FormField
            label="ತಾಯಿಯ ಉದ್ಯೋಗ"
            englishLabel="Mother's Occupation"
            value={formData.mothersOccupation}
            onChange={(value) => updateField('mothersOccupation', value)}
          />

          <FormField
            label="ಸಹೋದರಿಯರು"
            englishLabel="Sisters"
            value={formData.sisters}
            onChange={(value) => updateField('sisters', value)}
          />

          <FormField
            label="ಸಹೋದರರು"
            englishLabel="Brothers"
            value={formData.brothers}
            onChange={(value) => updateField('brothers', value)}
          />
        </div>

        {/* Contact Information */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಸಂಪರ್ಕ ಮಾಹಿತಿ (Contact Information)</h2>

          <FormField
            label="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
            englishLabel="Contact Number"
            type="tel"
            value={formData.contact}
            onChange={(value) => updateField('contact', value)}
            required
          />

          <FormField
            label="ಇಮೇಲ್"
            englishLabel="Email"
            type="email"
            value={formData.email}
            onChange={(value) => updateField('email', value)}
          />

          <FormField
            label="ವಿಳಾಸ"
            englishLabel="Address"
            type="textarea"
            value={formData.address}
            onChange={(value) => updateField('address', value)}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 text-white py-4 px-6 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] text-lg font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ... (Submitting...)
              </>
            ) : (
              "ನೋಂದಣಿ ಮಾಡಿ (Register)"
            )}
          </button>
        </div>
      </form>

      {showPreview && (
        <PreviewModal
          formData={formData}
          onConfirm={handleConfirmSubmit}
          onCancel={() => setShowPreview(false)}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};
