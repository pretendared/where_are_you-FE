import { Image, View, Text,Modal, StyleSheet, BackHandler, StatusBar, Dimensions } from 'react-native'
import { palette } from '../../styles/color'
import { fontWeight } from '../../styles/typography'
import { LinearGradient } from 'expo-linear-gradient'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { ConfirmModal } from '../../components/modals/ConfirmModal'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { PrimaryInput } from '../../components/inputs/PrimaryInput'

const screenWidth = Dimensions.get('screen').width;

export const NicknameScreen = () => {

  const [inputValue, setInputValue] = useState("");
  const [errorAndSuccess, setErrorAndSuccess] = useState("idle") as any;
  const [inputCode, setInputCode] = useState("");
  const [modalBoolean, setModalBoolean] = useState(false);

  useEffect(() => {
    if(errorAndSuccess !== "idle") {
      setErrorAndSuccess("idle");
    }
  }, [inputValue])

  const navigation = useNavigation() as any;

  const openModal = () => { setModalBoolean(true) }

  const goMain = () => {
    navigation.navigate('MainDrawer', { screen: 'Main' });
  }

  const goBack = () => {
    navigation.goBack();
  }

  const isNicknameAvailable = () => {
    const valueLength = inputValue.length;
    if(inputValue === "") {
      setErrorAndSuccess("error");
      setInputCode("닉네임을 입력해주세요");
    } else if(valueLength < 2) {
      setErrorAndSuccess("error");
      setInputCode("2자 이상 입력해주세요");
    } else if(valueLength > 8) {
      setErrorAndSuccess("error");
      setInputCode("최대 8자 까지입니다");
    } else{
      setErrorAndSuccess("success");
      setInputCode("사용 가능한 닉네임입니다");
    }
  }

  return (
    <View style={styles.landingScreen}>
      <ConfirmModal
        content={"닉네임을 '"+inputValue+"' (으)로 하시겠습니까?"}
        open={modalBoolean}
        onClose={() => setModalBoolean(false)}
        onConfirm={goMain}
        overlayClose={true}
      />
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
                source={require('../../assets/images/icons/logo_icon(dark).png')}
              />
              <Text style={styles.contentTitle}>닉네임 설정</Text>
            </View>
            <View style={styles.nicknameWrapper}>
              <View style={styles.nicknameContent}>
                <PrimaryInput onChange={setInputValue} title='닉네임' maxLendth={8} placeHolder='닉네임을 입력하세요' code={inputCode} errorAndSuceess={errorAndSuccess}/>
                <PrimaryButton title='중복 확인' width={100} onPress={isNicknameAvailable}/>
              </View>
              <Text style={styles.nicknameText}>2~8자 이내의 닉네임을 정해주세요</Text>
            </View>
          </View>
          <View style={styles.bottomWrapper}>
            <PrimaryButton title='다음으로' disabled={errorAndSuccess !== "success"} onPress={openModal}/>
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
  nicknameWrapper:{
    width: screenWidth - 35 * 2,
    maxWidth: 400,
    height: 195,
    paddingHorizontal: 24,
    paddingVertical: 45,
    backgroundColor: palette.white,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  nicknameContent:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 18,
  },
  topWrapper:{
    top:70,
    gap: 102,
  },
  nicknameText:{
    color: palette.gray[500],
    fontSize: 16,
    fontFamily: 'Pretendard-Variable',
    fontWeight: fontWeight.regular,
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