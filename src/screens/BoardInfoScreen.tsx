import { View, StyleSheet, Text, Image, Pressable, ScrollView } from "react-native";
import { palette } from "../styles/color";
import { useRoute } from "@react-navigation/native";
import { BoardHeader } from "../components/Headers/BoardHeader";
import boardDummy from "../mock/boardDummy.json"
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TitleContent } from "../components/commons/TitleContent";
import { fontWeight } from "../styles/typography";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ConfirmModal } from "../components/modals/ConfirmModal";
import { BoardBottom } from "../components/bottoms/BoardBottom";
import { BoardPost } from "../components/pages/BoardInfo/BoardPost";
import { BoardProject } from "../components/pages/BoardInfo/BoardProject";
import { BoardMember } from "../components/pages/BoardInfo/BoardMember";

const TAB = {
  POST: 1,
  PROJECT: 2,
  MEMBER: 3,
} as const;

export const BoardInfoScreen = () => {

  const route = useRoute();
  const { roomID, hostname } = route.params;

  const [ titleData, setTitleData ] = useState(boardDummy[roomID - 1]);

  const [index, setIndex] = useState(TAB.POST);

  return (
    <View style={styles.screen}>
      <BoardHeader/>
      <ScrollView>
        { (index !== TAB.MEMBER) &&
        <View style={[styles.titleWrapper, { backgroundColor:titleData.color }]}>
          <LinearGradient style={styles.TitleContentWrapper} colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.3)']}>
            <View style={styles.contentWrapper}>
              <View>
                <Text style={styles.titleText}>{titleData.title}{titleData.host && '👑'}</Text>
                <Text style={styles.contentText}>{titleData.nickname}의 보드</Text>
              </View>
              <View style={styles.profileWrapper}>
                <Image style={styles.profile} source={require('../assets/images/icons/profile.webp')}/>
              </View>
            </View>
            <View
              style={styles.titleBottom}
            >
              {
                titleData.host ? 
                <Pressable>
                  <MaterialIcons name="settings" size={24} color={palette.white} />
                </Pressable> : 
                <Pressable>
                  <MaterialIcons name="logout" size={24} color={palette.white} />
                </Pressable>
              }
                {
                  titleData.dDay >= 0 &&
                  <View style={styles.dDayWrapper}>
                    <Text style={styles.dDay}>여행까지</Text>
                    <Text style={styles.dDayText}>{titleData.dDay === 0 ? 'D': titleData.dDay}-Day</Text> 
                  </View>
                }
            </View>
          </LinearGradient>
        </View>
        }
        <View style={{flex: 1}}>
          {/* 페이지 바뀌는 부분 */}
          {
            (index === TAB.POST) ? (
              <BoardPost host={titleData.host} roomID={roomID}/>
            ) : (index === TAB.PROJECT) ? (
              <BoardProject roomID={roomID} host={titleData.host} edit={true}/>
            ) : (
              <BoardMember title={titleData.title}/>
            )
          }
        </View>
      </ScrollView>
      <BoardBottom index={index} setIndex={setIndex}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.white,
  },

  titleWrapper: {
    left: 0,
    right: 0,
    height: 146,
    backgroundColor: '#CCF3EB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },

  TitleContentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 22,
  },

  titleText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 22,
    fontWeight: fontWeight.bold,
    color: palette.white,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    color: palette.white,
  },
  profileWrapper: {
    width: 56,
    height: 56,
    borderRadius: '100%',
    overflow: 'hidden',
    backgroundColor: palette.black,
  },
  profile: {
    width: 56,
    height: 56,
    resizeMode: 'cover',
  },
  titleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dDayWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dDayText:{
    fontFamily: 'Pretendard-Variable',
    fontSize: 25,
    fontWeight: fontWeight.bold,
    color: palette.primary[500],
  },
  dDay:{
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.bold,
    color: palette.white,
  }
});
