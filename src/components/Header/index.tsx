import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '@dinero/assets/icon/arrowLeft.png';
import {font} from '@dinero/theme';
import {Navigation as DineroNav} from '@dinero/navigation/utils';

type Props = {pageTitle?: string};

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;

const Header: React.FC<Props> = ({pageTitle}) => {
  const Navigation = useNavigation();

  const popPage = () => {
    console.log('popping');
    DineroNav.pop();
  };

  return (
    <>
      <View style={{height: STATUS_BAR_HEIGHT}} />
      <View style={{height: 64, padding: 16, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          {Navigation.canGoBack() ? (
            <Pressable style={{alignSelf: 'flex-start'}} onPress={popPage}>
              <Image source={ArrowLeft} style={{width: 32, height: 32}} />
            </Pressable>
          ) : null}
        </View>
        <View style={{flex: 1}}>
          <Text style={{...font(18, 'semi-bold')}} numberOfLines={1}>
            {pageTitle}
          </Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </>
  );
};

export default Header;
