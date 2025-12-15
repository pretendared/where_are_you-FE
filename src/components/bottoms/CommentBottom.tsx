import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { palette } from "../../styles/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CommentBottomProps {
  
}


export const CommentBottom:React.FC = () => {

  const insets = useSafeAreaInsets();
  const [text, setText] =useState('');

  const sendText = () => {
    if(text){
      console.log('send text:', text);
      setText('');
    }
  }

  return (
    <View style={[styles.inputWrapper,{
      height: insets.bottom + 82,          // 홈바 위로 띄움
      paddingBottom: insets.bottom,
    }]}>
      <View style={styles.textField}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="댓글을 입력하세요"
          multiline
          style={{ flex: 1 }}
        ></TextInput>
        <Pressable onPress={sendText} style={[styles.buttonWrapper,text && {backgroundColor: palette.primary[500]}]}>
          <MaterialIcons name="send" size={24} color={palette.white} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 82,
    backgroundColor: palette.white,
    // borderTopWidth: 1,
    // borderTopColor: palette.gray[200],
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute', 
    zIndex: 10,
  },
  textField: {
    width: '100%',
    borderWidth: 1,
    borderColor: palette.gray[200],
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: palette.gray[100],
  },
  buttonWrapper: {
    width:46,
    height:46,
    borderRadius: 14,
    backgroundColor: palette.gray[400],
    justifyContent: 'center',
    alignItems: 'center',
  }
})