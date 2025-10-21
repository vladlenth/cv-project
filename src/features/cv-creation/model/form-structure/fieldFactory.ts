import { InputProps } from '../../../../shared/ui/Input';
import { TextareaProps } from '../../../../shared/ui/Textarea';
import { FieldConfigInput, FieldConfigTextarea, ValidationRules, FormData } from './types';

export const createInputField = <T extends keyof FormData>(
	name: T,
	props: Omit<InputProps, 'name'>,
	validation?: ValidationRules,
): FieldConfigInput<T> => ({
	component: 'input',
	name,
	props,
	validation,
});

export const createTextareaField = <T extends keyof FormData>(
	name: T,
	props: Omit<TextareaProps, 'name'>,
	validation?: ValidationRules,
): FieldConfigTextarea<T> => ({
	component: 'textarea',
	name,
	props,
	validation,
});
