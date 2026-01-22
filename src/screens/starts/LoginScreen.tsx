import { Image, View, Text,Modal, StyleSheet, BackHandler,Alert, StatusBar } from 'react-native'
import { palette } from '../../styles/color'
import { fontWeight } from '../../styles/typography'
import { LinearGradient } from 'expo-linear-gradient'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { OauthButton } from '../../components/buttons/OauthButton'
import { AlertModal } from '../../components/modals/AlertModal'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

export const LoginScreen = () =>{

  const navigation = useNavigation() as any;
  
  const [alertModalToggle, setAlertModalToggle] = useState(false);

  const goBack = () => {
    navigation.goBack();
  }

  const goWelcome = () => {
    navigation.navigate('Welcome');
  }

  const buttons = [
    { id: 1, title: 'google', onPress: goWelcome},
    { id: 2, title: 'naver',  onPress: () => setAlertModalToggle(true)},
    { id: 3, title: 'kakao',  onPress: () => setAlertModalToggle(true)},
    { id: 4, title: 'apple', onPress: () => setAlertModalToggle(true)},
  ];

  return (
    <View style={styles.landingScreen}>
      <StatusBar translucent={true} barStyle='light-content'/>
      <AlertModal 
        content="미완성된 기능 입니다."
        open={alertModalToggle}
        onClose={() => setAlertModalToggle(false)}
        overlayClose={true}
        onConfirm={goBack}
      />
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
                source={require('../../assets/images/icons/logo_icon(dark).png')}
              />
              <Text style={styles.contentTitle}>통합 로그인</Text>
            </View>
          </View>
          <View style={styles.bottomWrapper}>
            <View style={styles.oauthWrapper}>
              <View style={styles.oauthGap}>
                {buttons.map(btn => (
                  <OauthButton key={btn.id} id={btn.title} onPress={btn.onPress}/>
                ))}
              </View>
              <Text style={styles.contentText}>로그인 할 수단을 선택하세요</Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.contentWrapper}>
      </View>
      <View style={styles.landingFooter}>
        <LinearGradient
          colors={['rgba(133, 184, 255, 0)', '#000000']}
          style={styles.footerGradient}
        >
          <Image
            style={styles.backgroundImage}
            source={require('../../assets/images/backgrounds/traveling.jpg')}
          />
          {/* 위쪽 하얀 그라데이션 오버레이 */}
          <LinearGradient
            colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
            style={styles.topGradientOverlay}
          />
          <View>
            <Image source={require('../../assets/images/backgrounds/traveling.jpg')} style={{flex:1, opacity:0}}/>
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
  bottomWrapper:{
    bottom: 55,
  },
  topWrapper:{
    top:265,
    gap: 102,
  },
  oauthWrapper:{
    gap:30,
    alignItems: 'center',
  },
  oauthGap:{
    flexDirection: 'row',
    gap:20,
  },
  contentWrapper:{
    flex: 1,
    width: '100%',
    alignContent:'center',
    justifyContent: 'flex-end',
    backgroundColor: palette.white,
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
    fontSize: 16,
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