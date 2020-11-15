import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useForm } from "../../hooks/form";

import {
  ReminderDescription,
  ReminderDuration,
  ReminderName,
} from "./components/Forms";

import { Container, Back } from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewReminder: React.FC = () => {
  const { goBack } = useNavigation();
  const { selectedForm } = useForm();

  const Forms = {
    ReminderDescription: <ReminderDescription />,
    ReminderDuration: <ReminderDuration />,
    ReminderName: <ReminderName />,
  };


  return (
    <>
      <Back onPress={goBack}>
        <MaterialIcons color="#fff" name="arrow-back" size={26} />
      </Back>
    <Container>
      
      {Forms[selectedForm]}
    </Container>
    </>
  );
};

export default NewReminder;
