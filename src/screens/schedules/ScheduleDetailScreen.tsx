import { StyleSheet, View, Text } from "react-native";
import { PopUpHeader } from "../../components/headers/PopUpHeader";
import { palette } from "../../styles/color";

export const ScheduleDetailScreen = () => {
  return (
    <>
      <PopUpHeader/>
      <View style={styles.screenWrapper}>
        <View style={styles.contentWrapper}>
          <View>
            <Text>아침 밥 먹기</Text>
            <View style={styles.timeWrapper}>
              <Text>08:00 - 08:30</Text>
              <Text>몇시간 남음요</Text>
            </View>
          </View>
          <View style={styles.contentBoxContainer}>
          </View>
          <View style={styles.contentBoxContainer}>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 28,
    backgroundColor: palette.white,
  },
  contentWrapper: {
    gap: 14,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBoxContainer: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: palette.gray[50],
    borderRadius: 14,
  }
})