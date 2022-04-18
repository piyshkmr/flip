import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { colors } from "../utilities/constants";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="white" />
      <Text style={{ color: "white", marginTop: 14 }}>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
  },
});
