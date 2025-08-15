import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';

import FormContainer from './FormContainer';
import SubmittedData from './SubmittedData';
import { Button } from '../ui/Button';
import { cvFormFields } from '../../data/cvFormFields';
import { personalInfoSchema, PersonalInfoFormData } from '../../data/validationSchemas';

type FieldName = keyof PersonalInfoFormData;

export const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    mode: 'onChange',
    resolver: zodResolver(personalInfoSchema),
  });

  const [isSent, setIsSent] = useState(false);

  const onSubmit = (data: PersonalInfoFormData) => {
    console.log('Submitted:', data);
    setIsSent(true);
  };

  const handleEdit = () => {
    reset(getValues());
    setIsSent(false);
  };

  return (
    <section className="edit-block">
      <div className="edit-block_wrapper">
        <div className="submitted-data_content-left">
          <FormContainer>
            <h2 className="submitted-data__title">Personal Information:</h2>

            {cvFormFields.map(({ component: Component, name, ...props }, index) => (
              <Component
                key={props.id ?? `${name}-${index}`}
                {...(props as any)}
                disabled={isSent}
                inputClass={classNames({ 'input-error': errors[name as FieldName] })}
                error={errors[name as FieldName]?.message}
                {...register(name as FieldName)}
              />
            ))}

            {isSent ? (
              <Button variant="sec" content="Edit" onClick={handleEdit} />
            ) : (
              <Button variant="sec" content="Send" type="button" onClick={handleSubmit(onSubmit)} />
            )}
          </FormContainer>
        </div>

        {isSent && (
          <FormContainer>
            <div className="submitted-data_content">
              <SubmittedData data={getValues()} />
            </div>
          </FormContainer>
        )}
      </div>
    </section>
  );
};
