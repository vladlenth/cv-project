import { FC, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
  rows?: number;
  placeholder?: string;
  inputClass?: string;
  disabled?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  label,
  id,
  rows = 3,
  placeholder,
  inputClass = '',
  disabled = false,
  ...registerField
}) => {
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
};

export default Textarea;
