import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormContainer from './FormContainer';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import SubmittedData from './SubmittedData';
import { Button } from '../ui/Button';

import { cvFormFields, FormData } from '../../data/cvFormFields';

export function PersonalInfoForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      profession: '',
      address: '',
      email: '',
      phoneNumber: '',
      aboutMe: '',
    },
  });

  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    if (!sent && formData) {
      reset(formData);
    }
  }, [sent, formData, reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Переданные данные:', data);
    setFormData(data);
    setSent(true);
  };

  const handleButtonClick = () => {
    if (sent) {
      setSent(false);
    } else {
      void handleSubmit(onSubmit)();
    }
  };

  return (
    <section className="edit-block">
      <div className="edit-block_wrapper">
        <FormContainer>
          <h2 className="submitted-data__title">Personal Information:</h2>

          {cvFormFields.map(
            ({ label, id, type = 'text', placeholder, name, rules, isTextarea, rows }) =>
              isTextarea ? (
                <Textarea
                  key={id}
                  label={label}
                  id={id}
                  placeholder={placeholder}
                  rows={rows}
                  disabled={sent}
                  inputClass={errors[name] ? 'input-error' : ''}
                  {...register(name, rules)}
                />
              ) : (
                <Input
                  key={id}
                  label={label}
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  disabled={sent}
                  required
                  inputClass={errors[name] ? 'input-error' : ''}
                  {...register(name, rules)}
                />
              ),
          )}

          <Button
            variant="sec"
            content={sent ? 'Edit' : 'Send'}
            onClick={handleButtonClick}
            disabled={!isValid && !sent}
          />
        </FormContainer>

        {sent && (
          <FormContainer>
            <SubmittedData data={formData} />
          </FormContainer>
        )}
      </div>
    </section>
  );
}
