import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  Container,
  Label,
  BackToSignInButton,
  Title,
  ErrorText,
} from "./styles";
import api from "../../services/api";

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = useCallback(async () => {
    try {
      if (!email || !password) {
        throw new Error("Informe seus dados corretamente");
      }

      setLoading(true);
      await api.post("/users", { email, password });
      navigation.navigate("SignIn");
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  return (
    <Container>
      <Title>Crie sua conta</Title>
      <Input
        icon="mail"
        value={email}
        onChangeText={setEmail}
        placeholder="Informe seu email"
      />

      <Input
        icon="lock"
        value={password}
        onChangeText={setPassword}
        placeholder="Sua senha secreta"
        secureTextEntry
      />

      {isError && <ErrorText>{errorMessage}</ErrorText>}
      <Button onPress={handleCreateAccount} variant="primary">
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>

      <BackToSignInButton onPress={() => navigation.navigate("SignIn")}>
        <Label>Voltar para Login</Label>
      </BackToSignInButton>
    </Container>
  );
};

export default SignUp;
