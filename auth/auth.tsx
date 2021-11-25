import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button } from 'react-native';

// Initialize Firebase
initializeApp({
    apiKey: "AIzaSyDqnDUfAD7tmgb3CattcwaONPUtaJHpsm4",
    authDomain: "alquilibro-b9234.firebaseapp.com",
    projectId: "alquilibro-b9234",
    storageBucket: "alquilibro-b9234.appspot.com",
    messagingSenderId: "575892239646",
    appId: "1:575892239646:web:f4643b66ae1f3d4e95850f",
    measurementId: "G-49G4NCX1V6"
});

WebBrowser.maybeCompleteAuthSession();

export default function Auth() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '575892239646-gq8n6vcemj8si1mkmubbt0uhif5709gs.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}