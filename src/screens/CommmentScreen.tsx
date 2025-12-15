import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import { PrimaryHeader } from "../components/Headers/PrimaryHeader"
import { PopUpHeader } from "../components/Headers/PopUpHeader"
import { useState } from "react";
import { palette } from "../styles/color";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { fontWeight } from "../styles/typography";
import { PostTile } from "../components/tiles/PostTile";
import { CommentBottom } from "../components/bottoms/CommentBottom";

interface CommentScreenProps {
  
}

export const CommentScreen: React.FC<CommentScreenProps> = () => {
  const [user, setUser] = useState({
    host: true,
    profileImage: require('../assets/images/icons/profile.webp'),
    nickname: 'hk2008',
    year: 2025,
    month: 11,
    day: 10,
    edit: true,
  });

  const [replyCount,  setReplyCount] = useState(4);

  return (
    <View style={styles.screen}>
      <PopUpHeader />
      <ScrollView style={styles.container}>
        <View style={styles.userWrapper}>
          <View style={styles.profileWrapper}>
            <Image source={user.profileImage} style={styles.profile} />
            <View>
              <Text style={styles.nickname}>{user.nickname}</Text>
              <Text style={styles.date}>{`${user.year}년 ${user.month}월 ${user.day}일`}</Text>
            </View>
          </View>
          <MaterialIcons name="more-vert" size={24} color={palette.gray[400]} />
        </View>
        <Text style={styles.textField}>xptmxm</Text>
        <View style={styles.horizonLine}></View>
        <View style={styles.replyWrapper}>
          <Text style={styles.replyCountText}>댓글 {replyCount}건</Text>
          {
            replyCount > 0 ? (
              <>
                <PostTile date="2025-04-07" nickname={`rlacks${user.nickname === 'rlacks' ? '(작성자)' : ''}`} edit={true} title="왐마 직이노"/>
                <PostTile date="2025-04-07" nickname={`rlacks${user.nickname === 'rlacks' ? '(작성자)' : ''}`} edit={true} title="왐마 직이노"/>
                <PostTile date="2025-04-07" nickname={`rlacks${user.nickname === 'rlacks' ? '(작성자)' : ''}`} edit={true} title="왐마 직이노"/>
                <PostTile date="2025-04-06" nickname={`hk2008${user.nickname === 'hk2008' ? '(작성자)' : ''}`} edit={true} title="왐마 직이노 ㅇㅇ" mine={true} />
              </>
            ) : (
              <Text style={styles.replyDoneText}>댓글이 없습니다.</Text>
            )
          }
        </View>
      </ScrollView>
      <CommentBottom />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: palette.white,
    flex: 1,
  },
  container:{
    paddingTop: 23,
    paddingHorizontal: 21,
  },
  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 30,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  nickname: {
    fontSize: 16,
    fontWeight: fontWeight.regular,
    color: palette.black,
  },
  date: {
    fontSize: 10,
    fontWeight: fontWeight.regular,
    color: palette.gray[400],
  },
  textField: {
    width: '100%',
    minHeight: 320,
  },
  horizonLine: {
    width: '100%',
    height: 1,
    backgroundColor: palette.gray[200],
    marginVertical: 8,
  },
  replyCountText: {
    fontWeight: fontWeight.bold,
    fontSize: 20,
    color: palette.black,
  },
  replyWrapper: {
    gap: 24,
  },
  replyDoneText: {
    fontSize: 14,
    fontWeight: fontWeight.medium,
    color: palette.gray[400],
    textAlign: 'center',
  },
})