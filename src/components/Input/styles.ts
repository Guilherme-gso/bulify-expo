import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import themes from '../../theme';

export const Container = styled.View`
  width: 100%;
  background: ${themes.colors.input};
  height: 60px;
  border-radius: 8px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  padding: 0 15px;
`;

export const TextInput = styled.TextInput`
  font-size: 22px;
  font-family: ${themes.fonts.light};
  color: #ddd;
  flex: 1;
`;

export const Icon = styled(Feather)`
  margin-right: 20px;
`;
