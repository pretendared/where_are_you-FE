import { DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../styles/color';

export const CustomDrawer = (props: any) => {

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text>너 어디야 메뉴</Text>
      </View>

    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[200],
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.gray[900],
  }
});