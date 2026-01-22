import { View, StyleSheet, Text } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';
import React,{ forwardRef, useImperativeHandle,useMemo } from "react";
import { useRef } from "react";

export const MainBottomSheet = () => {

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '50%'], []); // 열리는 지점

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const sheetRef = React.useRef(null);
  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // 처음엔 닫힌 상태
        snapPoints={snapPoints}
      >
        <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
          <Text>여기에 내용 넣으면 됨</Text>
        </View>
      </BottomSheet>
    </View>
  )
}