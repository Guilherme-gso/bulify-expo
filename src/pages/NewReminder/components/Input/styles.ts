import styled from "styled-components/native";
import theme from '../../../../theme';

export const Container = styled.TextInput`
  width: 100%;
  height: 52px;
  padding: 5px 15px;
  border-radius: 8px;
  font-size: 22px;

  background-color: #293a4e;
  color: #878787;
  font-family: ${theme.fonts.regular};
  margin: 24px 0;
`;
