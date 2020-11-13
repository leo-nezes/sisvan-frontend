import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  inputType: string;
  inputName: string;
}

const Input: React.FC<InputProps> = ({
  inputId,
  inputType,
  inputName,
}: InputProps) => {
  return (
    <Container>
      <input id={inputId} type={inputType} name={inputName} />
    </Container>
  );
};

export default Input;
