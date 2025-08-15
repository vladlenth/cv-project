import { FC, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  type,
  placeholder,
  inputClass = '',
  disabled = false,
  required = false,
  ...rest
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default Input;
