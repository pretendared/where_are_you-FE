import { View, Text, StyleSheet } from "react-native";
import { palette } from "../../styles/color";
import { BoardBottomButton } from "../buttons/BoardBottomButton";
import { useEffect, useState } from "react";

interface BoardBottomProps {
  index: number;
  setIndex: (index: number) => void;
}

export const BoardBottom:React.FC<BoardBottomProps> = ({index, setIndex}) => {
  const [num, setNum] = useState(index);

  useEffect(() => {
    setIndex(num)
  },[num])
  return (
    <View style={styles.bottomWrapper}>
      <BoardBottomButton index={num} value={1} icon="question-answer" title="의견 커뮤니티" onPress={setNum}/>
      <BoardBottomButton index={num} value={2} icon="card-travel" title="여행 프로젝트" onPress={setNum}/>
      <BoardBottomButton index={num} value={3} icon="people-alt" title="여행 멤버" onPress={setNum}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomWrapper: {
    left: 0,
    right: 0,
    height: 126,
    backgroundColor: palette.gray[50],
    alignItems: 'flex-start',
    paddingHorizontal: 36,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})