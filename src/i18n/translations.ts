interface SignUpTranslations {
  title: string;
  name: string;
  email: string;
  password: string;
  createAccount: string;
  creatingAccount: string;
  haveAccount: string;
  login: string;
  passwordPlaceholder: string;
  fillAllFields: string;
  registrationFailed: string;
}

interface SignInTranslations {
  title: string;
  email: string;
  password: string;
  forgotPassword: string;
  login: string;
  loggingIn: string;
  noAccount: string;
  register: string;
  passwordPlaceholder: string;
  fillAllFields: string;
  loginFailed: string;
  creatingAccount: string;
}

interface ForgotPasswordTranslations {
  title: string;
  description: string;
  email: string;
  send: string;
  backToLogin: string;
}

interface ErrorTranslations {
  resetEmailSent: string;
  emailRequired: string;
  emailInvalid: string;
}

interface LoadingTranslations {
  text: string;
}

interface Translations {
  signUp: SignUpTranslations;
  signIn: SignInTranslations;
  forgotPassword: ForgotPasswordTranslations;
  loading: LoadingTranslations;
  errors: ErrorTranslations;
}

export const translations: Record<'en' | 'ua', Translations> = {
  en: {
    signIn: {
      title: "Log in",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot Password?",
      login: "Login",
      loggingIn: "Logging in...",
      noAccount: "Don't have an account?",
      register: "Register",
      passwordPlaceholder: "Your password",
      fillAllFields: "Please fill in all fields",
      loginFailed: "Login failed. Please check your credentials and try again.",
      creatingAccount: "Creating Account..."
    },
    signUp: {
      title: "Create Account",
      name: "Name",
      email: "Email",
      password: "Password",
      createAccount: "Create Account",
      haveAccount: "Already have an account?",
      login: "Log in",
      passwordPlaceholder: "Your password",
      fillAllFields: "Please fill in all fields",
      registrationFailed: "Registration failed. Please try again.",
      creatingAccount: "Creating Account..."
    },
    forgotPassword: {
      title: "Reset Password",
      description:
        "Enter your email address and we'll send you instructions to reset your password.",
      email: "Email",
      send: "Send Reset Instructions",
      backToLogin: "Back to Login",
    },
    loading: {
      text: "Loading..."
    },
    errors: {
      resetEmailSent: "Password reset instructions have been sent to your email",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address"
    },
  },
  ua: {
    signIn: {
      title: "Увійти",
      email: "Електронна пошта",
      password: "Пароль",
      forgotPassword: "Забули пароль?",
      login: "Увійти",
      loggingIn: "Вхід...",
      noAccount: "Немає облікового запису?",
      register: "Зареєструватися",
      passwordPlaceholder: "Ваш пароль",
      fillAllFields: "Будь ласка, заповніть всі поля",
      loginFailed: "Помилка входу. Перевірте ваші дані та спробуйте ще раз.",
      creatingAccount: "Створення облікового запису..."
    },
    signUp: {
      title: "Створити обліковий запис",
      name: "Ім'я",
      email: "Електронна пошта",
      password: "Пароль",
      createAccount: "Створити обліковий запис",
      haveAccount: "Вже маєте обліковий запис?",
      login: "Увійти",
      passwordPlaceholder: "Ваш пароль",
      fillAllFields: "Будь ласка, заповніть всі поля",
      registrationFailed: "Реєстрація не вдалася. Будь ласка, спробуйте ще раз.",
      creatingAccount: "Створення облікового запису..."
    },
    forgotPassword: {
      title: "Скинути пароль",
      description:
        "Введіть вашу електронну пошту і ми надішлемо інструкції для скидання пароля.",
      email: "Електронна пошта",
      send: "Надіслати інструкції",
      backToLogin: "Повернутися до входу",
    },
    loading: {
      text: "Завантаження..."
    },
    errors: {
      resetEmailSent: "Інструкції щодо скидання пароля надіслано на вашу електронну пошту",
      emailRequired: "Електронна пошта обов'язкова",
      emailInvalid: "Будь ласка, введіть дійсну електронну адресу"
    },
  }
};
