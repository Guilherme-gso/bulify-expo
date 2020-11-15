import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import NewReminder from "../pages/NewReminder";

import themes from "../theme";

const Stack = createStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: themes.colors.primary },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="NewReminder" component={NewReminder} />
    </Stack.Navigator>
  );
};

export default AppRouter;
