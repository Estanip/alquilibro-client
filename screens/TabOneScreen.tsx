import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import NavBar from '../components/NavBar';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const onPressFunction = ()=> {
       navigation.replace('Login')
    }
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
      <Text style={styles.title}>Tab One</Text>
      <Pressable onPress={onPressFunction}>
                 <Text>LOGIN  | REGISTER</Text>
      </Pressable>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
