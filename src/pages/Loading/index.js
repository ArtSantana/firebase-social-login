import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import * as firebase from 'firebase';

export default function Loading(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? "Home" : "ForgotPassword");
    })
  }, [])

  return (
    <View style={styles.content}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  )
}