import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonText } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  variant: 'primary';
}

const Button: React.FC<IButtonProps> = 
  ({ variant, children, ...rest }) => {
  return(
    <Container variant={variant} {...rest}>
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
};

export default Button;