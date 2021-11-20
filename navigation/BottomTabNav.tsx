import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import UploadBookScreen from '../screens/UploadBookScreen';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor:'black', tabBarInactiveTintColor: 'black', tabBarActiveBackgroundColor: '#7ECA9C', tabBarInactiveBackgroundColor: '#7ECA9C' }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'HOME',
          tabBarIcon: () => <TabBarIcon name="home-circle-outline" />
        })}
      />
      <BottomTab.Screen
        name='Upload'
        component={UploadBookScreen}
        options={({ navigation }: RootTabScreenProps<'Upload'>) => ({
          tabBarIcon: () => <TabBarIcon name="book"   />
        })}
      />
       <BottomTab.Screen
      name='Profile'
      component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          tabBarIcon: () => <TabBarIcon name="account-circle" />
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

  return <MaterialCommunityIcons size={24} onPress={() => navigation.navigate("Main")} style={{ marginBottom: -3, color: "black" }} {...props} />;
}