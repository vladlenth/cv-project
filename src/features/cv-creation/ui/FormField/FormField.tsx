import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import Input from '../../../../shared/ui/Input/Input';
import Textarea from '../../../../shared/ui/Textarea/Textarea';
import { FieldError } from '../../../../shared/ui/FieldError/FieldError';
import { FormData, FieldConfig } from '@features/cv-creation/model/form-structure/types';

const componentMap = {
	input: Input,
	textarea: Textarea,
} as const;

type ComponentKey = keyof typeof componentMap;

export interface FormFieldProps<T extends keyof FormData = keyof FormData> {
	field: Extract<FieldConfig<T>, { component: ComponentKey }>;
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
	disabled?: boolean;
}

export const FormField = <T extends keyof FormData>({
	field,
	register,
	errors,
	disabled,
}: FormFieldProps<T>) => {
	const { component, name, props, validation } = field;

	const Component = componentMap[component];
	const registerProps = register(name, validation);
	const error = errors[name];

	return (
		<div className="form-field-wrapper">
			<Component
				{...(props as any)}
				disabled={disabled}
				inputClass={classNames({ 'input-error': error })}
				{...registerProps}
			/>
			<FieldError error={error} />
		</div>
	);
};

export default FormField;
