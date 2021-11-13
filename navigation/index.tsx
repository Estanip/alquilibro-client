/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from 'react';
import BottomTabNavigator from './BottomTabNav';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, ColorSchemeName, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginRegister from '../screens/LoginRegisterScreen';
import UploadBookScreen from '../screens/UploadBookScreen';

import { RootStackParamList } from '../types';
import { Image } from 'react-native-elements/dist/image/Image';

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
        headerLeft: () => <Image source={require('../assets/images/adaptive-icon.png')} style={{marginBottom: -1, marginRight: 10, width: 50, height: 50}} />,
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
        headerLeft: () => <Image source={require('../assets/images/adaptive-icon.png')} style={{marginBottom: -1, marginRight: 10, width: 50, height: 50}} />,
        headerRight: () => <ShareIcon name="share"  />,
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
      <Stack.Screen name="Upload" component={UploadBookScreen} options={{
        title: 'Subir Libro',
        headerRight: () => <ShareIcon name="share" />,
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
      }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>

  );
}


 // * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

 function ShareIcon(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
}) {
  return <Entypo size={24} onPress={() => Alert.alert("Share Button")}  style={{ marginBottom: -3, color: "black" }} {...props} />;
}


function NotiIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
}) {
  return <Ionicons size={24} onPress={() => Alert.alert("Noti Button")}  style={{ marginBottom: -3, color: "black" }} {...props} />;
}
