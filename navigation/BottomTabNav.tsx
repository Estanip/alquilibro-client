// IMPORTAR LIBRERIAS & UTILS
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../types';

// IMPORTAR SCREENS
import HomeScreen from '../screens/Home/HomeScreen';
import UploadBookScreen from '../screens/UploadBook/UploadBookScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

// A bottom tab navigator displays tab buttons on the bottom of the display to switch screens. https://reactnavigation.org/docs/bottom-tab-navigator

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {

  // BOTTOM NAVIGATOR
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'black', tabBarActiveBackgroundColor: '#7ECA9C', tabBarInactiveBackgroundColor: '#7ECA9C' }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={({ }: RootTabScreenProps<'Home'>) => ({
          title: 'HOME',
          tabBarIcon: () => <TabBarIcon name="home-circle-outline" />
        })}
      />
      <BottomTab.Screen
        name='Upload'
        component={UploadBookScreen}
        options={({ }: RootTabScreenProps<'Upload'>) => ({
          tabBarIcon: () => <TabBarIcon name="book" />
        })}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ }: RootTabScreenProps<'Profile'>) => ({
          tabBarIcon: () => <TabBarIcon name="account-circle" />
        })}
      />
    </BottomTab.Navigator>
  );
}

// ICONS
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}) {
  return <MaterialCommunityIcons size={24} style={{ marginBottom: -3, color: "black" }} {...props} />;
}