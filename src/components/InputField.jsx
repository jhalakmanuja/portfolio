import React, { useState, memo } from "react";

const InputField = memo(({ field, label, icon: Icon, formData, handleChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasValue = formData[field] && formData[field].length > 0;
  const hasError = error && error.length > 0;

  // Dynamic classes for input styling
  const getInputClasses = (isTextArea = false) => {
    const baseClasses = `
      w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border text-purple-100 placeholder-transparent
      focus:outline-none transition-all duration-300 peer resize-none
      ${isTextArea ? 'h-32 pt-4' : ''}
    `;

    const dynamicClasses = hasError
      ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
      : isFocused
      ? "border-purple-400/60 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 shadow-lg shadow-purple-400/10"
      : isHovered
      ? "border-purple-300/50"
      : "border-purple-200/30 hover:border-purple-300/50";

    return `${baseClasses} ${dynamicClasses}`.trim();
  };

  // Render input or textarea based on field type
  const renderInputContent = () => {
    const commonProps = {
      id: field,
      name: field,
      value: formData[field] || '',
      onChange: handleChange,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: getInputClasses(field === "message"),
      required: true,
      placeholder: label,
    };

    if (field === "message") {
      return <textarea {...commonProps} rows={4} />;
    }

    return (
      <input
        {...commonProps}
        type={field === "email" ? "email" : "text"}
      />
    );
  };

  return (
    <div className="relative w-full group">
      {/* Background Glow Effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r from-purple-300/0 to-pink-300/0 rounded-2xl blur transition-all duration-300 ${
          isFocused ? 'from-purple-300/20 to-pink-300/20 opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative">
        {/* Icon */}
        <div className={`absolute left-4 top-4 z-10 transition-all duration-300 ${
          isFocused || hasValue
            ? 'text-purple-400'
            : hasError
            ? 'text-red-400'
            : 'text-purple-300/60'
        }`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Floating Label */}
        <label
          htmlFor={field}
          className={`absolute left-12 transition-all duration-300 pointer-events-none z-10 ${
            isFocused || hasValue
              ? 'top-2 text-xs font-medium'
              : 'top-4 text-sm'
          } ${
            hasError
              ? 'text-red-400'
              : isFocused || hasValue
              ? 'text-purple-400'
              : 'text-purple-300/60'
          }`}
        >
          {label}
        </label>

        {/* Input Field */}
        <div className="relative">
          {renderInputContent()}
          
          {/* Border Highlight Effect */}
          <div 
            className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r pointer-events-none transition-all duration-300 ${
              isFocused && !hasError
                ? 'from-purple-400/30 via-pink-400/20 to-purple-400/30'
                : 'from-transparent to-transparent'
            }`}
          />
        </div>

        {/* Success Indicator */}
        {hasValue && !hasError && !isFocused && (
          <div className="absolute right-4 top-4 text-green-400 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {/* Error Message */}
        {hasError && (
          <div className="absolute -bottom-6 left-0 text-red-400 text-xs font-medium opacity-0 animate-fadeIn">
            {error}
          </div>
        )}
      </div>
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;