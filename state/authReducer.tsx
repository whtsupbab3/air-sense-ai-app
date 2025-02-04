export type State = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type Action =
  | { type: "RESTORE_TOKEN"; token: string | null }
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_OUT" };

export const initialState: State = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export function authReducer(prevState: State, action: Action): State {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
}
