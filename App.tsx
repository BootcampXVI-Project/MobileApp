import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./src/redux/store";
import { App as MainNavigation } from "./src/navigation/main";
import DetailProductScreen from "./src/screen/DetailProductScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import { firebaseConfig } from "./src/firebase/firebase";
// import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import useFonts from "./src/hooks/useFonts";
SplashScreen.preventAutoHideAsync();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
export default function App() {
  // console.log(firebaseConfig);
  const [IsReady, SetIsReady] = useState(false);

  // Return the View
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await useFonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        SetIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (IsReady) {
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
          <MainNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
