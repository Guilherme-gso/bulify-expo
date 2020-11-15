import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  icon?: string;
}

const Input: React.FC<IInputProps> = ({ icon, ...rest }) => {
  return(
    <Container>
      {icon && <Icon name={icon} size={20} color="#c8c8c8" />}
      <TextInput placeholderTextColor="#c8c8c8" {...rest} />
    </Container>
  );
};

export default Input;