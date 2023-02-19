import {color, font} from '@dinero/theme';
import {
  convertEmojiCodeToEmoji,
  extractEmojiCodeFrmString,
} from '@dinero/utils';
import React from 'react';
import {Text, View} from 'react-native';

type Props = {};

const TrnListItem: React.FC<Props> = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        backgroundColor: color.snow,
        borderRadius: 24,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 52,
          width: 52,
          borderWidth: 1,
          borderRadius: 16,
          borderColor: color.lightGray,
        }}>
        <Text style={{...font(24)}}>{convertEmojiCodeToEmoji(128512)}</Text>
      </View>
      <View
        style={{
          marginLeft: 9,
          justifyContent: 'space-between',
          paddingVertical: 6,
          flex: 1,
        }}>
        <Text style={{...font(16, 'medium')}}>Shopping</Text>
        <Text style={{...font(13, 'medium'), color: color.lightGray}}>
          Buy some grocery
        </Text>
      </View>
      <View
        style={{
          marginLeft: 9,
          justifyContent: 'space-between',
          paddingVertical: 6,
        }}>
        <Text style={{...font(16, 'semi-bold')}}>- $120</Text>
        <Text style={{...font(13, 'medium'), color: color.lightGray}}>
          10:00 AM
        </Text>
      </View>
    </View>
  );
};

export default TrnListItem;
