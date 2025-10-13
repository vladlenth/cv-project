import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import Input from '../../input/ui/Input';
import Textarea from '../../textarea/ui/Textarea';
import { FieldError } from '../../field-error/ui/FieldError';
import { FormData, FieldConfig } from '../../../../features/personal-info/lib/fieldFactory';

const componentMap = {
	input: Input,
	textarea: Textarea,
} as const;

type ComponentKey = keyof typeof componentMap;

interface FormFieldProps<T extends keyof FormData = keyof FormData> {
	field: Extract<FieldConfig<T>, { component: ComponentKey }>;
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
	disabled?: boolean;
}

const FormField = <T extends keyof FormData>({
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
			<Component {...(props as any)} disabled={disabled} {...registerProps} />
			<FieldError error={error} />
		</div>
	);
};

export default FormField;
