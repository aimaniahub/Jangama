import React from 'react';

interface FormFieldProps {
  label: string;
  englishLabel: string;
  type?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

export const FormField = ({
  label,
  englishLabel,
  type = 'text',
  options,
  required = false,
  value,
  onChange,
}: FormFieldProps) => {
  const baseInputStyles = "mt-1 block w-full rounded-md border-2 border-orange-200 shadow-sm " +
    "focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 " +
    "bg-orange-50/30 px-4 py-2 transition-colors duration-200";

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-gray-500">({englishLabel})</span>
      </label>
      {type === 'select' && options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputStyles}
          required={required}
        >
          <option value="">ಆಯ್ಕೆ ಮಾಡಿ (Select)</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInputStyles} min-h-[100px]`}
          required={required}
        />
      ) : type === 'file' ? (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onChange(e.target.files?.[0]?.name || '')}
          className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-orange-100 file:text-orange-700
          hover:file:bg-orange-200
          transition-all duration-200"
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputStyles}
          required={required}
        />
      )}
    </div>
  );
}