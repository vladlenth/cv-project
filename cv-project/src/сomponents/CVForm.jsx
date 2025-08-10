import React from 'react';
import '../styles/CVForm.css';
import { FormInput } from './CVEditForm/FormInput';

function CVForm() {
  return (
    <section className='edit-block'>
      <div className='edit-block_wrapper'>
        <FormInput />
      </div>
    </section>
  );
}

export default CVForm;
