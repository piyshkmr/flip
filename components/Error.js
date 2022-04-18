import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../utilities/constants";

const Error = ({ text, iconName }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} size={45} color="white" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
  },
  text: {
    color: "white",
    marginTop: 14,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
