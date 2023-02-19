import React, {useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '@dinero/components/Button';
import DineroInput from '@dinero/components/DeniroInput';
import Header from '@dinero/components/Header';
import {Navigation} from '@dinero/navigation/utils';
import {color, font} from '@dinero/theme';
import {Transaction, TransactionType} from '@dinero/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '@dinero/constants';

type Props = {};

const TrnDetailPage: React.FC<Props> = ({}) => {
  const [trnType, setTrnType] = React.useState<TransactionType>('expense');
  const [trnAmount, setTrnAmount] = React.useState<string>('');
  const [trnDesc, setTrnDesc] = React.useState<string>('');
  const [trnCat, setTrnCat] = React.useState<string>('');

  const saveTrn = async () => {
    try {
      if (!(trnAmount && trnDesc && trnCat)) {
        return Alert.alert('', 'Please input all the fields');
      }

      const transactions = await AsyncStorage.getItem(
        STORAGE_KEYS.TRANSACTIONS,
      );

      let records = JSON.parse(transactions || '{}');

      const data = {
        id: Date.now(),
        timestamp: Date.now(),
        description: '',
        category: '',
        amount: '',
        type: trnType,
      } as Transaction;

      records[data.id] = data;

      await AsyncStorage.setItem(
        STORAGE_KEYS.TRANSACTIONS,
        JSON.stringify(records),
      );

      Navigation.pop();
    } catch (error) {
      console.error(error);
      Alert.alert('', 'Something wrong. Please try again.');
    }
  };

  const triggerTrnType = () => {
    setTrnType(p => {
      if (p === 'expense') {
        return 'income';
      }

      return 'expense';
    });
  };

  const amountChangeHandler = (t: string) => {
    // console.log(t);
    // const paddedStr = t.replace('.', '').padStart(3, '0');

    // const decimalAmt = `${paddedStr.slice(0, -2)}.${paddedStr.slice(-2)}`;

    setTrnAmount(t);
  };

  const bgColor = useMemo(() => {
    if (trnType == 'expense') {
      return color.red;
    }

    return color.green;
  }, [trnType]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {backgroundColor: bgColor}]}>
      <Header
        centerItem={
          <Text
            style={{
              ...font(18, 'semi-bold'),
              textAlign: 'center',
              color: 'white',
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
            onPress={triggerTrnType}>
            {trnType}
          </Text>
        }
      />
      <View style={{flex: 1}} />
      <View style={{paddingHorizontal: 16}}>
        <Text style={{...font(18, 'semi-bold'), color: color.gray64}}>
          How much?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...font(64, 'semi-bold'), color: 'white'}}>$</Text>
          <TextInput
            value={trnAmount}
            caretHidden={true}
            style={{...font(64, 'semi-bold'), color: 'white'}}
            placeholder={'0.00'}
            onChangeText={amountChangeHandler}
            keyboardType={'decimal-pad'}
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
            <DineroInput
              placeholder={'Description'}
              value={trnDesc}
              onChangeText={setTrnDesc}
            />
            <View style={{height: 16}} />
            <DineroInput
              placeholder={'Category'}
              value={trnCat}
              onChangeText={setTrnCat}
            />
          </View>
          <Button label={'Save'} onPress={saveTrn} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrnDetailPage;
