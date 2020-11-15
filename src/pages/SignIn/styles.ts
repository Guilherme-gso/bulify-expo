import styled from "styled-components/native";
import themes from "../../theme";

export const Container = styled.View`
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: #c5c5c5;
  font-size: 36px;
  font-family: ${themes.fonts.medium};
  margin-bottom: 32px;
`;

export const Bottom = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  background: ${themes.colors.input};
  height: 70px;

  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BottomText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: ${themes.fonts.light};
  font-size: 22px;
`;

export const ErrorText = styled.Text`
  color: #fff;
  font-family: ${themes.fonts.light};
  font-size: 22px;
  text-align: center;
`;
