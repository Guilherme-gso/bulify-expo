import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import api from "../services/api";
import { useAuth } from "./auth";

interface IReminder {
  id?: string;
  title: string;
  date?: string;
  description: string;
  duration: string;
}

interface IReminderContextData {
  reminders: IReminder[];
  add(reminder: IReminder): void;
}

const ReminderContext = createContext({} as IReminderContextData);

const ReminderProvider: React.FC = ({ children }) => {
  const [reminders, setReminders] = useState<IReminder[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function getReminders(): Promise<void> {
      if (token) {
        try {
          const { data } = await api.get(`/reminders`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          setReminders(data);
        } catch (err) {
          console.log(err.message);
        }
      }
    }

    getReminders();
  }, [token]);

  const add = useCallback(
    async (reminder: IReminder) => {
      const date = new Date();
      date.setHours(23, 59, 59);

      const { description, duration, title } = reminder;

      const { data } = await api.post(
        "/reminders",
        {
          title,
          description,
          duration,
          date,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const createdReminder = {
        ...reminder,
        id: data.id,
      };

      setReminders([...reminders, createdReminder]);
    },
    [token, reminders]
  );

  return (
    <ReminderContext.Provider value={{ reminders, add }}>
      {children}
    </ReminderContext.Provider>
  );
};

const useReminder = (): IReminderContextData => useContext(ReminderContext);

export { useReminder, ReminderProvider };
