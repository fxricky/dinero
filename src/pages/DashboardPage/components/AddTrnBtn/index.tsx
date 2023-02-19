import React from 'react';
import {Image, Pressable, View} from 'react-native';
import PlusIcon from '@dinero/assets/icon/plus.png';
import {color} from '@dinero/theme';
import {Navigation} from '@dinero/navigation/utils';
import {PAGE_NAME} from '@dinero/navigation/constants';

type Props = {};

const AddTrnBtn: React.FC<Props> = ({}) => {
  const gotoTrnDetailPage = () => {
    Navigation.push(PAGE_NAME.TRN_DETAIL_PAGE);
  };

  return (
    <Pressable
      style={{
        width: 56,
        height: 56,
        backgroundColor: color.violet,
        borderRadius: 56 / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={gotoTrnDetailPage}>
      <Image source={PlusIcon} style={{width: 18, height: 18}} />
    </Pressable>
  );
};

export default AddTrnBtn;
