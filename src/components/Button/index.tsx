import {color, font} from '@dinero/theme';
import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

type Props = PressableProps & {label: string};

const Button: React.FC<Props> = ({label, ...props}) => {
  return (
    <Pressable
      style={{
        backgroundColor: color.violet,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
      }}
      {...props}>
      <Text style={{...font(18, 'semi-bold'), color: 'white'}}>{label}</Text>
    </Pressable>
  );
};

export default Button;
