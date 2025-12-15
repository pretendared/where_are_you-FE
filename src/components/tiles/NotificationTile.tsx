import { StyleSheet, View, Text, Pressable } from "react-native";
import { palette, semanticColors } from "../../styles/color";
import { fontWeight } from "../../styles/typography";

interface NotificationTileProps {
  title: string;
  content: string;
  date: string;
  onPress?: () => void;
  isRead: boolean; 
}

export const NotificationTile:React.FC<NotificationTileProps> = ({title, content, date, onPress, isRead}) => {
  return (
      <Pressable style={[styles.tileWrapper, !isRead && { backgroundColor: palette.primary[50] }]} onPress={onPress}>
        <View style={styles.titleWrapper}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {
              !isRead && <View style={styles.noReadCircle} />
            }
          </View>
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={styles.bottomWrapper}>
          <Text style={styles.dateText}>{date}</Text>
          <Pressable>
            <Text style={styles.delateText}>알림 삭제</Text>
          </Pressable>
        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  tileWrapper: {
    width: '100%',
    height: 103,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical:  10,
    backgroundColor: palette.gray[100],
    justifyContent: 'space-between',
  },
  titleWrapper:{
    gap: 2,
  },
  titleText:{
    fontSize: 16,
    fontFamily: 'Pretendard-Variable',
    fontWeight: fontWeight.bold,
    color: palette.black,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noReadCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: semanticColors.success.border,
  },
  contentText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    color: palette.gray[800],
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    color: palette.gray[400],
  },
  delateText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 16,
    fontWeight: fontWeight.bold,
    color: palette.gray[400],
  }
})