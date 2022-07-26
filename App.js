import React from 'react';
import {NativeModules, View, Text, TouchableOpacity} from 'react-native';

const Notifications = () => {
  const {ToastExample} = NativeModules;

  const showToast = () => {
    console.log(NativeModules);
    ToastExample.show('ini adalah toast', 3000);
  };

  const showNotif = () => {
    console.log('Show notif');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Kotlin/React Native Native Module</Text>

      <View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: 200,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 30,
          }}
          onPress={showToast}>
          <Text>Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: 200,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 30,
          }}
          onPress={showNotif}>
          <Text>Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;
