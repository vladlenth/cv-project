import { createInputField, createTextareaField } from './fieldFactory';
import { FieldConfig } from './types';

export const cvFormFields: FieldConfig[] = [
	createInputField(
		'firstName',
		{
			label: 'First name:',
			id: 'cvFirstName',
			type: 'text',
			placeholder: 'Francisco',
		},
		{
			required: 'First name is required',
			pattern: {
				value: /^[A-Za-z\s]+$/,
				message: 'Only Latin letters are allowed',
			},
		},
	),

	createInputField(
		'lastName',
		{
			label: 'Last Name:',
			id: 'cvLastName',
			type: 'text',
			placeholder: 'Rabaneda Cuervo',
		},
		{
			required: 'Last name is required',
			pattern: {
				value: /^[A-Za-z\s]+$/,
				message: 'Only Latin letters are allowed',
			},
		},
	),

	createInputField(
		'profession',
		{
			label: 'Profession:',
			id: 'cvProfession',
			type: 'text',
			placeholder: 'Fashion designer',
		},
		{
			required: 'Profession is required',
			pattern: {
				value: /^[A-Za-z\s]+$/,
				message: 'Only Latin letters are allowed',
			},
		},
	),

	createInputField(
		'address',
		{
			label: 'City and Country:',
			id: 'cvAddress',
			type: 'text',
			placeholder: 'Pasaia, Spain',
		},
		{
			required: 'Address is required',
			pattern: {
				value: /^[A-Za-z\s,]+$/,
				message: 'Only Latin letters and commas are allowed',
			},
		},
	),

	createInputField(
		'email',
		{
			label: 'Email:',
			id: 'cvEmail',
			type: 'email',
			placeholder: 'contact@rabanede.com',
		},
		{
			required: 'Email is required',
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: 'Invalid email address',
			},
		},
	),

	createInputField(
		'phoneNumber',
		{
			label: 'Phone number:',
			id: 'cvPhoneNumber',
			type: 'tel',
			placeholder: '+1 (855) 657-2264',
		},
		{
			required: 'Phone number is required',
			pattern: {
				value: /^[0-9]+$/,
				message: 'Only digits are allowed',
			},
		},
	),

	createTextareaField('aboutMe', {
		label: 'Description (About me):',
		id: 'cvAboutMe',
		placeholder: 'More info.',
		rows: 6,
	}),
];
