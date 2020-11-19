import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ children, icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};

Button.defaultProps = {
  children: PropTypes.node,
  icon: '',
};

export default Button;
