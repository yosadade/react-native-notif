import React from 'react';
import {Button} from 'native-base';
import {WIDTH} from '../../Constants';
import theme, {Box, Text} from '../theme';
import {NativeModules} from 'react-native';

/* Grab the native modules */

const Notifications = () => {
  const {ToastExample} = NativeModules;

  const showToast = () => {
    console.log(NativeModules);
    ToastExample.show('ini adalah toast', 3000);
  };
  return (
    <Box
      flex={1}
      backgroundColor="primary"
      justifyContent="center"
      alignItems="center">
      <Text variant="title1" color="white" fontSize={30} textAlign="center">
        Kotlin/React Native Toast
      </Text>

      <Box
        paddingHorizontal="m"
        height={90}
        marginTop="l"
        marginBottom="l"
        width={WIDTH * 0.75}>
        <Button
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: theme.colors.danger,
            borderRadius: 30,
          }}
          onPress={showToast}>
          <Text variant="title2" color="white" textTransform="uppercase">
            Trigger
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Notifications;
