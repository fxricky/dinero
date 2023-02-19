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

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  const [recentTrnList, setRecentTrnList] = React.useState([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    isFocused && retrieveTransactions();
  }, [isFocused]);

  const retrieveTransactions = async () => {
    const result = await AsyncStorage.getItem(STORAGE_KEYS.TRANSACTIONS);

    const parsedRes = JSON.parse(result || '');

    setRecentTrnList(Object.values(parsedRes));
  };

  const calculateBalance = async () => {};

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
          $9400
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
            amount={'$5000'}
            bgColor={color.green}
          />
          <StatsInfo
            icon={ExpenseImg}
            label={'Expenses'}
            amount={'$7000'}
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
