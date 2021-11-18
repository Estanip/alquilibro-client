import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { Alert, Pressable } from 'react-native';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

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
      
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}) {
  return <MaterialCommunityIcons size={24} onPress={() => Alert.alert("Home Button")}  style={{ marginBottom: -3, color: "black" }} {...props} />;
}