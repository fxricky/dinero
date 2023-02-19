import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PAGE_NAME} from '../../navigation/constants';
import {Navigation} from '../../navigation/utils';
import {color} from '../../theme';

type Props = {};

const SplashPage: React.FC<Props> = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      Navigation.replace(PAGE_NAME.ACCOUNT_SETUP_PAGE);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.appNameTxt}>Dinero</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.violet,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameTxt: {
    color: 'white',
    fontSize: 56,
    fontWeight: 'bold',
  },
});

export default SplashPage;
