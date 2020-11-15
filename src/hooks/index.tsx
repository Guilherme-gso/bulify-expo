import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./auth";
import { FormProvider } from "./form";
import { ReminderProvider } from "./reminder";

const Provider: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <FormProvider>
          <ReminderProvider>{children}</ReminderProvider>
        </FormProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Provider;
