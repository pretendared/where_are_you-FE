import { StyleSheet, View } from "react-native"
import { TitleContent } from "../../commons/TitleContent";

interface BoardMemberProps {
  title: string;
}

export const BoardMember:React.FC<BoardMemberProps> = ({title}) => {
  return (
    <View style={styles.pageContainer}>
      <TitleContent title={`'${title}'의 여행 멤버`} content={`${title}의 여행 멤버를 확인해보세요`}/>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer:{
    paddingVertical: 23,
    paddingHorizontal: 21,
  },

});