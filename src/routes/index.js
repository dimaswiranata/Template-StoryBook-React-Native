import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GetStarted, Launch, SignIn } from '../Screen';
import Storybook from '../../storybook';


import { navigationRef } from '../utils/navigation.utils';

const Stack = createStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Storybook"
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen
        name="Storybook"
        component={Storybook}
      />
      <Stack.Screen
        name="Launch"
        component={Launch}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRouter />
    </NavigationContainer>
  );
};