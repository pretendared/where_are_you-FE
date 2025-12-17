import { StyleSheet, View } from "react-native"
import { BoardHeader } from "../components/Headers/BoardHeader"
import { ProjectTitleTile } from "../components/tiles/projects/ProjectTitleTile"
import { ScheduleTile } from "../components/tiles/projects/ScheduleTile"
import { ScheduleMapTile } from "../components/tiles/projects/ScheduleMapTile"

export const ProjectInfoScreen = () => {
  return (
    <View>
      <BoardHeader/>
      <ProjectTitleTile 
        title="가자가자부산으로 가자" startdate="2024-01-01" 
        enddate="2024-12-31" 
        location="대한민국 부산시" 
        image={require('../assets/images/backgrounds/test.png')}
      />
      <View style={styles.contentWrapper}>
        <ScheduleTile title="아침 밥 먹기" description="조심히 먹고 오세요" startTime="07:00" endTime="07:30" />
        <ScheduleMapTile/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 21,
    paddingVertical: 17,
    gap: 16,
  },
});