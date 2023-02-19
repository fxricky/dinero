import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, font} from '@dinero/theme';
import {Transaction} from '@dinero/types';
import {convertEmojiCodeToEmoji} from '@dinero/utils';
import dayjs from 'dayjs';
import {EXPENSE_CATEGORIES, INCOME_CATEGORIES} from '@dinero/constants';

type Props = {data: Transaction};

const TrnListItem: React.FC<Props> = ({data}) => {
  const isExpense = data.type === 'expense';

  const categories = isExpense ? EXPENSE_CATEGORIES : INCOME_CATEGORIES;

  return (
    <View style={styles.container}>
      <View style={styles.catContainer}>
        <Text style={{...font(24)}}>
          {convertEmojiCodeToEmoji(categories[data.category]?.icon || 0)}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 9,
          justifyContent: 'space-between',
          paddingVertical: 6,
          flex: 1,
        }}>
        <Text style={{...font(16, 'medium')}}>Shopping</Text>
        <Text style={{...font(13, 'medium'), color: color.lightGray}}>
          {data.description}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 9,
          justifyContent: 'space-between',
          paddingVertical: 6,
        }}>
        <Text
          style={isExpense ? styles.expenseAmtTxt : styles.incomeAmtTxt}>{`${
          isExpense ? `-` : '+'
        } $${data.amount || 0}`}</Text>
        <Text style={{...font(13, 'medium'), color: color.lightGray}}>
          {dayjs(data.timestamp).format('YYYY-MM-DD')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: color.snow,
    borderRadius: 24,
  },
  catContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    width: 52,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.lightGray,
  },
  expenseAmtTxt: {...font(16, 'semi-bold'), color: color.red},
  incomeAmtTxt: {...font(16, 'semi-bold'), color: color.green},
});

export default TrnListItem;
