import styled from "styled-components/native";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;

  background-color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  color: #c5c5c5;
  font-size: 36px;
  font-family: ${theme.fonts.medium};
  margin-bottom: 32px;
`;

export const Label = styled.Text`
  font-size: 25px;
  margin-bottom: 5px;
  color: #b2b2b2;
  font-family: ${theme.fonts.light};
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 10px 0;

  align-items: center;
  justify-content: center;

  background-color: #293a4e;
`;

export const ErrorText = styled.Text`
  color: #fff;
  font-family: ${theme.fonts.light};
  font-size: 22px;
  text-align: center;
`;
