import React from 'react';

export default function FormContainer({ children, extraClasses = '' }) {
  const className = ['edit-block_form', extraClasses].filter(Boolean).join(' ');

  return <div className={className}>{children}</div>;
}
