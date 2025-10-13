import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .regex(/^[A-Za-z\s]+$/, 'Only Latin letters are allowed'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .regex(/^[A-Za-z\s]+$/, 'Only Latin letters are allowed'),
  profession: z
    .string()
    .min(1, 'Profession is required')
    .regex(/^[A-Za-z\s]+$/, 'Only Latin letters are allowed'),
  address: z
    .string()
    .min(1, 'Address is required')
    .regex(/^[A-Za-z\s,]+$/, 'Only Latin letters and commas are allowed'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9+()\s-]+$/, 'Invalid phone number format'),
  aboutMe: z.string().optional(),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
