import { StyleSheet, Text, View } from "react-native"
import { fontWeight } from "../../../styles/typography";
import { palette } from "../../../styles/color";
import { ProjectTile } from "../../tiles/ProjectTile";
import { useNavigation } from "@react-navigation/native";
import scheduleDummy from "../../../mock/scheduleDummy.json";

interface BoardProjectProps {
  host ?: boolean;
  roomID: number;
  edit?: boolean;
}

export const BoardProject:React.FC<BoardProjectProps> = ({host, roomID, edit}) => {

  const navigation = useNavigation() as any;
  

  const goProjectInfo = () => {
    navigation.navigate('ProjectInfo');
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.controlWrapper}>     
        
        <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 23,
    paddingHorizontal: 21,
  },

  controlWrapper: {
    gap: 40,
  }
});