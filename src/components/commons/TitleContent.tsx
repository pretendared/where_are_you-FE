import { StyleSheet, View, Text } from "react-native"
import { fontWeight } from "../../styles/typography";
import { palette } from "../../styles/color";

interface TitleContentProps {
  title: string;
  content: string;
}

export const TitleContent:React.FC<TitleContentProps> = ({title, content}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 22,
    fontWeight: fontWeight.bold,
    color: palette.black,
  },
  content: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    color: palette.gray[500],
  }
});
