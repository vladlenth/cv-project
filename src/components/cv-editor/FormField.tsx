import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { FormData, FieldConfig } from '../form-structure/fieldFactory';

const componentMap = {
  input: Input,
  textarea: Textarea,
} as const;

type ComponentKey = keyof typeof componentMap;

interface FormFieldProps<T extends keyof FormData = keyof FormData> {
  field: Extract<FieldConfig<T>, { component: ComponentKey }>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  disabled?: boolean;
}

const FormField = <T extends keyof FormData>({
  field,
  register,
  errors,
  disabled,
}: FormFieldProps<T>) => {
  const { component, name, tooltip, props, validation } = field;

  const Component = componentMap[component] as React.ElementType;

  const registerProps = register(name, validation);
  const error = errors[name];

  return (
    <div className="form-field-wrapper">
      <Component
        {...(props as any)}
        tooltip={tooltip}
        disabled={disabled}
        inputClass={classNames({ 'input-error': error })}
        {...registerProps}
      />
      {error && (
        <p role="alert" className="error-message">
          {error.message?.toString() || 'Invalid input'}
        </p>
      )}
    </div>
  );
};

export default FormField;
