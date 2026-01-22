import { StyleSheet, View, ScrollView } from "react-native";
import { PopUpHeader } from "../../components/headers/PopUpHeader";
import { useState } from "react";
import { TitleContent } from "../../components/commons/TitleContent";
import { palette } from "../../styles/color";
import { MemberInfoTile } from "../../components/tiles/members/MemberInfoTile";


export const ProjectMemberScreen= () => {

  const [title, setTitle] = useState<any>('가자가자부산으로가자');
  const [board, setBoard] = useState<any>('보드');
  const [host, setHost] = useState<boolean>(true);
  return (
    <View style={styles.screen}>
      <PopUpHeader/>
      <ScrollView style={styles.contentWrapper}>
        <View>
          <TitleContent title={`'${title}'의 여행프로젝트`} content={`${board} 여행 멤버를 확인하세요`} />
          <MemberInfoTile nickname="홍길동" host={host} />
          <MemberInfoTile nickname="김철수" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 23,
    paddingVertical: 19,
    backgroundColor: palette.white,
    flex: 1,
  },

});