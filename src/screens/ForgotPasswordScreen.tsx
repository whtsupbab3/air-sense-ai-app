import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import globalStyles from "../styles/GlobalStyles";

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(email);
    if (!email.trim()) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleResetPassword = () => {
    // Validate email before proceeding
    validateEmail(email);
    
    if (!email.trim() || emailError) {
      return;
    }
    
    alert("Password reset instructions have been sent to your email");
    navigation.navigate("SignIn");
  };

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={[globalStyles.text, styles.title]}>Reset Password</Text>

      <Text style={styles.description}>
        Enter your email address and we'll send you instructions to reset your
        password.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email<Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          placeholder="user@gmail.com"
          placeholderTextColor="#666"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <TouchableOpacity
        style={[styles.resetButton, (emailError || !email.trim()) && styles.resetButtonDisabled]}
        onPress={handleResetPassword}
        disabled={!!emailError || !email.trim()}
      >
        <Text style={styles.resetButtonText}>Send Reset Instructions</Text>
      </TouchableOpacity>

      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.backButton}>Back to Login</Text>
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
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
  },
  input: {
    color: "#666",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: "#FFF",
    color: "#000",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  backContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  backButton: {
    color: "#2ca464",
    fontSize: 16,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 4,
  },
  required: {
    color: "#FF0000",
    marginLeft: 4,
  },
  inputError: {
    borderColor: "#FF0000",
  },
  resetButtonDisabled: {
    opacity: 0.5,
  },
});
