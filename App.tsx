import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LandingScreen } from './src/screens/LandingScreen';
import { CustomSplashScreen } from './src/screens/CustomSplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { NicknameScreen } from './src/screens/NicknameScreen';
import { MainScreen } from './src/screens/MainScreen';
import { NotificationScreen } from './src/screens/NotificationScreen';
import { BoardInfoScreen } from './src/screens/BoardInfoScreen';
import { ProjectInfoScreen } from './src/screens/ProjectInfoScreen';
import * as NavigationBar from 'expo-navigation-bar';
import { CommentScreen } from './src/screens/CommmentScreen';
import { ScheduleDetailScreen } from './src/screens/ScheduleDetailScreen';
import { ProjectMemberScreen } from './src/screens/ProjectMemberScreen';


import * as Font from 'expo-font';
import { palette } from './src/styles/color';

const Stack = createNativeStackNavigator(); // 없으면 터짐
const Drawer = createDrawerNavigator();

SplashScreen.preventAutoHideAsync();


export default function App() {

  // const [FontsLoade] = Font.useFonts({
  //   'Pretendard-Variable': require('./assets/fonts/pretendard/ChosunCentennial_otf.otf'),
  // })

  const [appIsReady, setAppIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // 먼저 Expo 스플래시 숨기기
        await SplashScreen.preventAutoHideAsync(); // 자동으로 숨겨지지 않도록 설정

        await Font.loadAsync({
          'Pretendard-Variable': require('./src/assets/fonts/pretendard/PretendardVarable.ttf'),
        });
        // 실제로는 이런 작업들을 할 수 있음:
        // - 폰트 로딩: await Font.loadAsync({...})
        // - AsyncStorage에서 데이터 불러오기
        // - API 초기 호출
        // - 인증 상태 확인
        // 이제 커스텀 스플래시 보이면서 초기화 작업
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync(); // 자동으로 숨겨줌
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
      <View style={{flex: 1}}>
        <CustomSplashScreen/>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing"  component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login"  component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome"  component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Nickname" component={NicknameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false}}/>
        <Stack.Screen name="BoardInfo" component={BoardInfoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProjectInfo" component={ProjectInfoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Comment" component={CommentScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ScheduleDetail" component={ScheduleDetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProjectMember" component={ProjectMemberScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // 생기는 헤더 지우기
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: styles.MenuWrapper
      }}
    >
      <Drawer.Screen name="Login" component={LoginScreen}/>
      <Drawer.Screen name="BoardInfo" component={BoardInfoScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuWrapper: {
    backgroundColor: palette.white,
    width: 240,
  }
});
