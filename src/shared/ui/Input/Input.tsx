import { FC, InputHTMLAttributes, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	id: string;
	type: string;
	placeholder?: string;
	inputClass?: string;
	disabled?: boolean;
	required?: boolean;
}

export const Input: FC<InputProps> = ({
	label,
	id,
	type,
	placeholder,
	inputClass = '',
	disabled = false,
	required = false,
	...rest
}) => {
	const [hovering, setHovering] = useState(false);

	return (
		<div className="form-group" style={{ position: 'relative' }}>
			{label && <label htmlFor={id}>{label}</label>}

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
		</div>
	);
};

export default Input;
