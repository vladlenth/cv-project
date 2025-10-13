import { InputProps } from '../../../shared/ui/input/ui/Input';
import { TextareaProps } from '../../../shared/ui/textarea/ui/Textarea';
import { PersonalInfoFormData } from '../model/validationSchemas';

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

export const createInputField = <T extends keyof FormData>(
	name: T,
	props: FieldConfigInput<T>['props'],
	validation?: ValidationRules,
): FieldConfigInput<T> => ({
	component: 'input',
	name,
	props,
	validation,
});

export const createTextareaField = <T extends keyof FormData>(
	name: T,
	props: FieldConfigTextarea<T>['props'],
	validation?: ValidationRules,
): FieldConfigTextarea<T> => ({
	component: 'textarea',
	name,
	props,
	validation,
});
