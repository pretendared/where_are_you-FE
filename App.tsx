import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from "react-native-paper";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as Font from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';

import { CustomSplashScreen } from './src/screens/starts/CustomSplashScreen';
import { RootStack } from './src/navigations/RootStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'Pretendard-Variable': require('./src/assets/fonts/pretendard/PretendardVarable.ttf'),
        });

      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
        setShowCustomSplash(false);
        setAppIsReady(true);

        // 안드로이드 하단 내비바 투명하게, 버튼 흰색으로
        NavigationBar.setBackgroundColorAsync('#00000000'); 
        NavigationBar.setButtonStyleAsync('dark');
      }
    }
    prepare();
  }, []); 

  // 커스텀 스플래시 페이지
  if (showCustomSplash) {
    return (
      <View style={{ flex: 1 }}>
        <CustomSplashScreen />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
