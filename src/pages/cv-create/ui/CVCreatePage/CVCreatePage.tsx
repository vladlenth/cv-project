import { FC } from 'react';

import '../../../../styles/styles.css';

import { PersonalInfoForm } from '../../../../features/cv-creation/ui/PersonalInfoForm';

export const CVCreatePage: FC = () => {
	return (
		<div>
			<PersonalInfoForm />
		</div>
	);
};

export default CVCreatePage;
