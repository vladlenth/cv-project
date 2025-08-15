import { FC } from 'react';

import '../styles/CVForm.css';

import { PersonalInfoForm } from './cv-editor/PersonalInfoForm';

const CVForm: FC = () => {
  return (
    <section className="edit-block">
      <div className="edit-block_wrapper">
        <PersonalInfoForm />
      </div>
    </section>
  );
};

export default CVForm;
