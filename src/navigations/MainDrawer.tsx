// src/navigations/MainDrawer.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { palette } from '../styles/color';
import { MainStack } from './MainStack';
import { CustomDrawer } from '../components/drawers/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// 커스텀 Drawer 메뉴
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>메뉴</Text>
      </View>
      <DrawerItem
        label="홈"
        onPress={() => props.navigation.navigate('MainStack', { screen: 'Main' })}
      />
      <DrawerItem
        label="알림"
        onPress={() => props.navigation.navigate('MainStack', { screen: 'Notification' })}
      />
      <DrawerItem
        label="설정"
        onPress={() => {
          // 설정 화면으로
        }}
      />
    </DrawerContentScrollView>
  );
}

export function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerStyle: styles.MenuWrapper
        
      }}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  MenuWrapper: {
    backgroundColor: palette.white,
    width: 270,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray?.[200] || '#e5e5e5',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.gray?.[900] || '#111',
  }
});
