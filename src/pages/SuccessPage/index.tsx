import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import SuccessImg from '@dinero/assets/images/success.png';
import {font} from '@dinero/theme';
import {Navigation} from '@dinero/navigation/utils';
import {PAGE_NAME} from '@dinero/navigation/constants';

type Props = {};

const SuccessPage: React.FC<Props> = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      Navigation.replace(PAGE_NAME.DASHBOARD_PAGE);
    }, 1000);
  }, []);

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
