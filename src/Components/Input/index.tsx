import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

// type InputProps = InputHTMLAttributes<HTMLInputElement>;

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
  return <Container id={inputId} type={inputType} name={inputName} />;
};

export default Input;
