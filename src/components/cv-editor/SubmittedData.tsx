import { FC } from 'react';
import { FormData } from '../form-structure/fieldFactory';

interface SubmittedDataProps {
	data: FormData | null;
}

const SubmittedData: FC<SubmittedDataProps> = ({ data }) => {
	if (!data) {
		return <p>No data submitted.</p>;
	}

	const labels: Record<keyof FormData, string> = {
		firstName: 'First name:',
		lastName: 'Last name:',
		profession: 'Profession:',
		address: 'City and Country:',
		email: 'Email:',
		phoneNumber: 'Phone number:',
		aboutMe: 'About Me:',
	};

	return (
		<div className="submitted-data_content">
			<h2 className="submitted-data__title">Submitted Data:</h2>
			<div className="submitted-data__group">
				{(Object.keys(labels) as (keyof FormData)[]).map((key) => (
					<div className="submitted-data__field" key={key}>
						<label>{labels[key]}</label>
						<p>{data[key] || '-'}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SubmittedData;
