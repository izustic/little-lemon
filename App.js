import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer"

import LittleLemonHeader from './app/components/LittleLemonHeader';
import LittleLemonFooter from './app/components/LittleLemonFooter';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MenuScreen from './app/screens/MenuScreen';
import ContactScreen from './app/screens/ContactScreen'
import LoginScreen from './app/screens/LoginScreen';
import SubscribeScreen from './app/screens/SubscribeScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <LittleLemonHeader />
        <Drawer.Navigator initialRouteName='Welcome'>
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Menu" component={MenuScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Subscribe" component={SubscribeScreen} />
        </Drawer.Navigator>
        {/* <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator> */}
      <LittleLemonFooter />
    </NavigationContainer>
  );
}
