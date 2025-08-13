import { RegisterOptions } from 'react-hook-form';

export interface FormData {
  firstName: string;
  lastName: string;
  profession: string;
  address: string;
  email: string;
  phoneNumber: string;
  aboutMe: string;
}

interface FieldConfig {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  name: keyof FormData;
  rules: RegisterOptions<FormData, keyof FormData>;
  isTextarea?: boolean;
  rows?: number;
}

export const cvFormFields: FieldConfig[] = [
  {
    label: 'First name:',
    id: 'cvFirstName',
    type: 'text',
    placeholder: 'Francisco',
    name: 'firstName',
    rules: { required: 'First name is required' },
  },
  {
    label: 'Last Name:',
    id: 'cvLastName',
    type: 'text',
    placeholder: 'Rabaneda Cuervo',
    name: 'lastName',
    rules: { required: 'Last name is required' },
  },
  {
    label: 'Profession:',
    id: 'cvProfession',
    type: 'text',
    placeholder: 'Fashion designer',
    name: 'profession',
    rules: { required: 'Profession is required' },
  },
  {
    label: 'City and Country:',
    id: 'cvAddress',
    type: 'text',
    placeholder: 'Pasaia, Spain',
    name: 'address',
    rules: { required: 'Address is required' },
  },
  {
    label: 'Email:',
    id: 'cvEmail',
    type: 'email',
    placeholder: 'contact@rabanne.com',
    name: 'email',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
  },
  {
    label: 'Phone number:',
    id: 'cvPhoneNumber',
    type: 'tel',
    placeholder: '+1 (855) 657-2264',
    name: 'phoneNumber',
    rules: {
      required: 'Phone number is required',
      minLength: { value: 7, message: 'Phone number too short' },
    },
  },
  {
    label: 'Description (About me):',
    id: 'cvAboutMe',
    placeholder: 'More info.',
    name: 'aboutMe',
    rules: { required: 'Description is required' },
    isTextarea: true,
    rows: 6,
  },
];
