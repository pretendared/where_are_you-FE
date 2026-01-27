import { ScrollView, StyleSheet, Text, View } from "react-native"
import { PopUpHeader } from "../../components/headers/PopUpHeader"
import { palette } from "../../styles/color";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fontWeight } from "../../styles/typography";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { useState } from "react";
import { PostInput } from "../../components/inputs/posts/PostInput";
import { ConfirmModal } from "../../components/modals/ConfirmModal";


interface typeParams {
  type: 'post' | 'notice';
}

export const PostCreateScreen = () => {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const { type } = route.params as typeParams;
  const [ title, setTitle ] =  useState<string>('');
  const [ content, setContent ] =  useState<string>('');

  const [ showConfirmModal, setShowConfirmModal ] = useState<boolean>(false);

  const goBack = () => {
    navigation.goBack();
  }  

  return (
    <View style={{ flex: 1 }}>
      <ConfirmModal content={`변경 사항이 있습니다 
정말로 등록을 취소 하겠습니까?`} open={showConfirmModal} onClose={() => setShowConfirmModal(false)} onConfirm={goBack} overlayClose={true}/>
      <PopUpHeader onPress={() => setShowConfirmModal(true)}/>
      <ScrollView style={styles.screen}>
        <Text style={styles.titleText}>{type === 'post' ? '공지사항' : '게시물'} 등록하기</Text>
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.inputTitleText}>제목</Text>
            <PostInput placeholder="제목을 입력해주세요" onChangeText={setTitle} value={title}/>
          </View>
          <View>
            <Text style={styles.inputTitleText}>내용</Text>
            <PostInput multiline={true} placeholder="내용을 입력해주세요 <마크다운문 가능>" onChangeText={setContent} value={content} height={380}/>
          </View>
        </View>
      </ScrollView>
      <View style={styles.FLBWrapper}>
        <PrimaryButton title="등록하기" onPress={() => {}} disabled={title === '' || content === ''}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 23,
    paddingVertical: 19,
  },
  titleText: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: palette.black,
    marginBottom: 32,
  },
  inputTitleText: {
    fontSize: 14,
    fontWeight: fontWeight.medium,
    color: palette.black,
    marginBottom: 4,
  },
  contentWrapper: {
    gap: 8,
  },
  FLBWrapper: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  }
});