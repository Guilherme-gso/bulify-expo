import styled from 'styled-components/native';
import themes from '../../theme';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  background: transparent;
`;

export const Title = styled.Text`
  padding: 20px;
  color: #c8c8c8;
  font-size: 28px;
  font-family: ${themes.fonts.medium};
`;