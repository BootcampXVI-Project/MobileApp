import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screen/LoginScreen";
import HomeScreen from "../../screen/HomeScreen";
import { MyTabs } from "../tabs";
import DetailProductScreen from "../../screen/DetailProductScreen";
import MapScreen from "../../screen/MapScreen";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParam } from "../props";
import CanvasScreen from "../../screen/CanvasScreen";

const Stack = createNativeStackNavigator();
export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        /> */}
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        <Stack.Screen
          name="DetailProductScreen"
          // options={{ headerShown: false }}
          component={DetailProductScreen}
        />
        <Stack.Screen
          name="MapScreen"
          options={{ headerShown: false }}
          component={MapScreen}
        />
        <Stack.Screen
          name="CanvasScreen"
          options={{ headerShown: false }}
          component={CanvasScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
