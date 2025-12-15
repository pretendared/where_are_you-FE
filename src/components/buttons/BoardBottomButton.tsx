import { Pressable, View, Text, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { palette } from "../../styles/color";
import { fontWeight } from "../../styles/typography";

interface BoardBottomButtonProps {
  index: number; // 활성화된 버튼 번호
  value: number; // 버튼 번호
  icon: string;
  title: string;
  onPress: (index: number) => void; // 버튼 클릭 시 호출되는 함수
};

export const BoardBottomButton:React.FC<BoardBottomButtonProps> = ({index, value, title, onPress, icon}) => {
  return (
    <Pressable style={styles.iconWrapper} onPress={() => onPress(value)}>
      <View style={[ styles.iconContent, index === value ? {backgroundColor: palette.primary[100]} : {backgroundColor: palette.gray[50]} ]}>
        <MaterialIcons name={icon} size={30} color={ index === value ? palette.primary[500] : palette.gray[500] } />
      </View>
      <Text style={styles.iconTitle}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 11,
  },
  iconContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 17,
    paddingVertical: 3,
    borderRadius: 60,
    backgroundColor: palette.primary[100],
  },
  iconTitle: {
    fontSize: 14,
    fontFamily: 'Pretendard-Variable',
    color: palette.gray[800],
    fontWeight: fontWeight.medium,
  }
})