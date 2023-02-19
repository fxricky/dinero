import {color} from '@dinero/theme';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

type Props = TextInputProps & {};

const DineroInput: React.FC<Props> = ({...props}) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: color.superLightGray,
        height: 56,
      }}
    />
  );
};

export default DineroInput;
