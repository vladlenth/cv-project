import { FC, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  ...rest
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
