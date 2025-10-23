import { InputProps } from '@shared/ui/Input';
import { TextareaProps } from '@shared/ui/Textarea';
import { PersonalInfoFormData } from './validationSchemas';

export type FormData = PersonalInfoFormData;

export type ValidationRules = {
	required?: boolean | string;
	pattern?: { value: RegExp; message: string };
	minLength?: { value: number; message: string };
	maxLength?: { value: number; message: string };
};

export type FieldConfigInput<T extends keyof FormData = keyof FormData> = {
	component: 'input';
	name: T;
	props: Omit<InputProps, 'name'>;
	validation?: ValidationRules;
};

export type FieldConfigTextarea<T extends keyof FormData = keyof FormData> = {
	component: 'textarea';
	name: T;
	props: Omit<TextareaProps, 'name'>;
	validation?: ValidationRules;
};

export type FieldConfig<T extends keyof FormData = keyof FormData> =
	| FieldConfigInput<T>
	| FieldConfigTextarea<T>;
