import { StyleSheet, View, Pressable, Text, Dimensions, Animated } from "react-native";
import { palette } from "../../styles/color";
import { fontWeight } from "../../styles/typography";
import { useRef } from "react";

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  width?: number;
}

const screenWidth = Dimensions.get('screen').width;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, disabled, width }) => {
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

  return (
    <Pressable
      android_ripple={!disabled ? { color: '#15151555' } : undefined}
      onPress={disabled ? undefined : onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View
        style={[
          styles.buttonWrapper,
          width ? { width: width } : null,
          disabled && styles.buttonDisabled,
          { transform: [{ scale: scaleAnim }] }
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: screenWidth - 57 * 2,
    height: 55,
    backgroundColor: palette.primary[500],
  },
  buttonDisabled: {
    backgroundColor: palette.gray[300],
  },
  text: {
    fontFamily: 'Pretendard-Variable',
    color: palette.white,
    fontSize: 16,
    fontWeight: fontWeight.bold,
  },
})
