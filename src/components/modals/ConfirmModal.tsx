import { View, Modal, Text, StyleSheet, Pressable, StatusBar, Animated } from "react-native";
import { palette } from "../../styles/color";
import { fontWeight } from "../../styles/typography";
import { useRef } from "react";

interface ConfirmModalProps {
  content?: string;
  title?: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  overlayClose?: boolean;
}

export const ConfirmModal:React.FC<ConfirmModalProps> = ({content, title, open, onClose, overlayClose, onConfirm}) => {
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
  }

  const confirmModal = () => {
    onConfirm();
    closeModal();
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
          <View style={styles.buttonGap}>
            <Pressable android_disableSound={true} style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>
                취소 하기
              </Text>
            </Pressable>
            <Pressable onPress={confirmModal} onPressIn={handlePressIn} onPressOut={handlePressOut} android_ripple={{color:'#15151555'}}>
              <Animated.View style={[styles.confirmButton, { transform: [{ scale: scaleAnim }] }]}>
                <Text style={styles.confirmButtonText}>
                  확인
                </Text>
              </Animated.View>
            </Pressable>
          </View>
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
    textAlign: 'center',
  },

  titleGap: {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
  },

  buttonGap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  confirmButton: {
    width: 120,
    height: 55,
    borderRadius: 14,
    backgroundColor: palette.primary[500],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmButtonText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: fontWeight.bold,
  },

  cancelButton: {
    width: 120,
    height: 55,
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    color: palette.gray[500],
    fontSize: 16,
    fontWeight: fontWeight.bold,
  },
});