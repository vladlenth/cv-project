import Input, { InputProps } from '../components/ui/Input';
import Textarea, { TextareaProps } from '../components/ui/Textarea';

import { PersonalInfoFormData } from './validationSchemas';

export type FormData = PersonalInfoFormData;

export type FieldConfig =
  | ({
      component: React.ComponentType<InputProps>;
      name: keyof FormData;
      tooltip?: string;
    } & Omit<InputProps, 'name'>)
  | ({
      component: React.ComponentType<TextareaProps>;
      name: keyof FormData;
      tooltip?: string;
    } & Omit<TextareaProps, 'name'>);

export const cvFormFields: FieldConfig[] = [
  {
    component: Input,
    label: 'First name:',
    id: 'cvFirstName',
    type: 'text',
    placeholder: 'Francisco',
    name: 'firstName',
    tooltip: 'Enter your name',
  },
  {
    component: Input,
    label: 'Last Name:',
    id: 'cvLastName',
    type: 'text',
    placeholder: 'Rabaneda Cuervo',
    name: 'lastName',
    tooltip: 'Enter your last name',
  },
  {
    component: Input,
    label: 'Profession:',
    id: 'cvProfession',
    type: 'text',
    placeholder: 'Fashion designer',
    name: 'profession',
    tooltip: 'Enter your profession',
  },
  {
    component: Input,
    label: 'City and Country:',
    id: 'cvAddress',
    type: 'text',
    placeholder: 'Pasaia, Spain',
    name: 'address',
    tooltip: 'Enter your city and country',
  },
  {
    component: Input,
    label: 'Email:',
    id: 'cvEmail',
    type: 'email',
    placeholder: 'contact@rabanede.com',
    name: 'email',
    tooltip: 'Enter your email',
  },
  {
    component: Input,
    label: 'Phone number:',
    id: 'cvPhoneNumber',
    type: 'tel',
    placeholder: '+1 (855) 657-2264',
    name: 'phoneNumber',
    tooltip: 'Enter your phone number',
  },
  {
    component: Textarea,
    label: 'Description (About me):',
    id: 'cvAboutMe',
    placeholder: 'More info.',
    rows: 6,
    name: 'aboutMe',
    tooltip: 'About me',
  },
];
