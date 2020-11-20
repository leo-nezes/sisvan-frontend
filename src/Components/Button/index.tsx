import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: PropTypes.node,
};

export default Button;
