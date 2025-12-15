import { Pressable, View, Text, StyleSheet, Animated } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { palette } from "../../styles/color";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef } from "react";

interface FloatingActionButtonProps {
  onPress: () => void;
}

export const FloatingActionButton:React.FC<FloatingActionButtonProps> = ({onPress}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
    const handlePressIn = () => {
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        useNativeDriver: true,
      }).start();
    };
  
    const handlePressOut = () => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

  const insets = useSafeAreaInsets(); // 화면만큼 올라와

  return(
    <Pressable 
      style={styles.zIndex} 
      onPress={onPress} 
      onPressIn={handlePressIn} 
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.FLBWrapper, {bottom: insets.bottom}, { transform: [{ scale: scaleAnim }] }]}>
        <MaterialIcons name="add" size={40} color={palette.white} />
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  zIndex: {
    zIndex: 1,
    position: 'absolute',
    bottom: 21,
    right: 21,
  },
  FLBWrapper: {
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 60,
    padding: 15,
    backgroundColor: palette.primary[500],
    boxShadow: '2px 4px 7px 0 rgba(0, 0, 0, 0.25)',
    
  },
})

