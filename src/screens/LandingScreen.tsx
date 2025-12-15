import { Image, View, Text,Modal, StyleSheet, StatusBar } from 'react-native'
import { palette } from '../styles/color'
import { fontWeight } from '../styles/typography'
import { LinearGradient } from 'expo-linear-gradient'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react'

export const LandingScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#00000000'); 
    NavigationBar.setButtonStyleAsync('light');
  }, []);

  const goLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.landingScreen}>
      <StatusBar barStyle='dark-content'/>
      <Modal
        animationType="none"
        transparent={true}
        visible={true}
      >
        <View style={styles.modalWrapper}>
          <PrimaryButton title='통합로그인으로 시작하기' onPress={goLogin}/>
        </View>
      </Modal>
      <View style={styles.contentWrapper}>
        <View style={styles.contentCenter}>
          <Image 
            style={styles.logoImage}
            source={require('../assets/images/icons/logo_icon(light).png')}
          />
          <Text style={styles.contentTitle}>환영합니다!</Text>
          <Text style={styles.contentText}>너 어디야를 시작해볼까요?</Text>
        </View>
      </View>
      <View style={styles.landingFooter}>
        <LinearGradient
          colors={['rgba(133, 184, 255, 0)', '#000000']}
          style={styles.footerGradient}
        >
          <Image
            style={styles.backgroundImage}
            source={require('../assets/images/backgrounds/traveling.jpg')}
          />
          {/* 위쪽 하얀 그라데이션 오버레이 */}
          <LinearGradient
            colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
            style={styles.topGradientOverlay}
          />
          <View>
            <Image source={require('../assets/images/backgrounds/traveling.jpg')} style={{flex:1, opacity:0}}/>
          </View>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  landingScreen:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalWrapper:{
    position: 'absolute',
    left:0,
    right: 0,
    alignItems: 'center',
    bottom: 65,
  },
  contentWrapper:{
    flex: 1,
    width: '100%',
    alignContent:'center',
    justifyContent: 'flex-end',
    backgroundColor: palette.white,
  },
  contentCenter:{
    alignItems:'center',
  },
  logoImage:{
    width: 272,
    height: 63,
  },
  contentTitle:{
    color: palette.black,
    fontSize: 20,
    fontFamily: 'Pretendard-Variable',
    fontWeight: fontWeight.bold,
  },
  contentText:{
    color: palette.gray[400],
    fontSize: 20,
    fontFamily: 'Pretendard-Variable',
    fontWeight: fontWeight.regular,
  },
  landingFooter:{
    flex: 1,
    width: '100%',
    height: 435,
  },
  footerGradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2, 
    height: '100%', 
    width: '100%',
    position: 'relative',
    resizeMode: 'cover',
  },
  topGradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200, // 그라데이션 높이 조절

  },
})