import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema, PersonalInfoFormData } from './validationSchemas';

export const usePersonalInfo = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submittedData, setSubmittedData] = useState<PersonalInfoFormData | null>(null);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = useForm<PersonalInfoFormData>({
		mode: 'onChange',
		resolver: zodResolver(personalInfoSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			profession: '',
			address: '',
			email: '',
			phoneNumber: '',
			aboutMe: '',
		},
	});

	const handleSend = handleSubmit((data) => {
		console.log('Submitted:', data);
		setSubmittedData(data);
		setIsSubmitted(true);
	});

	const handleEdit = () => {
		setIsSubmitted(false);
		setSubmittedData(null);
	};

	return {
		register,
		handleSubmit,
		getValues,
		errors,
		isSubmitted,
		isValid,
		submittedData,
		handleSend,
		handleEdit,
	};
};
