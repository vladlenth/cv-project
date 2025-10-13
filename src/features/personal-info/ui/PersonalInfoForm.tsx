import React from 'react';
import FormContainer from '../../../shared/ui/form-container/ui/FormContainer';
import FormField from '../../../shared/ui/form-field/ui/FormField';
import SubmittedData from '../../../widgets/submitted-data/ui/SubmittedData';
import Button from '../../../shared/ui/button/ui/Button';
import { usePersonalInfo } from '../model/usePersonalInfo';
import { cvFormFields } from '../lib/cvFormFields';

export const PersonalInfoForm: React.FC = () => {
	const { register, errors, isSubmitted, isValid, submittedData, handleSend, handleEdit } =
		usePersonalInfo();

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
								disabled={!isValid && !isSubmitted}
							/>
						</form>
					</FormContainer>
				</div>

				{isSubmitted && submittedData && (
					<FormContainer>
						<div>
							<SubmittedData data={submittedData} />
						</div>
					</FormContainer>
				)}
			</div>
		</section>
	);
};
