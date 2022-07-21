import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notification from './Notification';

const NotificationStack = createStackNavigator();
export const NotificationNavigator = () => (
  <NotificationStack.Navigator initialRouteName="Notification">
    <NotificationStack.Screen
      name="Notification"
      component={Notification}
      options={{headerShown: false}}
    />
  </NotificationStack.Navigator>
);
