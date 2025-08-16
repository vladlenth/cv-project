import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';

import { PersonalInfoFormData } from './validationSchemas';

export type FormData = PersonalInfoFormData;

type InputFieldConfig = {
  component: typeof Input;
  type?: string;
} & Omit<React.ComponentProps<typeof Input>, 'name'> & {
    name: keyof FormData;
    tooltip?: string;
  };

type TextareaFieldConfig = {
  component: typeof Textarea;
} & Omit<React.ComponentProps<typeof Textarea>, 'name'> & {
    name: keyof FormData;
    tooltip?: string;
  };

export type FieldConfig = InputFieldConfig | TextareaFieldConfig;

export const cvFormFields: FieldConfig[] = [
  {
    component: Input,
    label: 'First name:',
    id: 'cvFirstName',
    type: 'text',
    placeholder: 'Francisco',
    name: 'firstName' as keyof FormData,
    tooltip: 'Enter your name',
  },
  {
    component: Input,
    label: 'Last Name:',
    id: 'cvLastName',
    type: 'text',
    placeholder: 'Rabaneda Cuervo',
    name: 'lastName' as keyof FormData,
    tooltip: 'Enter your last name',
  },
  {
    component: Input,
    label: 'Profession:',
    id: 'cvProfession',
    type: 'text',
    placeholder: 'Fashion designer',
    name: 'profession' as keyof FormData,
    tooltip: 'Enter your profession',
  },
  {
    component: Input,
    label: 'City and Country:',
    id: 'cvAddress',
    type: 'text',
    placeholder: 'Pasaia, Spain',
    name: 'address' as keyof FormData,
    tooltip: 'Enter your city and country',
  },
  {
    component: Input,
    label: 'Email:',
    id: 'cvEmail',
    type: 'email',
    placeholder: 'contact@rabanede.com',
    name: 'email' as keyof FormData,
    tooltip: 'Enter your email',
  },
  {
    component: Input,
    label: 'Phone number:',
    id: 'cvPhoneNumber',
    type: 'tel',
    placeholder: '+1 (855) 657-2264',
    name: 'phoneNumber' as keyof FormData,
    tooltip: 'Enter your phonenumber',
  },
  {
    component: Textarea,
    label: 'Description (About me):',
    id: 'cvAboutMe',
    placeholder: 'More info.',
    rows: 6,
    name: 'aboutMe' as keyof FormData,
    tooltip: 'Расскажите о себе',
  },
];
