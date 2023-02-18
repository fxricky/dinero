import React from 'react';
import NavigationRoot from './navigation';
import {navigationRef} from './navigation/utils';
import {NavigationContainer} from '@react-navigation/native';

type Props = {};

const AppRoot: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationRoot />
    </NavigationContainer>
  );
};

export default AppRoot;
