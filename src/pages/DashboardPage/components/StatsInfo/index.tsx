import {color, font} from '@dinero/theme';
import React from 'react';
import {Image, Text, View} from 'react-native';

type Props = {
  icon: any;
  label: string;
  amount: string;
  bgColor: string;
};

const StatsInfo: React.FC<Props> = ({label, icon, amount, bgColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: bgColor,
        padding: 16,
        borderRadius: 28,
        width: 164,
      }}>
      <View
        style={{
          padding: 8,
          backgroundColor: '#FCFCFC',
          borderRadius: 16,
        }}>
        <Image source={icon} style={{height: 32, width: 32}} />
      </View>
      <View style={{marginLeft: 8}}>
        <Text style={{...font(14, 'medium'), color: 'white'}}>{label}</Text>
        <Text
          style={{
            ...font(22, 'semi-bold'),
            color: 'white',
            marginTop: 4,
          }}>
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default StatsInfo;
