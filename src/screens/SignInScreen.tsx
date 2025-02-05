import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import globalStyles from "../styles/GlobalStyles";
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from '../i18n/LanguageSelector';

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
  const [error, setError] = useState("");
  const navigation = useNavigation<NavigationProp>();
  const { t } = useLanguage();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) return;

    alert("Password reset instructions have been sent to your email");
    navigation.navigate("SignIn");
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

      <Text style={styles.title}>{t.signIn.title}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t.signIn.email}</Text>
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
        <Text style={styles.label}>{t.signIn.password}</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[globalStyles.input, styles.passwordInput]}
            placeholder={t.signIn.passwordPlaceholder}
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

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={[globalStyles.text, styles.forgotPassword]}>
          {t.signIn.forgotPassword}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!password.trim() || !email.trim()}
        style={[
          styles.loginButton,
          (!password.trim() || !email.trim()) && globalStyles.buttonDisabled,
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>{t.signIn.login}</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>{t.signIn.noAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.registerButton}>{t.signIn.register}</Text>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
