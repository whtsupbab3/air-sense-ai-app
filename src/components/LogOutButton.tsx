import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "store/slices/userSlice";
import globalStyles from "styles/GlobalStyles";

export default function LogOutButton() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={globalStyles.text}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
  },
});
