import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Loading from './pages/Loading';
import Login from './pages/Login';
import Signup from './pages/Sigup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>        
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Signup" component={Signup}/>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Loading" component={Loading}/>
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}