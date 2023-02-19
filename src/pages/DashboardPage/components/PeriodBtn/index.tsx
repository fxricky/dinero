import {color, font} from '@dinero/theme';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  label: string;
  focused: boolean;
  pressAction: (label: string) => any;
};

const PeriodBtn: React.FC<Props> = ({label, focused = false, pressAction}) => {
  return (
    <Pressable
      style={[styles.container, focused && styles.containerFocused]}
      onPress={() => pressAction(label)}>
      <Text style={[styles.lblTxt, focused && styles.lblTxtFocused]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 16,
  },
  containerFocused: {
    backgroundColor: '#FCEED4',
  },
  lblTxt: {
    ...font(14, 'medium'),
    color: color.lightGray,
    textAlign: 'center',
  },
  lblTxtFocused: {
    color: '#FCAC12',
  },
});

export default PeriodBtn;
