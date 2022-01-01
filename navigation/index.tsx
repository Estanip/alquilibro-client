// IMPORTAR LIBRERIAS & UTILS
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import Toast from 'react-native-toast-message'

// IMPORTAR BOTTOM NAVIGATOR
import BottomTabNavigator from './BottomTabNav';

// IMPORTAR SCREENS
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SearchResultScreen from '../screens/Search/SearchResultScreen';
import RecommendedScreen from '../screens/Recommended/RecommendedScreen';
import SelectedBookScreen from '../screens/Search/SelectedBookScreen';
import UploadedBookScreen from '../screens/UploadBook/UploadedBookScreen';
import UploadBookScreen from '../screens/UploadBook/UploadBookScreen';
import AdvancedFilterScreen from '../screens/FilterSearch/AdvancedFilterScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast
        position='top'
        topOffset={120}
        visibilityTime={3000}
      />
    </>
  );
}

/* A root stack navigator is often used for displaying modals on top of all other content. https://reactnavigation.org/docs/modal */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  // TOP NAVBAR
  const navBar = {
    headerLeft: () => <Image source={require('../assets/images/adaptive-icon.png')} style={{ marginRight: 15, width: 50, height: 50 }} />,
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
  }

  // STACK DE NAVEGACION
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ ...navBar, title: "Alquilibro", headerRight: undefined }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ ...navBar, title: "Alquilibro", headerRight: undefined }} />
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ ...navBar, title: "Alquilibro" }} />
      <Stack.Screen name="SearchResults" component={SearchResultScreen} options={{ ...navBar, title: "Titulo del Libro", headerLeft: undefined }} />
      <Stack.Screen name="AdvancedFilter" component={AdvancedFilterScreen} options={{ ...navBar, title: "Busqueda Avanzada", headerLeft: undefined }} />
      <Stack.Screen name="BookDetail" component={SelectedBookScreen} options={{ ...navBar, title: "Titulo del Libro", headerLeft: undefined }} />
      <Stack.Screen name="Upload" component={UploadBookScreen} options={{ ...navBar, title: "Subir Libro", headerLeft: undefined }} />
      <Stack.Screen name="UploadedBook" component={UploadedBookScreen} options={{ ...navBar, title: "Titulo del Libro", headerLeft: undefined }} />
      <Stack.Screen name="Recommended" component={RecommendedScreen} options={{ ...navBar, title: "Recomendados", headerLeft: undefined }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>

  );
}

// ICONOS
function Icons(props: { name: React.ComponentProps<typeof Entypo>["name"] }) {
  return (
    <Entypo
      size={24}
      onPress={() => Alert.alert("Share Button")}
      style={{ marginLeft: 15, color: "black" }}
      {...props}
    />
  );
};
