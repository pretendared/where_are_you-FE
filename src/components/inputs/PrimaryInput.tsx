import { useEffect, useState } from "react";
import { KeyboardTypeOptions,StyleSheet, Text, View, TextInput } from "react-native"
import { palette, semanticColors } from "../../styles/color";
import { fontWeight } from "../../styles/typography";
import { LinearGradient } from "expo-linear-gradient";

interface PrimaryInputProps{
  title: string;
  onChange: (title: string) => void;
  placeHolder?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLendth?: number;
  errorAndSuceess?: "idle" | "error" | "success";
  code?: string;
}

export const PrimaryInput:React.FC<PrimaryInputProps> = ({title, keyboardType, placeHolder,onChange, maxLendth, errorAndSuceess, code}) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.inputWrapper}>
      
        <Text style={[styles.inputTitle,
          errorAndSuceess === "error" ? styles.errorTitle : errorAndSuceess === "success" ? styles.sucessTitle : null
        ]}>
          {errorAndSuceess && errorAndSuceess !== "idle" ? code ?? title : title}
        </Text>
        <TextInput
          value={value}
          style={[styles.inputContent,
            errorAndSuceess === "error" ? styles.errorStyle : errorAndSuceess === "success" ? styles.sucessStyle : null
          ]}
          onChangeText={(text) => {
            const newText = text.replace(/\s/g, ""); // 공백 제거
            setValue(newText);
            onChange(newText);
          }}
          keyboardType={keyboardType ?? "default"}
          placeholder={placeHolder ?? "텍스트를 입력하세요"}
          placeholderTextColor={palette.gray[500]}
          maxLength={maxLendth}
          >
        </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'column',
    flex: 1,
  },

  inputTitle: {
    color: palette.black,
    fontFamily: 'Pretendard-Variable',
    fontSize: 12,
  },
  
  inputContent: {
    flex: 1,
    height: 55,
    color: palette.black,
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: palette.gray[50],
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: palette.gray[200],
    borderRadius: 5,
  },

  errorStyle: {
    backgroundColor: semanticColors.fail.background,
    borderColor: semanticColors.fail.border,
  },

  sucessStyle: {
    backgroundColor: semanticColors.success.background,
    borderColor: semanticColors.success.border,
  },
  errorTitle: {
    color: semanticColors.fail.border,
  },
  sucessTitle: {
    color: semanticColors.success.border,
  }
});
