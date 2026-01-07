import { StyleSheet, Text, View, Pressable, Image } from "react-native"
import { fontWeight } from "../../../styles/typography";
import { palette } from "../../../styles/color";
import { ProjectTile } from "../../tiles/ProjectTile";
import scheduleDummy from "../../../mock/scheduleDummy.json";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface BoardProjectProps {
  host ?: boolean;
  roomID: number;
  edit?: boolean;
}

export const BoardProject:React.FC<BoardProjectProps> = ({host, roomID, edit}) => {

  const [projectData, setProjextData] = useState<any>("gg");
  const navigation = useNavigation() as any;

  const goProjectInfo = () => {
    navigation.navigate('ProjectInfo', {paramshost: host});
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.controlWrapper}>    
        {host &&
          <Pressable style={styles.createButton}>
            <Text style={styles.createButtonText}>여행 프로젝트 생성하기</Text>
          </Pressable>
        } 
          {projectData ? 
          <View style={styles.tileWrapper}>
            <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg" />
            <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg" />
            <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg" />
            <ProjectTile onPress={goProjectInfo} title="Project Title" location="대전 유성구 가정북록 67" dDay={10} imageUrl="https://dsmhs.djsch.kr/upload/board/54803/2025/10/thumb/70bcb400d38c1c21a035498b141a3895.jpg" />
          </View>
          :
          <View style={styles.noneDataWrapper}>
            <Text style={styles.noneDataText}>아직 여행 프로젝트가 없네요! 여행을 시작해 볼까요?</Text>
            <Image
              source={require("../../../assets/images/backgrounds/no_search.png")}
              style={styles.noneDataImage}
            />
          </View>
          }
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
  },
  createButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary[500],
    borderRadius: 30,
  },
  createButtonText: {
    color: palette.white,
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  tileWrapper: {
    gap: 14,
  },
  noneDataWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  noneDataText: {
    fontFamily: 'Pretendard-Variable',
    color: palette.gray[400],
    fontSize: 14,
    fontWeight: fontWeight.medium,
  },
  noneDataImage: {
    width: 194.15,
    height: 238,
    resizeMode: 'contain',
  },
});