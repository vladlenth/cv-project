import React from 'react';

export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  inputClass = '',
  disabled = false,
  required = false,
  ...registerField
}) {
  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        required={required}
        {...registerField}
      />
    </div>
  );
}
