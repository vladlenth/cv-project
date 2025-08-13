import { FC, TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: string;
  placeholder?: string;
  inputClass?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  inputClass = '',
  disabled = false,
  required = false,
  ...registerField
}) => {
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
};

export default Input;
