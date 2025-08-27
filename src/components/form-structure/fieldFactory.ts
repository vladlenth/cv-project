import { InputProps } from '../ui/Input';
import { TextareaProps } from '../ui/Textarea';
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
  tooltip?: string;
  props: Omit<InputProps, 'name'>;
  validation?: ValidationRules;
};

export type FieldConfigTextarea<T extends keyof FormData = keyof FormData> = {
  component: 'textarea';
  name: T;
  tooltip?: string;
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
  tooltip?: string,
): FieldConfigInput<T> => ({
  component: 'input',
  name,
  props,
  validation,
  tooltip,
});

export const createTextareaField = <T extends keyof FormData>(
  name: T,
  props: FieldConfigTextarea<T>['props'],
  validation?: ValidationRules,
  tooltip?: string,
): FieldConfigTextarea<T> => ({
  component: 'textarea',
  name,
  props,
  validation,
  tooltip,
});
