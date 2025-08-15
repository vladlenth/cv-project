import { FC } from 'react';

import { FormData } from '../../data/cvFormFields';

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
    <div className="submitted-data">
      <h2 className="submitted-data__title">Submitted Data:</h2>
      <div className="submitted-data__group">
        {Object.keys(labels).map((key) => (
          <div className="submitted-data__field" key={key}>
            <label>{labels[key as keyof FormData]}</label>
            <p>{data[key as keyof FormData]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedData;
