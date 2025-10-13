import { FC } from 'react';

import '../styles/CVForm.css';

import { PersonalInfoForm } from '../../../features/personal-info/ui/PersonalInfoForm';

const CVForm: FC = () => {
	return (
		<div>
			<PersonalInfoForm />
		</div>
	);
};

export default CVForm;
