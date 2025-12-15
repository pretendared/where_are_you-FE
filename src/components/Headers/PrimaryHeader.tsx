import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { palette } from '../../styles/color';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export const PrimaryHeader = () => {

  const navigation = useNavigation();
  
  const goMain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main'}]
    });
  }


  const goNotification = () => {
    navigation.navigate('Notification');
  }

  return (
    <View style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={goMain}>
          <Image style={styles.logoImage} source={require('../../assets/images/icons/logo_icon(light).png')}/>
        </Pressable>
        <View style={styles.menuWrapper}>
          <Pressable onPress={goNotification}>
            <Image style={styles.menuIcon} source={require('../../assets/images/icons/Notifications.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MaterialIcons name="dehaze" size={30} color={palette.gray[400]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  header: {
    height: 117,
    backgroundColor: palette.gray[50],
    justifyContent: 'space-between',
    alignItems: 'flex-end',           // 수직 아래 정렬
    bottom: 0,
    paddingHorizontal: 19,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  logoImage: {
    width: 141,
    height: 33,
  },
  menuWrapper: {
    flexDirection: 'row',
    gap: 14,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});
