import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import UploadBookScreen from '../screens/UploadBookScreen';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarActiveBackgroundColor: '#7ECA9C'}}
    >
      <BottomTab.Screen
      name='Home'
      component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: () => <TabBarIcon name="home-circle-outline" />
        })}
      />
      <BottomTab.Screen
      name='Upload'
      component={UploadBookScreen}
        options={({ navigation }: RootTabScreenProps<'Upload'>) => ({
          tabBarIcon: () => <TabBarIcon name="book" />
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}) {

  const navigation = useNavigation();

  return <MaterialCommunityIcons size={24} onPress={() => navigation.navigate("Main")}  style={{ marginBottom: -3, color: "black" }} {...props} />;
}