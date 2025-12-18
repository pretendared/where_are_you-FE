import { StyleSheet, View, Text, Pressable } from "react-native"
import { palette } from "../../../styles/color"
import { fontWeight } from "../../../styles/typography";
import { useNavigation } from "@react-navigation/native";

interface ScheduleTileProps {
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  edit?: boolean;
}

export const ScheduleTile:React.FC<ScheduleTileProps> = ({ title, description, startTime, endTime, edit }) => {
  const navigation = useNavigation();

  const goDetailHandle = () => {
    navigation.navigate('ScheduleDetail');
  }
  return (
    <Pressable style={styles.tileWrapper} onPress={goDetailHandle}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>ㅇㅇ</Text>
        <Text style={styles.timeText}>{startTime} - {endTime}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tileWrapper: {
    width: '100%',
    minHeight: 110,
    backgroundColor: palette.primary[50],
    borderRadius: 14,
    borderWidth: 2,
    borderColor: palette.primary[100],
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.black,
    fontFamily: 'Pretendard-Variable',
  },
  description: {
    fontSize: 18,
    color: palette.gray[500],
    fontWeight: fontWeight.medium,
    fontFamily: 'Pretendard-Variable',
  },
  timeWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.primary[500],
    fontFamily: 'Pretendard-Variable',
  }
})