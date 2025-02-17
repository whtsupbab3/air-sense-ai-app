import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store, persistor } from "./src/store";
import { useSelector } from "react-redux";
import { RootState } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import { SafeAreaView, StatusBar } from "react-native";
import globalStyles from "./src/styles/GlobalStyles";
import { LanguageProvider } from "i18n/LanguageContext";
import SettingsScreen from "screens/SettingsScreen";
import StatisticsScreen from "screens/StatisticsScreen";
import ControlScreen from "screens/ControlScreen";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Splash: undefined;
  Settings: undefined;
  Control: undefined;
  Statistics: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function AppContent() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Control"
              component={ControlScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Statistics"
              component={StatisticsScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <LanguageProvider>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <SafeAreaView style={globalStyles.safeArea}>
            <AppContent />
          </SafeAreaView>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
