import React from 'react';

export default function Textarea({
  label,
  id,
  rows = 3,
  placeholder,
  inputClass = '',
  disabled = false,
  ...registerField
}) {
  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        {...registerField}
      />
    </div>
  );
}
