import { StyleSheet, View, Text, Image, Pressable } from "react-native"
import { palette } from "../../styles/color"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { fontWeight } from "../../styles/typography";
import { LinearGradient } from "expo-linear-gradient";

interface ProjectTileProps {
  title: string;
  location: string;
  dDay?: number;
  imageUrl?: string;
  onPress?: () => void;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({ title, location, dDay, imageUrl, onPress }) => {

  const simpleLocation = location.split(" ").slice(0, 2).join(" ");

  return (
    <Pressable style={styles.tileWrapper} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={alert}>
              <MaterialIcons name="more-vert" size={24} color={palette.gray[400]} />
            </Pressable>
          </View>
          <Text style={styles.location}>{location}</Text>
        </View>
        {(dDay) &&
          <View>
            <Text style={[styles.title, dDay <= 0 ? {color: palette.primary[500]} : {color: palette.gray[500]}]}>{dDay <= 0 ? "? 여행 중" : `${dDay}일 남음`}</Text>
          </View>
        }
      </View>
      <View style={styles.imageWrapper}>
          <Image
            source={imageUrl ? { uri: imageUrl } : require('../../assets/images/backgrounds/traveling.jpg')}
            style={{ width: '100%', height: 200 }}
          />
          <LinearGradient
            colors={['#F6F6F6', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.locationTitle}>{simpleLocation}</Text>
          </LinearGradient>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tileWrapper: {
    width: '100%',
    height: 110,
    borderRadius: 14,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  imageWrapper: {
    width: 120,
    height: '100%',
    backgroundColor: palette.gray[500],
  },
  contentWrapper: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 18,
    justifyContent: 'space-between', 
    backgroundColor: palette.gray[50], 
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.black,
  },

  location: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 16,
    fontWeight: fontWeight.medium,
    color: palette.gray[500],
  },

  locationTitle: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 16,
    fontWeight: fontWeight.bold,
    color: palette.white,
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});