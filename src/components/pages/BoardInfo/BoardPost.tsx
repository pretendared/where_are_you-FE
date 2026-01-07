import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { palette } from "../../../styles/color";
import { fontWeight } from "../../../styles/typography";
import { PostTile } from "../../tiles/PostTile";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface BoardPostProps {
  host: boolean;
  roomID: string;
}

export const BoardPost:React.FC<BoardPostProps> = ({host, roomID}) => {

  const [postData, setPostData] = useState<any>("ㅇ");
  const [noticeData, setNoticeData] = useState<any>("");

  const navigation = useNavigation() as any;
  
  const handlePress = () => {
    navigation.navigate('Comment');
  };

  return (
    <View style={styles.page}>
      <View style={styles.postGap}>
      {
        host ? (
        <View style={styles.hostButtonWrapper}>
          <Pressable style={styles.hostNotificationButton}>
            <Text style={styles.hostNotificationButtonText}>공지사항 올리기</Text>
          </Pressable>
          <Pressable style={styles.hostPostButton}>
            <Text style={styles.hostPostButtonText}>게시물 등록</Text>
          </Pressable>
        </View>
        ):(
        <Pressable style={styles.guestButton}>
          <Text style={styles.guestButtonText}>게시물 올리기</Text>
        </Pressable>
        )
      }

        <View style={styles.postWrapper}>
          <Text style={styles.postTitle}>공지사항</Text>
          { noticeData ?
            <>
              <PostTile onPress={handlePress} click={true} nickname="hk" date="2025-10-09" edit={true} title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
              <PostTile onPress={handlePress} click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
            </>
            :
            <Text style={styles.noneDataText}>현재 공지사항이 없습니다. 여유를 즐기세요!</Text>
          }
        </View>
        <View style={styles.postWrapper}>
          <Text style={styles.postTitle}>게시물</Text>
          {
            postData ? 
            <>
              <PostTile click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
              <PostTile click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
            </> 
            :
            <Text style={styles.noneDataText}>현재 등록된 게시물이 없습니다. 조용하군요..</Text>
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: palette.white,
    paddingVertical: 23,
    paddingHorizontal: 21,
  },
  postGap: {
    gap: 23,
  },
  hostButtonWrapper: {
    flexDirection: 'row',
    gap: 14,
  },
  hostNotificationButton: {
    flex: 2,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[500],
    borderRadius: 30,
  },
  hostNotificationButtonText: {
    color: palette.white,
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  hostPostButton:{
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[200],
    borderRadius: 30,
  },
  hostPostButtonText: {
    color: palette.primary[800],
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  guestButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[500],
    borderRadius: 30,
  },
  guestButtonText: {
    color: palette.white,
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.black,
  },
  postWrapper: {
    gap: 14,
  },
  noneDataText: {
    fontFamily: 'Pretendard-Variable',
    color: palette.gray[400],
    fontSize: 14,
    textAlign: 'center',
    fontWeight: fontWeight.medium,
  },
});