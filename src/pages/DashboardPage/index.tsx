import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {color, font} from '@dinero/theme';
import {useIsFocused} from '@react-navigation/native';

import AddTrnBtn from './components/AddTrnBtn';
import IncomeImg from '@dinero/assets/images/income.png';
import ExpenseImg from '@dinero/assets/images/expense.png';
import StatsInfo from './components/StatsInfo';
import TrnListItem from './components/TrnListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '@dinero/constants';
import {Transaction} from '@dinero/types';

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  const [recentTrnList, setRecentTrnList] = React.useState<Transaction[]>([]);
  const [balanceStat, setBalanceStat] = React.useState({
    balance: 0,
    income: 0,
    expense: 0,
  });
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      retrieveTransactions();
      calculateBalance();
    }
  }, [isFocused]);

  const retrieveTransactions = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.TRANSACTIONS);

    const parsedRes = JSON.parse(result || '') as Record<string, Transaction>;

    setRecentTrnList(Object.values(parsedRes));
  };

  const calculateBalance = async () => {
    let totalBal = 0,
      inc = 0,
      exp = 0;

    for (const trn of recentTrnList) {
      if (trn.type === 'expense') {
        exp = +trn.amount;
        continue;
      }

      inc = +trn.amount;
    }

    totalBal = inc - exp;

    setBalanceStat({
      balance: totalBal,
      income: inc,
      expense: exp,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.statsSection}>
        <Text
          style={{
            ...font(14, 'medium'),
            color: color.lightGray,
            textAlign: 'center',
          }}>
          Account Balance
        </Text>
        <Text style={{...font(40, 'semi-bold'), textAlign: 'center'}}>
          {`$${balanceStat.balance}`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 27,
          }}>
          <StatsInfo
            icon={IncomeImg}
            label={'Income'}
            amount={`$${balanceStat.income}`}
            bgColor={color.green}
          />
          <StatsInfo
            icon={ExpenseImg}
            label={'Expenses'}
            amount={`$${balanceStat.expense}`}
            bgColor={color.red}
          />
        </View>
      </View>
      <View style={styles.recentTrnSectionHeader}>
        <Text style={{...font(18, 'semi-bold')}}>Recent Transaction</Text>

        <Pressable style={styles.seeAllBtn}>
          <Text style={styles.seeAllTxt}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={recentTrnList}
        renderItem={({item}) => {
          return <TrnListItem data={item} />;
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 8}} />}
      />

      <View style={{position: 'absolute', bottom: 32, right: 12}}>
        <AddTrnBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  seeAllBtn: {
    backgroundColor: color.violet20,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  seeAllTxt: {...font(14, 'medium'), color: color.violet},
  recentTrnSectionHeader: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsSection: {
    backgroundColor: color.lightOrange,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 64,
    paddingBottom: 23,
  },
});

export default DashboardPage;
