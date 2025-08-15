import Input, { InputProps } from '../components/ui/Input';
import Textarea, { TextareaProps } from '../components/ui/Textarea';

import { PersonalInfoFormData } from './validationSchemas';

export type FormData = PersonalInfoFormData;

type InputFieldConfig = {
  component: typeof Input;
  type: 'text' | 'email' | 'tel';
} & Omit<InputProps, 'name'> & {
    name: keyof FormData;
  };

type TextareaFieldConfig = {
  component: typeof Textarea;
} & Omit<TextareaProps, 'name'> & {
    name: keyof FormData;
  };

export type FieldConfig = InputFieldConfig | TextareaFieldConfig;

export const cvFormFields: FieldConfig[] = [
  {
    component: Input,
    label: 'First name:',
    id: 'cvFirstName',
    type: 'text',
    placeholder: 'Francisco',
    name: 'firstName',
  },
  {
    component: Input,
    label: 'Last Name:',
    id: 'cvLastName',
    type: 'text',
    placeholder: 'Rabaneda Cuervo',
    name: 'lastName',
  },
  {
    component: Input,
    label: 'Profession:',
    id: 'cvProfession',
    type: 'text',
    placeholder: 'Fashion designer',
    name: 'profession',
  },
  {
    component: Input,
    label: 'City and Country:',
    id: 'cvAddress',
    type: 'text',
    placeholder: 'Pasaia, Spain',
    name: 'address',
  },
  {
    component: Input,
    label: 'Email:',
    id: 'cvEmail',
    type: 'email',
    placeholder: 'contact@rabanede.com',
    name: 'email',
  },
  {
    component: Input,
    label: 'Phone number:',
    id: 'cvPhoneNumber',
    type: 'tel',
    placeholder: '+1 (855) 657-2264',
    name: 'phoneNumber',
  },
  {
    component: Textarea,
    label: 'Description (About me):',
    id: 'cvAboutMe',
    placeholder: 'More info.',
    name: 'aboutMe',
    rows: 6,
  },
];
