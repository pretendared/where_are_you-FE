import { Pressable,Image, StyleSheet } from "react-native";

interface OauthButtonProps {
  onPress?: () => void;
  id: 'google' | 'apple' | 'kakao'| 'naver';
  key: number;
}

const icons = {
  google: require('../../assets/images/icons/google.png'),
  apple: require('../../assets/images/icons/apple.png'),
  kakao: require('../../assets/images/icons/kakao.png'),
  naver: require('../../assets/images/icons/naver.png'),
};

export const OauthButton:React.FC<OauthButtonProps> = ({onPress, id}) => {
  return (
    <Pressable onPress={onPress} style={styles.OauthWrapper}>
      <Image source={icons[id]} style={styles.logo}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  OauthWrapper:{
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 60,
    height: 60,
  }
});