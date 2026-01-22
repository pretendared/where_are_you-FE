import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { palette } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface PopUpHeaderProps {
  onPress?: () => void;
}

export const PopUpHeader:React.FC<PopUpHeaderProps> = ({ onPress }) => {

  const navigation = useNavigation();
  

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={onPress ? onPress : goBack}>
          <MaterialIcons name="arrow-back-ios" size={24} color={palette.gray[400]} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100, // 다른 콘텐츠보다 위
  },
  header: {
    height: 117,
    backgroundColor: palette.gray[50],
    justifyContent: 'space-between', // 좌우 공간 조절
    alignItems: 'flex-end',           // 수직 아래 정렬
    bottom: 0,
    paddingHorizontal: 19,
    paddingVertical: 20,
    flexDirection: 'row',
  },
});
