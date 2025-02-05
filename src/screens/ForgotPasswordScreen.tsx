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
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from '../i18n/LanguageSelector';

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
  const { t } = useLanguage();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(email);
    if (!email.trim()) {
      setEmailError(t.errors.emailRequired);
    } else if (!emailRegex.test(email)) {
      setEmailError(t.errors.emailInvalid);
    } else {
      setEmailError("");
    }
  };

  const handleResetPassword = () => {
    validateEmail(email);
    
    if (!email.trim() || emailError) {
      return;
    }
    
    alert(t.errors.resetEmailSent);
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

      <Text style={[globalStyles.text, styles.title]}>{t.forgotPassword.title}</Text>

      <Text style={styles.description}>
        {t.forgotPassword.description}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[globalStyles.input, emailError ? styles.inputError : null]}
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
        style={[styles.resetButton, (emailError || !email.trim()) && globalStyles.buttonDisabled]}
        onPress={handleResetPassword}
        disabled={!!emailError || !email.trim()}
      >
        <Text style={styles.resetButtonText}>{t.forgotPassword.send}</Text>
      </TouchableOpacity>

      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.backButton}>{t.forgotPassword.backToLogin}</Text>
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
    marginBottom: 40,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
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
});
