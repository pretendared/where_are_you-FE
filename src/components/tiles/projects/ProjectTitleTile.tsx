import { View, StyleSheet, Text, ImageBackground } from "react-native"
import { palette } from "../../../styles/color"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { green } from "react-native-reanimated/lib/typescript/Colors";

interface ProjectTitleTileProps {
  title: string;
  locked?: boolean;
  startdate: string;
  enddate: string;
  location: string;
  image: any;
}

export const ProjectTitleTile: React.FC<ProjectTitleTileProps> = ({ 
  title, locked, startdate, enddate, location, image
}) => {
  return (
    <ImageBackground 
      source={image}
      style={styles.container}
    >
      {/* 그라데이션 오버레이 */}
      <LinearGradient
        colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}
        style={styles.gradient}
      />
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          {locked ? (
            <MaterialIcons name="lock-outline" size={24} color={palette.white} />
          ) : (
            <MaterialIcons name="lock-open" size={24} color={palette.white} />
          )}
        </View>

        <View style={styles.descriptionWrapper}>
          <View style={styles.dateWrapper}>
            <MaterialIcons name="calendar-today" size={20} color={palette.white} />
            <Text style={styles.date}>{startdate} ~ {enddate}</Text>
          </View>

          <View style={styles.locationWrapper}>
            <MaterialIcons name="location-on" size={20} color={palette.white} />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    height: 170,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.white,
  },
  descriptionWrapper: {
    gap: 4,
    marginTop: 6,
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 18,
    color: palette.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 16,
    color: palette.gray[100],
  },
})
