import React, { useReducer, useEffect, useMemo } from "react";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SignUpScreen from "./src/screens/SignUpScreen"; 
import { authReducer, initialState } from "./src/state/authReducer";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type AuthContextType = {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
};

export default function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string | null = null;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // handle error if needed
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo<AuthContextType>(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => {
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : state.userToken == null ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: "Sign In",
                animationTypeForReplace: state.isSignout ? "pop" : "push",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                title: "Sign Up",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                title: "Forgot Password",
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
