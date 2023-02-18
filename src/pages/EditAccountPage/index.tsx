import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '@dinero/components/Header';
import {color, font} from '@dinero/theme';
import DineroInput from '@dinero/components/DeniroInput';

type Props = {};

const EditAccountPage: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 1}} />
      <View style={{paddingHorizontal: 16}}>
        <Text style={{...font(18, 'semi-bold'), color: color.gray64}}>
          Balance
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...font(64, 'semi-bold'), color: 'white'}}>$</Text>
          <TextInput
            caretHidden={true}
            style={{...font(64, 'semi-bold'), color: 'white'}}
            placeholder={'00.00'}
          />
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            paddingBottom: 34,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            paddingHorizontal: 16,
          }}>
          <View style={{paddingVertical: 24}}>
            <DineroInput placeholder={'Name'} />
          </View>
          <Pressable
            style={{
              backgroundColor: color.violet,
              paddingVertical: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
            }}>
            <Text style={{...font(18, 'semi-bold'), color: 'white'}}>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.violet,
  },
});

export default EditAccountPage;
