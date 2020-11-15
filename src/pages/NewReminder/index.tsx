import React from "react";

import { useForm } from "../../hooks/form";

import {
  ReminderDescription,
  ReminderDuration,
  ReminderName,
} from "./components/Forms";

import { Container } from "./styles";

const NewReminder: React.FC = () => {
  const { selectedForm } = useForm();

  const Forms = {
    ReminderDescription: <ReminderDescription />,
    ReminderDuration: <ReminderDuration />,
    ReminderName: <ReminderName />,
  };

  return <Container>{Forms[selectedForm]}</Container>;
};

export default NewReminder;
