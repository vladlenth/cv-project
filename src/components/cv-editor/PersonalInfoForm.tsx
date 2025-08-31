import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormField from './FormField';
import FormContainer from './FormContainer';
import SubmittedData from './SubmittedData';
import { Button } from '../ui/Button';

import { cvFormFields } from '../form-structure/cvFormFields';
import { personalInfoSchema, PersonalInfoFormData } from '../form-structure/validationSchemas';

export const PersonalInfoForm = () => {
	const [isSent, setIsSent] = useState(false);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<PersonalInfoFormData>({
		mode: 'onChange',
		resolver: zodResolver(personalInfoSchema),
	});

	const toggleSent = useCallback(() => {
		!isSent
			? handleSubmit((data) => {
					console.log('Submitted:', data);
					setIsSent(true);
				})()
			: setIsSent(false);
	}, [handleSubmit, isSent]);

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
									disabled={isSent}
								/>
							))}

							<Button
								variant="sec"
								content={isSent ? 'Edit' : 'Send'}
								type="button"
								onClick={toggleSent}
							/>
						</form>
					</FormContainer>
				</div>

				{isSent && (
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
