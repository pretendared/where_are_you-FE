import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native"
import { palette } from "../../../styles/color";
import { fontWeight } from "../../../styles/typography";

interface PostInputProps {
  value?: string;
  height?: number;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const PostInput:React.FC<PostInputProps> = ({value = '', onChangeText, placeholder, height, multiline = false}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      textAlignVertical="top"
      style={[styles.textInput, height && { minHeight: height }]}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: palette.gray[100],
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.medium,
    color: palette.black,
    borderWidth: 2,
    borderColor: palette.gray[200],
  }
});