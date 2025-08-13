import { FC } from 'react';

import '../styles/CVForm.css';

import { FormInput } from './forms/FormInput';

const CVForm: FC = () => {
  return (
    <section className='edit-block'>
      <div className='edit-block_wrapper'>
        <FormInput />
      </div>
    </section>
  );
};

export default CVForm;
