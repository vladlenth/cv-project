import React from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from './FormContainer';
import Textarea from './Textarea';
import Input from './Input';
import { Button } from '../Button';
import SubmittedData from './SubmittedData';

export function FormInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
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

  const [sent, setSent] = React.useState(false);
  const [formData, setFormData] = React.useState(null);

  React.useEffect(() => {
    if (!sent && formData) {
      reset(formData);
    }
  }, [sent, formData, reset]);

  const onSubmit = (data) => {
    console.log('Переданные данные:', data);
    setFormData(data);
    setSent(true);
  };

  const handleButtonClick = () => {
    if (sent) {
      setSent(false);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <section className='edit-block'>
      <div className='edit-block_wrapper'>
        <FormContainer extraClasses='form-container'>
          <h2 className='submitted-data__title'>Personal Information:</h2>
          <Input
            label='First name:'
            id='cvFirstName'
            type='text'
            placeholder='Francisco'
            disabled={sent}
            required
            inputClass={errors.firstName ? 'input-error' : ''}
            {...register('firstName', { required: 'First name is required' })}
          />
          <Input
            label='Last Name:'
            id='cvLastName'
            type='text'
            placeholder='Rabaneda Cuervo'
            disabled={sent}
            required
            inputClass={errors.lastName ? 'input-error' : ''}
            {...register('lastName', { required: 'Last name is required' })}
          />
          <Input
            label='Profession:'
            id='cvProfession'
            type='text'
            placeholder='Fashion designer'
            disabled={sent}
            required
            inputClass={errors.profession ? 'input-error' : ''}
            {...register('profession', { required: 'Profession is required' })}
          />
          <Input
            label='City and Country:'
            id='cvAddress'
            type='text'
            placeholder='Pasaia, Spain'
            disabled={sent}
            required
            inputClass={errors.address ? 'input-error' : ''}
            {...register('address', { required: 'Address is required' })}
          />
          <Input
            label='Email:'
            id='cvEmail'
            type='email'
            placeholder='contact@rabanne.com'
            disabled={sent}
            required
            inputClass={errors.email ? 'input-error' : ''}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <Input
            label='Phone number:'
            id='cvPhoneNumber'
            type='tel'
            placeholder='+1 (855) 657-2264'
            disabled={sent}
            required
            inputClass={errors.phoneNumber ? 'input-error' : ''}
            {...register('phoneNumber', {
              required: 'Phone number is required',
              minLength: {
                value: 7,
                message: 'Phone number too short',
              },
            })}
          />
          <Textarea
            label='Description (About me):'
            id='cvAboutMe'
            rows={6}
            placeholder='More info.'
            disabled={sent}
            inputClass={errors.aboutMe ? 'input-error' : ''}
            {...register('aboutMe', { required: 'Description is required' })}
          />
          <Button
            variant='sec'
            content={sent ? 'Edit' : 'Send'}
            onClick={handleButtonClick}
            disabled={!isValid && !sent}
          />
        </FormContainer>

        {sent && (
          <FormContainer extraClasses='data-container'>
            <SubmittedData data={formData} />
          </FormContainer>
        )}
      </div>
    </section>
  );
}
