import React, { createContext, useState, useContext } from "react";

interface IFormData {
  selectedForm: "ReminderName" | "ReminderDescription" | "ReminderDuration";
  setSelectedForm(
    form: "ReminderName" | "ReminderDescription" | "ReminderDuration"
  ): void;
  name: string;
  setName(name: string): void;
  duration: string;
  setDuration(duration: string): void;
  description: string;
  setDescription(description: string): void;
}

const FormContext = createContext({} as IFormData);

const FormProvider: React.FC = ({ children }) => {
  const [selectedForm, setSelectedForm] = useState<
    "ReminderName" | "ReminderDescription" | "ReminderDuration"
  >("ReminderName");

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  return (
    <FormContext.Provider
      value={{
        selectedForm,
        setSelectedForm,
        description,
        duration,
        name,
        setDescription,
        setDuration,
        setName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = (): IFormData => useContext(FormContext);

export { FormProvider, useForm };
