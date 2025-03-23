import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/dev";

import HomeScreen from "./src/screens/HomeScreen";
import JobScreen from "./src/screens/JobScreen";

// Prevent auto-hiding of splash screen
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate a loading process (adjust if needed)
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#356CDF" }}
        edges={["left", "right", "bottom"]}
      >
        <StatusBar backgroundColor="#356CDF" style="light" />

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Job"} component={JobScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
