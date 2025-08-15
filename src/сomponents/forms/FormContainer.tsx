import { ReactNode, FC } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return <div className="edit-block_form">{children}</div>;
};

export default FormContainer;
