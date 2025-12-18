import { ImageBackground, StyleSheet, View, Text } from "react-native"
import { palette } from "../../../styles/color";
import { LinearGradient } from "expo-linear-gradient";
import { fontWeight } from "../../../styles/typography";

interface ScheduleMapTileProps {
  title: string;
  description: string;
  location: string;
  image?: any;
  startTime: string;
  endTime: string; 
}

export const ScheduleMapTile:React.FC<ScheduleMapTileProps> = ({title, description, location, image, startTime, endTime}) => {
  return (
    <View style={styles.tileWrapper}>
      <ImageBackground
        style={styles.imageWrapper}
        source={image ? image : require('../../../assets/images/backgrounds/loading.png')}

      />
      <LinearGradient
        colors={['rgba(18,17,17,1)','rgba(18,17,17,0)']}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.tileContainer}>
          <View>
            <Text style={[styles.textBase, styles.titleText]}>{title}</Text>
            <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
            <Text style={[styles.textBase, styles.locationText]}>{location}</Text>
          </View>
          <View style={styles.timeWrapper}>
            <Text style={[styles.textBase, styles.timeText]}>진행 중</Text>
            <Text style={[styles.textBase, styles.timeText]}>{startTime} - {endTime}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  textBase: {
    color: palette.white,
    fontFamily: 'Pretendard-Variable',
  },
  tileWrapper: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    backgroundColor: palette.black,
    overflow: 'hidden',
  },

  imageWrapper: {
    flex: 1,
  },

  tileContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  titleText: {
    fontWeight: fontWeight.bold,
    fontSize: 24,
  },

  descriptionText: {
    fontWeight: fontWeight.regular,
    fontSize: 18,
  },

  locationText: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
    color: palette.gray[100],
  },

  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  timeText: {
    fontWeight: fontWeight.bold,
    fontSize: 20,
    color: palette.white,
  },
});