import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { palette } from "../../../styles/color";
import { fontWeight } from "../../../styles/typography";
import { PostTile } from "../../tiles/PostTile";

interface BoardPostProps {
  host: boolean;
  roomID: string;
}

export const BoardPost:React.FC<BoardPostProps> = ({host, roomID}) => {
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
            <PostTile click={true} nickname="hk" date="2025-10-09" edit={true} title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
            <PostTile click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
        </View>
        <View style={styles.postWrapper}>
          <Text style={styles.postTitle}>게시물</Text>
            <PostTile click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
            <PostTile click={true} nickname="hk" date="2025-10-09" title="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"/>
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
  
});