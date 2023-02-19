import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PAGE_NAME} from './constants';
import SplashPage from '../pages/SplashPage';
import AccountSetupPage from '../pages/AccountSetupPage';
import EditAccountPage from '../pages/EditAccountPage';
import SuccessPage from '@dinero/pages/SuccessPage';
import DashboardPage from '@dinero/pages/DashboardPage';
import TrnDetailPage from '@dinero/pages/TrnDetailPage';

type Props = {};

const Stack = createNativeStackNavigator();

const NavigationRoot: React.FC<Props> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PAGE_NAME.SPLASH_PAGE} component={SplashPage} />
      <Stack.Screen
        name={PAGE_NAME.ACCOUNT_SETUP_PAGE}
        component={AccountSetupPage}
      />
      <Stack.Screen
        name={PAGE_NAME.EDIT_ACCOUNT_PAGE}
        component={EditAccountPage}
      />
      <Stack.Screen name={PAGE_NAME.SUCCESS_PAGE} component={SuccessPage} />
      <Stack.Screen name={PAGE_NAME.DASHBOARD_PAGE} component={DashboardPage} />
      <Stack.Screen
        name={PAGE_NAME.TRN_DETAIL_PAGE}
        component={TrnDetailPage}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
