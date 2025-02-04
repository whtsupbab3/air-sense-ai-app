import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>Log in</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@company.com"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Your password"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="#666"
            />
          </Pressable>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={[globalStyles.text, styles.forgotPassword]}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    padding: 16,
    color: "#FFFFFF",
    fontSize: 16,
  },
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
  },
  forgotPassword: {
    color: "#2ca464",
    marginTop: 8,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    color: "#666",
    fontSize: 16,
  },
  registerButton: {
    color: "#2ca464",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
