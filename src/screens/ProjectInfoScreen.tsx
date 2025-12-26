import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native"
import { BoardHeader } from "../components/Headers/BoardHeader"
import { ProjectTitleTile } from "../components/tiles/projects/ProjectTitleTile"
import { ScheduleTile } from "../components/tiles/projects/ScheduleTile"
import { ScheduleMapTile } from "../components/tiles/projects/ScheduleMapTile"
import { useState } from "react"
import { palette } from "../styles/color"
import { fontWeight } from "../styles/typography"
import scheduleDummy from "../mock/scheduleDummy.json"
import { useNavigation } from "@react-navigation/native"

export const ProjectInfoScreen:React.FC = () => {

  const navigation = useNavigation() as any;

  const [edit, setEdit]= useState(true);
  const [host, setHost]= useState(true);

  const [scheduleData, setScheduleData] = useState(scheduleDummy);

  const goProjectMember = () => {
    navigation.navigate('ProjectMember');
  }
  
  return (
    <View style={styles.screen}>
      <BoardHeader/>
      <ScrollView>
        <ProjectTitleTile 
          title="가자가자부산으로 가자" startdate="2024-01-01" 
          enddate="2024-12-31" 
          location="대한민국 부산시" 
          image={require('../assets/images/backgrounds/test.png')}
          locked={edit}
        />
        <View style={styles.contentWrapper}>
          {(host) ? (
              <View style={styles.editButtonWrapper}>
                <View style={styles.editButtonContainer}>
                  <Text style={styles.editButtonText}>프로젝트 편집하기</Text>
                </View>
                <Pressable onPress={goProjectMember} style={styles.memberButtonContainer}>
                  <Text style={styles.memberButtonText}>멤버 권한 변경</Text>
                </Pressable>
              </View>
            ):(edit) && (
              <View style={styles.editButtonContainer}>
                <Text style={styles.editButtonText}>프로젝트 편집하기</Text>
              </View>
            )}
        {scheduleData.map((day, dayIndex) => (
          <View 
            key={day.date} 
            style={styles.scheduleWrapper}>
            <Text style={styles.dayTitle}>
              {dayIndex + 1}일차
            </Text>

              {/* 해당 날짜의 일정들 */}
              {day.schedules.map((schedule) =>
                schedule.map ? (
                  <ScheduleMapTile
                    key={schedule.id}
                    title={schedule.title}
                    description={schedule.description}
                    location={schedule.location}
                    startTime={schedule.startTime}
                    endTime={schedule.endTime}
                  />
                ) : (
                  <ScheduleTile
                    key={schedule.id}
                    title={schedule.title}
                    description={schedule.description}
                    startTime={schedule.startTime}
                    endTime={schedule.endTime}
                  />
                )
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 21,
    paddingVertical: 17,
    gap: 16,
  },
  scheduleWrapper: {
    gap: 16,
  },
  editButtonWrapper: {
    flexDirection: 'row',
    gap: 14,
  },
  editButtonContainer: {
    flex: 2,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[500],
    borderRadius: 30,
  },
  editButtonText: {
    color: palette.white,
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  memberButtonContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[200],
    borderRadius: 30,
  },

  memberButtonText: {
    color: palette.primary[800],
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },

  dayTitle: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 24,
    fontWeight: fontWeight.bold,
    color: palette.black,
  },
});