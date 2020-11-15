import React, { useCallback } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import { useForm } from "../../../../hooks/form";
import { useReminder } from "../../../../hooks/reminder";

import Input from "../Input";
import { Button, ButtonText, InputLabel } from "./styles";

const ReminderName: React.FC = () => {
  const { setSelectedForm, name, setName } = useForm();

  return (
    <Animatable.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      animation="slideInRight"
    >
      <InputLabel>Nome do lembrete</InputLabel>
      <Input
        placeholder="Nome do remédio, medicação..."
        autoCapitalize="sentences"
        autoCorrect={false}
        keyboardAppearance="dark"
        value={name}
        onChangeText={setName}
      />
      <Button
        disabled={!!name ? false : true}
        onPress={() => {
          Keyboard.dismiss();
          setSelectedForm("ReminderDuration");
        }}
      >
        <ButtonText disabled={!!name ? false : true}>Próximo</ButtonText>
      </Button>
    </Animatable.View>
  );
};

const ReminderDuration: React.FC = () => {
  const { setSelectedForm, duration, setDuration } = useForm();

  return (
    <Animatable.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      animation="slideInRight"
    >
      <InputLabel>Duração (dias)</InputLabel>
      <Input
        placeholder="Por quanto tempo você quer ser notificado"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardAppearance="dark"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <Button
        disabled={!!duration ? false : true}
        onPress={() => {
          Keyboard.dismiss();
          setSelectedForm("ReminderDescription");
        }}
      >
        <ButtonText disabled={!!duration ? false : true}>Próximo</ButtonText>
      </Button>
    </Animatable.View>
  );
};

const ReminderDescription: React.FC = () => {
  const {
    description,
    setDescription,
    name,
    duration,
    setSelectedForm,
    setDuration,
    setName,
  } = useForm();
  const { navigate } = useNavigation();
  const { add } = useReminder();

  const handleSubmit = useCallback(async () => {
    add({
      title: name,
      description,
      duration,
    });

    setSelectedForm("ReminderName");
    setDuration("");
    setName("");
    setDescription("");
    navigate("Dashboard");
  }, [name, description, duration, add]);

  return (
    <Animatable.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      animation="slideInRight"
    >
      <InputLabel>Informações adicionais</InputLabel>
      <Input
        placeholder="Quantidade, local em que o remédio está..."
        autoCapitalize="sentences"
        autoCorrect={false}
        keyboardAppearance="dark"
        multiline
        maxLength={120}
        textAlignVertical="top"
        style={{ height: 100 }}
        value={description}
        onChangeText={setDescription}
      />
      <Button disabled={!!description ? false : true} onPress={handleSubmit}>
        <ButtonText disabled={!!description ? false : true}>Próximo</ButtonText>
      </Button>
    </Animatable.View>
  );
};

export { ReminderDescription, ReminderName, ReminderDuration };
