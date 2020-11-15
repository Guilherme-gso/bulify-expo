import styled from 'styled-components/native';
import themes from '../../theme';

interface IButtonProps {
  variant: 'primary';
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  background: ${props => props.variant === 'primary' && themes.colors.secondary};
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: ${themes.fonts.medium};
`;
