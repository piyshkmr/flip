import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../utilities/constants";

const Highlight = ({ highlight }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.cardBg}
        resizeMode="cover"
        source={require("../assets/highlightBg.png")}
      >
        <Text style={styles.text}>
          <MaterialIcons name="format-quote" size={24} />
          {highlight.text}
          <MaterialIcons name="format-quote" size={24} />
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Highlight;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    lineHeight: 32,
    color: colors.text,
    fontWeight: "bold",
    position: "absolute",
    top: 140,
    paddingHorizontal: 24,
  },
  card: {
    padding: 14,
    paddingTop: 0,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
