import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Login() {
  return (
    <View style={styles.content}>
      <Text style={styles.welcomeText}>Bem vindo</Text>
    </View>
  )
}