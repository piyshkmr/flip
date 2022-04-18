import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "./screens/HomeScreen";
import HighlightScreen from "./screens/HighlightScreen";

import { colors } from "./utilities/constants";

// creating stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const defaultNavigationOptions = {
    title: "Flip",
    animation: "slide_from_bottom",
    headerShadowVisible: false,
    headerTintColor: colors.text,
    headerStyle: { backgroundColor: colors.bg },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>
        {/* home  */}
        <Stack.Screen name="home" component={HomeScreen} />
        {/* highlight  */}
        <Stack.Screen
          name="highlight"
          component={HighlightScreen}
          options={{ headerBackVisible: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
