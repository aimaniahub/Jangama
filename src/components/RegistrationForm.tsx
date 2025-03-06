import React, { useState } from "react";
import { FormField } from "./FormField";
import { Loader2 } from "lucide-react";
import { SuccessMessage } from "./SuccessMessage";
import { z } from "zod";
import { PreviewModal } from "./PreviewModal";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthName: "",
    birthDate: "",
    birthTime: "",
    place: "",
    raashi: "",
    nakshatra: "",
    caste: "",
    subcaste: "",
    peeta: "",
    homegod: "",
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

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
    "3ft", "3.1ft", "3.2ft", "3.3ft", "3.4ft", "3.5ft", "3.6ft", "3.7ft", "3.8ft", "3.9ft",
    "4ft", "4.1ft", "4.2ft", "4.3ft", "4.4ft", "4.5ft", "4.6ft", "4.7ft", "4.8ft", "4.9ft",
    "5ft", "5.1ft", "5.2ft", "5.3ft", "5.4ft", "5.5ft", "5.6ft", "5.7ft", "5.8ft", "5.9ft",
    "6ft", "6.1ft", "6.2ft", "6.3ft", "6.4ft", "6.5ft", "6.6ft", "6.7ft", "6.8ft", "6.9ft",
    "7ft"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true); // Show preview instead of submitting directly
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwOsNdp_w2JxTKSvCvMRtXg5habw0Y_LmbY_VZvhu5knD5DNIW2L_JgQlXYCkzrj3Yf/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: {
              ...formData,
              timestamp: new Date().toISOString(),
              sheetName: "Sheet1"
            }
          })
        }
      );

      setShowSuccess(true);
      setShowPreview(false);

      // Reset form
      setFormData({
        name: "",
        birthName: "",
        birthDate: "",
        birthTime: "",
        place: "",
        raashi: "",
        nakshatra: "",
        caste: "",
        subcaste: "",
        peeta: "",
        homegod: "",
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
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBirthTimeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, birthTime: value }));
  };

  if (showSuccess) {
    return <SuccessMessage />;
  }

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
            required
          />

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
            required
          />

          <FormField
            label="ಜನ್ಮ ಸಮಯ (Birth Time)"
            type="select"
            options={[
              { value: '12:00 AM', label: '12:00 AM' },
              { value: '1:00 AM', label: '1:00 AM' },
              { value: '2:00 AM', label: '2:00 AM' },
              { value: '3:00 AM', label: '3:00 AM' },
              { value: '4:00 AM', label: '4:00 AM' },
              { value: '5:00 AM', label: '5:00 AM' },
              { value: '6:00 AM', label: '6:00 AM' },
              { value: '7:00 AM', label: '7:00 AM' },
              { value: '8:00 AM', label: '8:00 AM' },
              { value: '9:00 AM', label: '9:00 AM' },
              { value: '10:00 AM', label: '10:00 AM' },
              { value: '11:00 AM', label: '11:00 AM' },
              { value: '12:00 PM', label: '12:00 PM' },
              { value: '1:00 PM', label: '1:00 PM' },
              { value: '2:00 PM', label: '2:00 PM' },
              { value: '3:00 PM', label: '3:00 PM' },
              { value: '4:00 PM', label: '4:00 PM' },
              { value: '5:00 PM', label: '5:00 PM' },
              { value: '6:00 PM', label: '6:00 PM' },
              { value: '7:00 PM', label: '7:00 PM' },
              { value: '8:00 PM', label: '8:00 PM' },
              { value: '9:00 PM', label: '9:00 PM' },
              { value: '10:00 PM', label: '10:00 PM' },
              { value: '11:00 PM', label: '11:00 PM' },
            ]}
            value={formData.birthTime}
            onChange={handleBirthTimeChange}
          />

          <FormField
            label="ಜನ್ಮ ಸ್ಥಳ"
            englishLabel="Birth Place"
            value={formData.place}
            onChange={(value) => updateField('place', value)}
            required
          />
        </div>

        {/* Horoscope Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಜಾತಕ ವಿವರಗಳು (Horoscope Details)</h2>
          
          <FormField
            label="ರಾಶಿ (Raashi)"
            type="select"
            options={raashiOptions}
            value={formData.raashi}
            onChange={(value) => updateField('raashi', value)}
            required
          />

          <FormField
            label="ನಕ್ಷತ್ರ (Nakshatra)"
            type="select"
            options={nakshatraOptions}
            value={formData.nakshatra}
            onChange={(value) => updateField('nakshatra', value)}
            required
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
          />

          <FormField
            label="ಉಪಜಾತಿ"
            englishLabel="Sub-caste"
            value={formData.subcaste}
            onChange={(value) => updateField('subcaste', value)}
          />

          <FormField
            label="ಪೀಠ"
            englishLabel="Peeta"
            value={formData.peeta}
            onChange={(value) => updateField('peeta', value)}
          />

          <FormField
            label="ಮನೆದೇವರು"
            englishLabel="Home God"
            value={formData.homegod}
            onChange={(value) => updateField('homegod', value)}
          />
        </div>

        {/* Personal Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)</h2>
          
          <FormField
            label="ಎತ್ತರ (Height)"
            type="select"
            options={heightOptions.map(height => ({ value: height, label: height }))}
            value={formData.height}
            onChange={(value) => updateField('height', value)}
            required
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
            required
          />

          <FormField
            label="ವೈವಾಹಿಕ ಸ್ಥಿತಿ"
            englishLabel="Marital Status"
            type="select"
            options={[
              { value: 'never_married', label: 'ಅವಿವಾಹಿತ (Never Married)' },
              { value: 'divorced', label: 'ವಿಚ್ಛೇದಿತ (Divorced)' },
              { value: 'widowed', label: 'ವಿಧವೆ/ವಿಧುರ (Widowed)' }
            ]}
            value={formData.maritalStatus}
            onChange={(value) => updateField('maritalStatus', value)}
            required
          />

          <FormField
            label="ವಾರ್ಷಿಕ ಆದಾಯ"
            englishLabel="Annual Income"
            value={formData.annualIncome}
            onChange={(value) => updateField('annualIncome', value)}
            required
          />
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
          />

          <FormField
            label="ಜೀವನ ಸಂಗಾತಿ ಆದ್ಯತೆಗಳು"
            englishLabel="Partner Preferences"
            type="textarea"
            value={formData.partnerPreference}
            onChange={(value) => updateField('partnerPreference', value)}
          />
        </div>

        {/* Family Details */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">ಕುಟುಂಬದ ವಿವರಗಳು (Family Details)</h2>
          
          <FormField
            label="ತಂದೆಯ ಹೆಸರು"
            englishLabel="Father's Name"
            value={formData.father}
            onChange={(value) => updateField('father', value)}
            required
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
            required
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
            required
          />

          <FormField
            label="ವಿಳಾಸ"
            englishLabel="Address"
            type="textarea"
            value={formData.address}
            onChange={(value) => updateField('address', value)}
            required
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
          showSuccessMessage={showSuccess}
        />
      )}
    </div>
  );
};
