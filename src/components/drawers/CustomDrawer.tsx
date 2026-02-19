import { DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const CustomDrawer = (props: any) => {
  
  const navigation = useNavigation() as any;

  const [profile, setProfile] = useState<string>('');
  const [nickname, setNickname] = useState<string>('hk2008');

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
          <View style={styles.profileWrapper}>
            <Image
              style={styles.profile}
              source={profile ? { uri: profile } : require('../../assets/images/icons/profile.webp')}
            />
            <Text>
              {nickname}
            </Text>
          </View>
          <View>
            
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
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: palette.gray[200],
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});