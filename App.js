import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

/* Notification Navigator */
import {NotificationNavigator} from './src/components/Notification';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator
            headerMode="none"
            initialRouteName="NotificationApp">
            <AppStack.Screen
              name="NotificationApp"
              component={NotificationNavigator}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
