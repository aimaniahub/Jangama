import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface PreviewModalProps {
  formData: any;
  onConfirm: () => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export function PreviewModal({ formData, onConfirm, onCancel, isSubmitting = false }: PreviewModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ (Please verify your details)</h2>
        
        <div className="space-y-4">
          <PreviewSection title="ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ (Personal Information)">
            <PreviewField label="ಹೆಸರು (Name)" value={formData.name} />
            <PreviewField label="ಲಿಂಗ (Gender)" value={formData.gender} />
            <PreviewField label="ಜನ್ಮ ದಿನಾಂಕ (Birth Date)" value={formData.birthDate} />
            <PreviewField label="ಜನ್ಮ ಸಮಯ (Birth Time)" value={formData.birthTime} />
            <PreviewField label="ಜನ್ಮ ಸ್ಥಳ (Birth Place)" value={formData.place} />
            <PreviewField label="ಜಿಲ್ಲೆ (District)" value={formData.district} />
            <PreviewField label="ಎತ್ತರ (Height)" value={formData.height} />
          </PreviewSection>

          <PreviewSection title="ಜಾತಕ ವಿವರಗಳು (Horoscope Details)">
            <PreviewField label="ರಾಶಿ (Raashi)" value={formData.raashi} />
            <PreviewField label="ನಕ್ಷತ್ರ (Nakshatra)" value={formData.nakshatra} />
          </PreviewSection>

          <PreviewSection title="ಸಮುದಾಯದ ವಿವರಗಳು (Community Details)">
            <PreviewField label="ಜಾತಿ (Caste)" value={formData.caste} />
            <PreviewField label="ಉಪಜಾತಿ (Sub-caste)" value={formData.subcaste} />
            <PreviewField label="ಪೀಠ (Peeta)" value={formData.peeta} />
            <PreviewField label="ಮನೆದೇವರು (Home God)" value={formData.homegod} />
          </PreviewSection>

          <PreviewSection title="ಶೈಕ್ಷಣಿಕ ಮತ್ತು ವೃತ್ತಿಪರ ವಿವರಗಳು (Educational & Professional Details)">
            <PreviewField label="ವಿದ್ಯಾಭ್ಯಾಸ (Education)" value={formData.education} />
            <PreviewField label="ಉದ್ಯೋಗ (Occupation)" value={formData.occupation} />
            <PreviewField label="ವಾರ್ಷಿಕ ಆದಾಯ (Annual Income)" value={formData.annualIncome} />
          </PreviewSection>

          <PreviewSection title="ಕುಟುಂಬದ ವಿವರಗಳು (Family Details)">
            <PreviewField label="ತಂದೆ (Father)" value={formData.father} />
            <PreviewField label="ತಾಯಿ (Mother)" value={formData.mother} />
            <PreviewField label="ಸಹೋದರ/ರಿ (Siblings)" 
              value={`Brothers: ${formData.brothers}, Sisters: ${formData.sisters}`} />
          </PreviewSection>

          <PreviewSection title="ಸಂಪರ್ಕ ವಿವರಗಳು (Contact Details)">
            <PreviewField 
              label="ಮೊಬೈಲ್ (Contact)" 
              value={
                <a href={`tel:${formData.contact}`} className="text-blue-600 underline">
                  {formData.contact}
                </a>
              } 
            />
            <PreviewField label="ಇಮೇಲ್ (Email)" value={formData.email} />
            <PreviewField label="ವಿಳಾಸ (Address)" value={formData.address} />
          </PreviewSection>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={onCancel} className="bg-yellow-500 text-white" disabled={isSubmitting}>
            ಮರಳಿ ಸರಿಪಡಿಸಿ (Edit)
          </Button>
          <Button onClick={onConfirm} className="bg-blue-500 text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ... (Submitting...)
              </>
            ) : (
              "ದೃಢೀಕರಿಸಿ ಮತ್ತು ಸಲ್ಲಿಸಿ (Confirm & Submit)"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

function PreviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-semibold text-orange-700 mb-3">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function PreviewField({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div>
      <span className="text-gray-600 font-medium">{label}:</span>
      <span className="ml-2">{value || '-'}</span>
    </div>
  );
} 
