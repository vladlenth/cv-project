import React, { FC, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'sec' | string;
	content: string;
}

export const Button: FC<ButtonProps> = ({ variant, content, className = '', ...props }) => {
	let styleClasses = className;

	if (variant === 'sec') {
		styleClasses = `${className} btn-secondary`.trim();
	}

	return (
		<button type="button" className={styleClasses} {...props}>
			{content}
		</button>
	);
};
