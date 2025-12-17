import { ImageBackground, StyleSheet, View } from "react-native"
import { palette } from "../../../styles/color";
import { LinearGradient } from "expo-linear-gradient";

interface ScheduleMapTileProps {
  title: string;
  description: string;
  location: string;
  image: any;
  
}

export const ScheduleMapTile:React.FC<ScheduleMapTileProps> = ({}) => {
  return (
    <View style={styles.tileWrapper}>
      <ImageBackground
        style={styles.imageWrapper}
        source={require('../../../assets/images/backgrounds/traveling.jpg')}

      />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)','rgba(0,0,0,0)'

        ]}
        style={StyleSheet.absoluteFillObject}
      >

      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  tileWrapper: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    backgroundColor: palette.black,
    overflow: 'hidden',
  },
  imageWrapper: {
    flex: 1,
  }
});