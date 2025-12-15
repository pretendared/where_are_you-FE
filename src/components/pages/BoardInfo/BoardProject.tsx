import { StyleSheet, Text, View } from "react-native"
import { fontWeight } from "../../../styles/typography";
import { palette } from "../../../styles/color";
import { ProjectTile } from "../../tiles/ProjectTile";
import { useNavigation } from "@react-navigation/native";

interface BoardProjectProps {
  host ?: boolean;
  roomID: number;
  edit?: boolean;
}

export const BoardProject:React.FC<BoardProjectProps> = ({host, roomID, edit}) => {

  const navigation = useNavigation();

  const goProjectInfo = () => {
    navigation.navigate('ProjectInfo');
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.controlWrapper}>     
        {(host) ? (
          <View style={styles.editButtonWrapper}>
            <View style={styles.editButtonContainer}>
              <Text style={styles.editButtonText}>프로젝트 편집하기</Text>
            </View>
            <View style={styles.memberButtonContainer}>
              <Text style={styles.memberButtonText}>멤버 권한 변경</Text>
            </View>
          </View>
        ):(edit) && (
          <View style={styles.editButtonContainer}>
            <Text style={styles.editButtonText}>프로젝트 편집하기</Text>
          </View>
        )}
        <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 23,
    paddingHorizontal: 21,
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
  controlWrapper: {
    gap: 40,
  }
});