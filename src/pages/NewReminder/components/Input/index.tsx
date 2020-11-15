import React, { useRef } from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface IInputProps extends TextInputProps {}

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  const ref = useRef(null);

  return <Container ref={ref} placeholderTextColor="#878787" {...rest} />;
};

export default Input;
