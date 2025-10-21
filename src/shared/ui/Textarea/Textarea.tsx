import { FC, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	id: string;
	rows?: number;
	placeholder?: string;
	inputClass?: string;
	disabled?: boolean;
}

export const Textarea: FC<TextareaProps> = ({
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
			<div className="textarea-wrapper">
				<textarea
					id={id}
					rows={rows}
					placeholder={placeholder}
					className={inputClass}
					disabled={disabled}
					{...rest}
				/>
			</div>
		</div>
	);
};

export default Textarea;
