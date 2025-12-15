import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { palette } from "../../styles/color";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import dayjs from "dayjs";
import { fontWeight } from "../../styles/typography";
import { useNavigation } from "@react-navigation/native";

interface PostTileProps {
  profile?: string;
  nickname: string;
  date: string;
  title: string;
  edit?: boolean;
  mine?: boolean;
  click?: boolean;
}

export const PostTile:React.FC<PostTileProps> = ({profile, date, nickname, title, edit, mine, click}) => {

  const navigation = useNavigation();

  let today = dayjs(date).format('YYYY년 MM월 DD일');

  const handlePress = () => {
    navigation.navigate('Comment');
  };

  return (
    <Pressable style={styles.tileWrapper} onPress={click ? handlePress : undefined}>
      <View style={styles.tileContainer}>
        <View style={styles.profileWrapper}>
          <Image style={styles.profileImage} source={profile ? {uri: profile} : require("../../assets/images/icons/profile.webp")}/>
          <View>
            <Text style={styles.nicknameText}>{nickname}</Text>
            <Text style={styles.dateText}>{today}{edit && '(수정됨)'}</Text>
          </View>
        </View>
        {
          mine && <MaterialIcons name="more-vert" size={24} color={palette.gray[400]} />
        }
      </View>
      <View style={styles.horizonLine}></View>
      <Text style={styles.titleText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tileWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: palette.primary[50],
    borderRadius: 14,
    gap: 8,
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizonLine: {
    width: '100%',
    height: 1,
    backgroundColor: palette.gray[200],
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  nicknameText:{
    color: palette.black,
    fontSize: 16,
    fontWeight: fontWeight.regular,
  },

  dateText: {
    color: palette.gray[400],
    fontSize: 10,
    fontWeight: fontWeight.regular,
  },

  titleText: {
    color: palette.black,
    fontSize: 16,
    fontWeight: fontWeight.medium,
  }
});