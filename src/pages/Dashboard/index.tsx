import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useReminder } from "../../hooks/reminder";
import Header from "../../components/Header";

import cloud from "../../assets/cloud.png";

import {
  Container,
  ReminderList,
  ReminderContainer,
  ReminderButton,
  ReminderInfos,
  ReminderDescription,
  ReminderDescriptionText,
  ReminderDate,
  ReminderName,
  RegisterReminderContainer,
  RegisterReminderButton,
  NoReminders,
  NoRemindersImage,
  NoRemindersMessage,
} from "./styles";

interface IReminder {
  id: string;
  title: string;
  date: string;
  description: string;
  isDeprecated: boolean;
}

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();
  const { reminders } = useReminder();

  const [descriptionShown, setDescriptionShown] = useState<string>();

  const handleShowDescription = useCallback((id) => {
    setDescriptionShown(id);
  }, []);

  return (
    <Container>
      <Header title="Meus Lembretes" />
      {reminders.length ? (
        <ReminderList
          data={reminders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: IReminder }) => (
            <ReminderContainer>
              <ReminderButton
                isOpen={item.id === descriptionShown}
                onPress={() =>
                  handleShowDescription(
                    item.id === descriptionShown ? null : item.id
                  )
                }
              >
                <ReminderInfos>
                  <ReminderName>{item.title}</ReminderName>
                  <ReminderDate>Hoje</ReminderDate>
                </ReminderInfos>

                {descriptionShown === item.id && (
                  <ReminderDescription>
                    <ReminderDescriptionText>
                      {item.description}
                    </ReminderDescriptionText>
                  </ReminderDescription>
                )}
              </ReminderButton>
            </ReminderContainer>
          )}
        />
      ) : (
        <NoReminders>
          <Image source={cloud} />
          <NoRemindersMessage>
            Você não possui nenhum lembrete cadastrado.
          </NoRemindersMessage>
        </NoReminders>
      )}

      <RegisterReminderContainer>
        <RegisterReminderButton onPress={() => navigate("NewReminder")}>
          <Feather name="plus" size={30} color="#fff" />
        </RegisterReminderButton>
      </RegisterReminderContainer>
    </Container>
  );
};

export default Dashboard;
