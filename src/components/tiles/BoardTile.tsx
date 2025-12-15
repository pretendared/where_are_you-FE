import { View, StyleSheet, Text, Image, Pressable } from "react-native"
import { palette } from "../../styles/color";
import { fontWeight } from "../../styles/typography";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

interface BoadrTileProps{
  title: string;
  dDay: number;
  roomID: number;
  nickname?: string;
  host?: boolean;
  color?: string;
  profile?: string;
}

export const BoardTile:React.FC<BoadrTileProps> = ({title, dDay, nickname, color, profile, host, roomID}) => {

  const navigation = useNavigation();

  const goBoardInfo = () => {
    navigation.navigate("BoardInfo",{ 
      roomID: roomID,
      hostname: nickname
    });
  }

  return(
    <Pressable onPress={goBoardInfo}>
      <View style={[styles.boardTile, color ? {backgroundColor: color } : null]}>
        <LinearGradient style={styles.gradientContainer} colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.5)']}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{host ? title+'👑' : title}</Text>
            <MaterialIcons name="more-vert" size={24} color={palette.white} />
          </View>
          <View style={styles.boardInfoWrapper}>
            <View style={styles.boardInfoContent}>
              <Text style={styles.dDayText}>{dDay > 0 ? `${dDay}일 남음` : dDay === 0 ? '여행 중' : '여행 종료' }</Text>
              <Text style={styles.nicknameText}>{nickname ? nickname : 'nickname'}</Text>
            </View>
            <View style={styles.profileWrapper}>
              <Image source={
                profile
                  ? { uri: profile }
                  : require('../../assets/images/icons/profile.webp')
              } style={styles.profileImage}/>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  boardTile: {
    width: '100%',
    height: 160,
    backgroundColor: 'rgb(255, 172, 172)',
    borderRadius: 14,
    overflow: 'hidden',
  },
  titleWrapper:{
    flex: 1,
    paddingHorizontal:22,
    paddingVertical: 12,
    alignItems:'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.white,
  },
  dDayText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.bold,
    color: palette.gray[500],
  },
    gradientContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  nicknameText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    color: palette.black,
  },
  boardInfoContent: {
    gap: 0,
  },
  profileWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: palette.gray[800],
    borderRadius: '100%',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  boardInfoWrapper: {
    width: '100%',
    height: 64,
    backgroundColor: palette.gray[50],
    paddingVertical: 12,
    paddingHorizontal:22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});