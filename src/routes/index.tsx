import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

type RoutesProps = {
  onReady?: (() => void) | undefined;
};

export const Routes = ({ onReady }: RoutesProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_600 }}>
      <NavigationContainer onReady={onReady}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
