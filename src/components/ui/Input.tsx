import { FC, InputHTMLAttributes, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: string;
  placeholder?: string;
  inputClass?: string;
  disabled?: boolean;
  required?: boolean;
  tooltip?: string;
}

const Input: FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  inputClass = '',
  disabled = false,
  required = false,
  tooltip,
  ...rest
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="form-group" style={{ position: 'relative' }}>
      {label && <label htmlFor={id}>{label}</label>}

      {tooltip ? (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${inputClass}`}
            disabled={disabled}
            required={required}
            style={{
              paddingRight: '40px',
              width: '100%',
              boxSizing: 'border-box',
              height: 'auto',
            }}
            {...rest}
          />
          <div
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s, transform 0.2s',
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                userSelect: 'none',
                transition: 'transform 0.2s',
                transform: hovering ? 'scale(1.2)' : 'scale(1)',
              }}
            >
              ?
            </div>
            {hovering && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  marginBottom: '8px',
                  background: '#fff',
                  padding: '8px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap',
                }}
              >
                {tooltip}
              </div>
            )}
          </div>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`${inputClass}`}
          disabled={disabled}
          required={required}
          style={{
            width: '100%',
            boxSizing: 'border-box',
          }}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
