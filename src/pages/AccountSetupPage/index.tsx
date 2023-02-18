import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PAGE_NAME} from '../../navigation/constants';
import {Navigation} from '../../navigation/utils';
import {color, font} from '../../theme';

type Props = {};

const AccountSetupPage: React.FC<Props> = ({}) => {
  const gotoEditAccount = () => {
    Navigation.push(PAGE_NAME.EDIT_ACCOUNT_PAGE);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTxt}>Let's setup your account!</Text>
        <Text style={styles.subtitleTxt}>
          Account can be your bank, credit card or your wallet.
        </Text>
      </View>
      <Pressable style={styles.letsGoBtn} onPress={gotoEditAccount}>
        <Text style={styles.btnTxt}>Let's go</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  titleTxt: {
    ...font(36, 'medium'),
    marginTop: 67,
  },
  subtitleTxt: {
    fontSize: 14,
    marginTop: 37,
  },
  letsGoBtn: {
    width: '100%',
    backgroundColor: color.violet,
    paddingVertical: 17,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  btnTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AccountSetupPage;
