import styled, { css } from "styled-components/native";
import theme from "../../../../theme";

export const InputLabel = styled.Text`
  font-family: ${theme.fonts.regular};
  color: #a9a8a8;
  font-size: 28px;
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  width: 180px;
  border-radius: 8px;
  background-color: ${theme.colors.secondary};

  padding: 5px 10px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #354455;
    `}
`;

interface IButtonTextProps {
  disabled: boolean;
}

export const ButtonText = styled.Text<IButtonTextProps>`
  font-size: 20px;
  font-family: ${theme.fonts.regular};
  color: ${(props) => (props.disabled ? "#243447" : "#fff")};
`;

export const ErrorContainer = styled.View`
  width: 100%;
`;

export const ErrorText = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.light};
`;
