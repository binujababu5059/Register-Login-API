import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Register from './screens/Register';
import Home from './screens/Home'
import Password from './screens/Password';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}