import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, Title, Bottom, BottomText, ErrorText } from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { signIn, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = useCallback(async () => {
    try {
      await signIn({ email, password });
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.message);
    }
  }, [email, password]);

  return (
    <>
      <Container>
        <Title>Entrar</Title>
        <Input
          icon="mail"
          value={email}
          placeholder="Seu endereço de email"
          onChangeText={(e) => {
            setEmail(e);
            setIsError(false);
          }}
        />
        <Input
          icon="lock"
          value={password}
          placeholder="Sua senha secreta"
          onChangeText={(e) => {
            setPassword(e);
            setIsError(false);
          }}
          secureTextEntry
        />
        {isError && <ErrorText>{errorMessage}</ErrorText>}
        <Button onPress={handleSignIn} variant="primary">
          {loading ? "Carregando..." : "Entrar"}
        </Button>
      </Container>

      <Bottom onPress={() => navigation.navigate("SignUp")}>
        <BottomText>Criar conta</BottomText>
      </Bottom>
    </>
  );
};

export default SignIn;
