import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';

import { Groups } from 'Screens/Groups';
import { NewGroup } from 'Screens/NewGroup';

import theme from 'theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar backgroundColor='transparent' style='light' />
        <NewGroup />
      </View>
    </ThemeProvider>
  );
}
