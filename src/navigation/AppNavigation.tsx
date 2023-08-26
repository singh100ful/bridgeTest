import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RouteKeys} from './RouteKeys';
import {HomeScreen} from '../screens/HomeScreen';
import {SuccessScreen} from '../screens/SuccessScreen';

interface AppNavigationProps {}

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RouteKeys.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={RouteKeys.SuccessScreen}
          component={SuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
