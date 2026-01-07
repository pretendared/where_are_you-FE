import React, { useRef, useMemo, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import * as Styled from './CommentModal.styles';

type CommentModalProps = {
  onSubmit?: (text: string) => void;
};

const CommentModal: React.FC<CommentModalProps> = ({ onSubmit }) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (onSubmit) onSubmit(comment);
    modalRef.current?.dismiss();
    setComment('');
  };

  return (
    <BottomSheetModal
      ref={modalRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <View>
        <Styled.Title>댓글 작성</Styled.Title>
        <Styled.Input
          placeholder="댓글을 입력하세요..."
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <Button onPress={handleSubmit} title="등록" />
      </View>
    </BottomSheetModal>
  );
};

export default CommentModal;
