import { View, Modal, Text, StyleSheet, Pressable, StatusBar, Animated } from "react-native";
import { palette } from "../../styles/color";
import { fontWeight } from "../../styles/typography";
import { useRef } from "react";

interface AlertModalProps {
  content?: string; // 내용 입력
  title?: string; // 알림 제목 입력
  open: boolean; // 열렸는지 판단
  onClose: () => void; // 알람 닫기 제어
  overlayClose?: boolean; // 오버레이 눌렀을때 닫을 건지
  onConfirm?: () => void; // 확인 버튼 눌른 후 동작
}

export const AlertModal:React.FC<AlertModalProps> = ({content, title, open, onClose, overlayClose, onConfirm}) => {
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
  

  const closeModal = () => {
    onClose();
    if(onConfirm){
      onConfirm();
    }
  }

  return (
    <Modal
      animationType="fade"
      backdropColor="#0000007d"
      navigationBarTranslucent={true}
      onRequestClose={closeModal}
      visible={open}
    >
      <StatusBar translucent={true}/>
      <Pressable android_disableSound={true} style={styles.overRay} onPress={overlayClose ? closeModal : null}>
        <Pressable android_disableSound={true} style={styles.modalWrapper} onPress={() => {}}>
          <View style={styles.titleGap}>
            <Text style={styles.title}>{title ? title : '알림'}</Text>
            <Text style={styles.content}>{content ? content : 'content'}</Text>
          </View>
          <Pressable
            onPress={closeModal}
            android_ripple={{ color:'#15151555' }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
              <Text style={styles.buttonText}>확인</Text>
            </Animated.View>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overRay: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalWrapper: {
    width: 298,
    minHeight: 337,
    borderRadius: 20,
    paddingVertical: 24,   // 위/아래 여백
    paddingHorizontal: 25, // 좌/우 여백
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 24,
    fontWeight: fontWeight.bold,
    color: palette.black,
  },

  content: {
    fontSize: 18,
    fontWeight: fontWeight.bold,
    color: palette.gray[500],
  },

  titleGap: {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
  },

  button: {
    width: 214,
    height: 55,
    borderRadius: 14,
    backgroundColor: palette.primary[500],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: fontWeight.bold,
  }
});