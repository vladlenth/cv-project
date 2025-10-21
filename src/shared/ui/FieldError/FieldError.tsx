import React from 'react';
import { FieldError as ReactHookFormError } from 'react-hook-form';

export interface FieldErrorProps {
	error?: ReactHookFormError;
}

export const FieldError: React.FC<FieldErrorProps> = ({ error }) => {
	if (!error) return null;

	return (
		<p role="alert" className="error-message">
			{error.message?.toString() || 'Invalid input'}
		</p>
	);
};
