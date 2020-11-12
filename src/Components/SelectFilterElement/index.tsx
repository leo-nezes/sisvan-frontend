import React, { LabelHTMLAttributes } from 'react';

import { Container } from './styles';

import Input from '../Input';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputId: string;
  inputType: string;
  inputName?: string;
}

const SelectFilterElement: React.FC<LabelProps> = ({
  htmlFor,
  inputId,
  inputType,
  inputName = '',
  children,
  ...rest
}: LabelProps) => {
  return (
    <Container htmlFor={htmlFor}>
      <Input inputId={inputId} inputType={inputType} inputName={inputName} />
      {children}
    </Container>
  );
};

export default SelectFilterElement;
