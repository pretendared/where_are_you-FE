import { Image, StyleSheet, Text, View } from "react-native"
import { fontWeight } from "../../../styles/typography";
import { palette } from "../../../styles/color";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface MemberInfoTileProps {
  nickname?: string;
  host?: boolean;
  profileImageUrl?: any;
}

export const MemberInfoTile:React.FC<MemberInfoTileProps> = ({ nickname, host, profileImageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image style={styles.profile} 
          source={profileImageUrl ?? 
          require('../../../assets/images/icons/profile.webp')} 
        />
        <Text style={styles.nicknameText}>{nickname}</Text>
      </View>
      {
        host && <MaterialIcons name="more-vert" size={24} color="black" />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.gray[900],
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  nicknameText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 22,
    fontWeight: fontWeight.regular,
    color: palette.black,
  }
});