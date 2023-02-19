import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {color, font} from '@dinero/theme';
import AddTrnBtn from './components/AddTrnBtn';
import IncomeImg from '@dinero/assets/images/income.png';
import ExpenseImg from '@dinero/assets/images/expense.png';
import StatsInfo from './components/StatsInfo';
import PeriodBtn from './components/PeriodBtn';
import TrnListItem from './components/TrnListItem';

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
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
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => {
          return <TrnListItem />;
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
