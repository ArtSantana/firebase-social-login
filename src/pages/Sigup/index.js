import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';
import * as Google from "expo-google-app-auth";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  async function signInWithGoogleAsync() {    
    try {
      const result = await Google.logInAsync({
        androidClientId: "176165717514-nfnp40je1rj3qjq6eelvs4lc3ob8q5gj.apps.googleusercontent.com",
        iosClientId: "176165717514-jj8jnh6paa3b1t1me2m90c1dqkb2c988.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if(result.type === 'success') {
        setLoggedIn(true);        
      }
      else{
        console.log("cancelled");
      }
    }
    catch(e) {
      console.log(e);
    };
  }

  return (
    <View style={styles.content}>
      <Button 
        onPress={signInWithGoogleAsync} 
        title="Sign In With Google"/>
    </View>
  )
}