import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';
import themes from '../../theme';

interface IReminderButtonProps {
  isOpen: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const ReminderList = styled(FlatList)`
  flex: 1;
`;

export const ReminderContainer = styled.View``;

export const ReminderInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReminderButton = styled.TouchableOpacity<IReminderButtonProps>`
  padding: 15px 20px;
  background: ${props => !props.isOpen ? '#293a4e' : '#354455'};
`;


export const ReminderName = styled.Text`
  font-size: 22px;
  color: #ececec;
  font-family: ${theme.fonts.medium};
`;

export const ReminderDate = styled.Text`
  font-size: 22px;
  color: #b2b2b2;
  font-family: ${theme.fonts.regular};
`;

export const ReminderDescription = styled.View`
  margin-top: 12px;
`;

export const ReminderDescriptionText = styled.Text`
  font-size: 18px;
  color: #d6d6d6;
  font-family: ${theme.fonts.regular};
`;

export const RegisterReminderContainer = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 20px;

  align-items: center;
`;  

export const RegisterReminderButton = styled.TouchableOpacity`
  height: 74px;
  width: 74px;
  border-radius: 37px;
  background: ${themes.colors.secondary};
  box-shadow: 0px 4px 4px rgba(197, 31, 93, 0.4);

  align-items: center;
  justify-content: center;
`;

export const NoReminders = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoRemindersImage = styled.Image`
  height: 150px;
`;

export const NoRemindersMessage = styled.Text`
  font-size: 28px;
  color: #354455;
  text-align: center;
  font-family: ${theme.fonts.regular};
`;