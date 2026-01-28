import { DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';

export const CustomDrawer = (props: any) => {
  
  const navigation = useNavigation() as any;

  const goMain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainDrawer'}]
    });
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View>
          <Pressable onPress={goMain}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/images/icons/logo_icon(light).png')}
            />
          </Pressable>
          <View>
            <Text>ㅇㅇㅇㅇ</Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  logoImage: {
    width: 141,
    height: 33,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.gray[900],
  }
});