import React from 'react';
import {NativeModules, View, Text, TouchableOpacity} from 'react-native';

const Notifications = () => {
  const {ToastExample} = NativeModules;

  const showToast = () => {
    console.log(NativeModules);
    ToastExample.show('ini adalah toast', 3000);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'primary',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Kotlin/React Native Toast</Text>

      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 30,
          }}
          onPress={showToast}>
          <Text>Trigger</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;
