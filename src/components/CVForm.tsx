import { FC } from 'react';

import '../styles/CVForm.css';

import { PersonalInfoForm } from './cv-editor/PersonalInfoForm';

const CVForm: FC = () => {
	return (
		<div>
			<PersonalInfoForm />
		</div>
	);
};

export default CVForm;
