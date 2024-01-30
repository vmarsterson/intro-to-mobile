import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function ProductsScreen() {
  return (
    <View>
      <Text>We go again</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  console.log("Home Screen");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightpink",
      }}
    >
      <Text>Testing Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("ProductsScreen")}
      />
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
