import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const replace = (pageName: string, pageData?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(pageName, pageData));
  }
};

const push = (pageName: string, pageData?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(pageName, pageData));
  }
};

export const Navigation = {
  replace,
  push,
};
