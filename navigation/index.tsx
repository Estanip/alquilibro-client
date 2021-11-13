/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from 'react';
import BottomTabNavigator from './BottomTabNav';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginRegister from '../screens/LoginRegisterScreen';
import UploadBookScreen from '../screens/UploadBookScreen';

import { RootStackParamList } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginRegister} options={{
        title: 'Alquilibro',
        headerStyle: {
            backgroundColor: '#7ECA9C'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1C1427'
        }
      }} />
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{
        title: 'Alquilibro',
        headerStyle: {
            backgroundColor: '#7ECA9C'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1C1427'
        }
      }} />
      <Stack.Screen name="Upload" component={UploadBookScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>

  );
}
