import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormField from '../FormField/FormField';
import FormContainer from '../../../../shared/ui/FormContainer/FormContainer';
import SubmittedData from '../SubmittedData/SubmittedData';
import { Button } from '../../../../shared/ui/Button/Button';

import { cvFormFields } from '../../model/form-structure/cvFormFields';
import {
	personalInfoSchema,
	PersonalInfoFormData,
} from '../../model/form-structure/validationSchemas';

export const PersonalInfoForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<PersonalInfoFormData>({
		mode: 'onChange',
		resolver: zodResolver(personalInfoSchema),
	});

	const handleSend = handleSubmit((data) => {
		console.log('Submitted:', data);
		setIsSubmitted(true);
	});

	const handleEdit = () => {
		setIsSubmitted(false);
	};

	return (
		<section className="edit-block">
			<div className="edit-block_wrapper">
				<div className="submitted-data_content-left">
					<FormContainer>
						<h2 className="submitted-data__title">Personal Information:</h2>

						<form noValidate>
							{cvFormFields.map((field) => (
								<FormField
									key={field.props.id}
									field={field}
									register={register}
									errors={errors}
									disabled={isSubmitted}
								/>
							))}

							<Button
								variant="sec"
								content={isSubmitted ? 'Edit' : 'Send'}
								type="button"
								onClick={isSubmitted ? handleEdit : handleSend}
							/>
						</form>
					</FormContainer>
				</div>

				{isSubmitted && (
					<FormContainer>
						<div>
							<SubmittedData data={getValues()} />
						</div>
					</FormContainer>
				)}
			</div>
		</section>
	);
};
