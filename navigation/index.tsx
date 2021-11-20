/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, ColorSchemeName, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RootStackParamList } from '../types';

import BottomTabNavigator from './BottomTabNav';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginRegister from '../screens/LoginRegisterScreen';
import UploadBookScreen from '../screens/UploadBookScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RecommendedScreen from '../screens/RecommendedScreen';
import BookSelectedScreen from '../screens/BookSelectedScreen';
import BookUploadedScreen from '../screens/BookUploadedScreen';

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
        headerLeft: () => <Image source={require('../assets/images/adaptive-icon.png')} style={{ marginRight: 15, width: 50, height: 50 }} />,
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
        headerLeft: () => <Image
          source={require('../assets/images/adaptive-icon.png')}
          style={{ marginRight: 15, width: 50, height: 50 }}
        />,
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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
      <Stack.Screen name="SearchResults" component={SearchResultScreen} options={{
        title: "Nombre del Libro",
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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
      <Stack.Screen name="BookDetail" component={BookSelectedScreen} options={{
        title: "Nombre del Libro",
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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
      <Stack.Screen name="Upload" component={UploadBookScreen} options={{
        title: 'Subir Libro',
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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
      <Stack.Screen name="UploadedBook" component={BookUploadedScreen} options={{
        title: 'Nombre del Libro',
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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
      <Stack.Screen name="Recommended" component={RecommendedScreen} options={{
        title: 'Recomendados',
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
            <Icons name="notification" />
            <Icons name="share" />
          </View>),
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

function Icons(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
}) {
  return <Entypo size={24} onPress={() => Alert.alert("Share Button")} style={{ marginLeft: 15, color: "black" }} {...props} />;
};


