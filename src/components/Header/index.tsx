import React from 'react';
import {Image, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '@dinero/assets/icon/arrowLeft.png';

type Props = {};

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;

const Header: React.FC<Props> = ({}) => {
  const Navigation = useNavigation();

  return (
    <>
      <View style={{height: STATUS_BAR_HEIGHT}} />
      <View style={{height: 64, padding: 16}}>
        <Image source={ArrowLeft} style={{width: 32, height: 32}} />
      </View>
    </>
  );
};

export default Header;
