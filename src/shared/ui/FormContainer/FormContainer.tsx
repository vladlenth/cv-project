import { ReactNode, FC } from 'react';

export interface FormContainerProps {
	children: ReactNode;
}

export const FormContainer: FC<FormContainerProps> = ({ children }) => {
	return <div className="edit-block_form">{children}</div>;
};

export default FormContainer;
