import { ReactNode, FC } from 'react';

interface FormContainerProps {
  children: ReactNode;
  extraClasses?: string;
}

const FormContainer: FC<FormContainerProps> = ({ children, extraClasses = '' }) => {
  const className = ['edit-block_form', extraClasses].filter(Boolean).join(' ');

  return <div className={className}>{children}</div>;
};

export default FormContainer;
