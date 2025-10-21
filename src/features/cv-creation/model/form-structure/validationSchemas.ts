import { z } from 'zod';

export const personalInfoSchema = z.object({
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
	profession: z.string().min(1, { message: 'Profession is required' }),
	address: z.string().min(1, { message: 'Address is required' }),
	email: z.string().email({ message: 'Invalid email' }),
	phoneNumber: z.string().min(5, { message: 'Phone number is too short' }),
	aboutMe: z.string().min(1, { message: 'Please write something about yourself' }),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
