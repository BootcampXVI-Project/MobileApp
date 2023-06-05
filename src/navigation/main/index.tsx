import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screen/LoginScreen";
import { TabsDistributor, TabsRetailer } from "../tabs";
import DetailProductScreen from "../../screen/distributor/DetailProductScreen";
import MapScreen from "../../screen/distributor/MapScreen";
import CanvasScreen from "../../screen/distributor/CanvasScreen";
import { useSelector } from "react-redux";
import CartScreen from "../../screen/retailer/CartScreen";
import OrderDetailScreen from "../../screen/retailer/OrderDetailScreen";
import ProductScreen from "../../screen/retailer/ProductScreen";

const Stack = createNativeStackNavigator();

export function App() {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        {user?.role === "distributor" ? (
          <Stack.Screen
            name="MainDistributor"
            options={{ headerShown: false, gestureEnabled: false }}
            component={TabsDistributor}
          />
        ) : user?.role === "retailer" ? (
          <Stack.Screen
            name="MainRetailer"
            options={{ headerShown: false, gestureEnabled: false }}
            component={TabsRetailer}
          />
        ) : null}
        <Stack.Screen
          name="DetailProductScreen"
          // options={{ headerShown: false }}
          component={DetailProductScreen}
        />
        <Stack.Screen
          name="OrderDetailScreen"
          // options={{ headerShown: false }}
          component={OrderDetailScreen}
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
        <Stack.Screen
          name="CartScreen"
          // options={{ headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          name="ProductScreen"
          // options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
