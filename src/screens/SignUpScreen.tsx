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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import globalStyles from "../styles/GlobalStyles";
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from '../i18n/LanguageSelector';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useLanguage();

  const handleSignUp = async () => {
    if (!password.trim() || !email.trim() || !confirmPassword.trim()) return;
    
    setIsLoading(true);
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsLoading(false);
        // Here you would typically handle the actual sign up
      }
    }, 200);
  };

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <LanguageSelector />
      
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{t.signUp.title}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t.signUp.email}</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="user@gmail.com"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t.signUp.password}</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[globalStyles.input, styles.passwordInput]}
            placeholder={t.signUp.passwordPlaceholder}
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#666"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t.signUp.confirmPassword}</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[globalStyles.input, styles.passwordInput]}
            placeholder={t.signUp.confirmPasswordPlaceholder}
            placeholderTextColor="#666"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
          />
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#666"
            />
          </Pressable>
        </View>
      </View>

      <TouchableOpacity
        disabled={!password.trim() || !email.trim() || !confirmPassword.trim() || isLoading}
        style={[
          styles.signUpButton,
          (!password.trim() || !email.trim() || !confirmPassword.trim() || isLoading) && globalStyles.buttonDisabled,
        ]}
        onPress={handleSignUp}
      >
        <Text style={styles.signUpButtonText}>{t.signUp.createAccount}</Text>
      </TouchableOpacity>

      {isLoading && (
        <View style={styles.statusPanel}>
          <Text style={styles.statusText}>Downloading {loadingProgress.toFixed(2)}%</Text>
        </View>
      )}

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>{t.signUp.haveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.loginButton}>{t.signUp.login}</Text>
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
    marginTop: 30,
    marginBottom: 8,
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
  signUpButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  signUpButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#666",
    fontSize: 16,
  },
  loginButton: {
    color: "#2ca464",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  statusPanel: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  statusText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
