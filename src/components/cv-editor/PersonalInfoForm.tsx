import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';

import FormContainer from './FormContainer';
import SubmittedData from './SubmittedData';
import { Button } from '../ui/Button';

import { cvFormFields } from '../../data/cvFormFields';
import { personalInfoSchema, PersonalInfoFormData } from '../../data/validationSchemas';

import Input, { InputProps } from '../ui/Input';
import Textarea, { TextareaProps } from '../ui/Textarea';

type FieldName = keyof PersonalInfoFormData;

export const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    mode: 'onChange',
    resolver: zodResolver(personalInfoSchema),
  });

  const [isSent, setIsSent] = useState(false);

  return (
    <section className="edit-block">
      <div className="edit-block_wrapper">
        <div className="submitted-data_content-left">
          <FormContainer>
            <h2 className="submitted-data__title">Personal Information:</h2>

            {cvFormFields.map(({ component: Component, name, tooltip, ...props }, index) => {
              if (Component === Input) {
                return (
                  <Input
                    key={props.id ?? `${name}-${index}`}
                    {...(props as InputProps)}
                    disabled={isSent}
                    inputClass={classNames({ 'input-error': errors[name as FieldName] })}
                    {...register(name as FieldName)}
                    tooltip={tooltip}
                  />
                );
              }

              if (Component === Textarea) {
                return (
                  <Textarea
                    key={props.id ?? `${name}-${index}`}
                    {...(props as TextareaProps)}
                    disabled={isSent}
                    inputClass={classNames({ 'input-error': errors[name as FieldName] })}
                    {...register(name as FieldName)}
                  />
                );
              }

              return null;
            })}

            {isSent ? (
              <Button variant="sec" content="Edit" onClick={() => setIsSent(false)} />
            ) : (
              <Button
                variant="sec"
                content="Send"
                type="button"
                onClick={handleSubmit((data) => {
                  console.log('Submitted:', data);
                  setIsSent(true);
                })}
              />
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
