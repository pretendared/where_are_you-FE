import React from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// 뒤로가기 버튼이 눌렸을 때 실행할 핸들러 함수를 인자로 받습니다.
export const useAndroidBackHandler = (handler: () => boolean) => {
  useFocusEffect(
    React.useCallback(() => {
      // 컴포넌트가 포커스 될 때 리스너 등록
      BackHandler.addEventListener('hardwareBackPress', handler);

      // 컴포넌트가 포커스를 잃을 때 리스너 제거
      return () => BackHandler.removeEventListener('hardwareBackPress', handler);
    }, [handler])
  );
};