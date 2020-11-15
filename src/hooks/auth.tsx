import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
  id: string;
}

interface IAuthState {
  user: IUser;
  token: string;
}

interface IAuthContextData {
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
  user: IUser;
  loading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as IAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem("@bulify-token");
      const user = await AsyncStorage.getItem("@bulify-user");

      if (user && token) {
        setData({ token, user: JSON.parse(user) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async (credentials) => {
    const { data } = await api.post("/sessions", {
      email: credentials.email,
      password: credentials.password,
    });

    const { token, user } = data;

    if (data.error) {
      throw new Error(
        "Ocorreu um erro ao fazer login, cheque suas credenciais"
      );
    }

    if (user) {
      delete user.password;

      await AsyncStorage.multiSet([
        ["@bulify-token", token],
        ["@bulify-user", JSON.stringify(user)],
      ]);

      setData({ user, token });
    }
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    await AsyncStorage.multiRemove(["@bulify-token", "@bulify-user"]);

    setData({} as IAuthState);
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      token: data.token,
      user: data.user,
      loading,
    }),
    [signIn, signOut, data.user, data.token, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => useContext(AuthContext);

export { AuthProvider, useAuth };
