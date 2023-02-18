import React from 'react';
import {Image, Text, View} from 'react-native';
import SuccessImg from '@dinero/assets/images/success.png';
import {font} from '@dinero/theme';

type Props = {};

const SuccessPage: React.FC<Props> = ({}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={SuccessImg}
        style={{width: 128, height: 128, marginBottom: 16}}
      />
      <Text style={{...font(24, 'medium')}}>You are set!</Text>
    </View>
  );
};

export default SuccessPage;
