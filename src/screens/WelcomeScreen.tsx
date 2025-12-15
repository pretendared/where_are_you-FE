import { Image, View, Text,Modal, StyleSheet, BackHandler, StatusBar } from 'react-native'
import { palette } from '../styles/color'
import { fontWeight } from '../styles/typography'
import { LinearGradient } from 'expo-linear-gradient'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

import { useFocusEffect, useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () =>{


  const navigation = useNavigation();

  const goNickname = () => {
    navigation.navigate('Nickname');
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.landingScreen}>
      <StatusBar translucent={false} barStyle='light-content'/>
      <Modal
        animationType="fade"
        backdropColor="#0000002f"
        navigationBarTranslucent={true}
        visible={true}
        onRequestClose={goBack}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.topWrapper}>
            <View style={styles.titleWrapper}>
              <Image 
                style={styles.logoImage}
                source={require('../assets/images/icons/logo_icon(dark).png')}
              />
              <Text style={styles.contentTitle}>최초 로그인</Text>
              <Text style={styles.contentText}>사용자님의 별명을 정해볼까요?</Text>
            </View>
          </View>
          <View style={styles.bottomWrapper}>
            <PrimaryButton title='다음으로' onPress={goNickname}/>
          </View>
        </View>
      </Modal>
      <View style={styles.landingFooter}>
        <View style={styles.contentWrapper}>
        </View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  contentWrapper:{
    flex: 1,
    width: '100%',
    alignContent:'center',
    justifyContent: 'flex-end',
    backgroundColor: palette.white,
  },
  bottomWrapper:{
    bottom: 55,
  },
  topWrapper:{
    top:265,
    gap: 102,
  },
  logoImage:{
    width: 272,
    height: 63,
  },
  titleWrapper:{
    gap: 12,
    alignItems: 'center',
  },
  contentTitle:{
    color: palette.white,
    fontSize: 20,
    fontFamily: 'Pretendard-Variable',
    fontWeight: fontWeight.bold,
  },
  contentText:{
    color: palette.white,
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
    opacity: 0.5, 
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