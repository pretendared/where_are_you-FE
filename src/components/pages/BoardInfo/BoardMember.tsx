import { StyleSheet, View, Text, ScrollView } from "react-native"
import { TitleContent } from "../../commons/TitleContent";
import { palette } from "../../../styles/color";
import { fontWeight } from "../../../styles/typography";
import { MemberInfoTile } from "../../tiles/members/MemberInfoTile";
import { useState } from "react";

interface BoardMemberProps {
  title: string;
  host?: boolean;
}

export const BoardMember:React.FC<BoardMemberProps> = ({title, host}) => {

  const [guest, setGuest] = useState(null);
  
  return (
    <ScrollView style={styles.pageContainer}>
      <TitleContent title={`'${title}'의 여행 멤버`} content={`${title}의 여행 멤버를 확인해보세요`}/>
      <View style={styles.memberContainer}>
        <View style={styles.memberWrapper}>
          <View style={styles.memberTitleWrapper}>
            <Text style={styles.memberTitleText}>방장</Text>
            <View style={styles.horizonLine}/>
          </View>
          <MemberInfoTile nickname="hk2008" host={host}/>
          <MemberInfoTile nickname="hk2008" host={host}/>
        </View>
        <View style={styles.memberWrapper}>
          <View style={styles.memberTitleWrapper}>
            <Text style={styles.memberTitleText}>게스트</Text>
            <View style={styles.horizonLine}/>
          </View>
          <MemberInfoTile nickname="hk2008" host={host}/>
          <MemberInfoTile nickname="hk2008" host={host}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 23,
    paddingHorizontal: 21,
  },
  memberContainer: {
    marginTop: 40,
    gap: 28,
  },
  memberTitleText: {
    fontFamily: 'Pretendard-Variable',
    color: palette.black,
    fontSize: 22,
    fontWeight: fontWeight.bold,
  },
  memberTitleWrapper: {
    gap: 10,
  },
  horizonLine: {
    width: '100%',
    height: 1,
    backgroundColor: palette.gray[200],
  },
  memberWrapper: {
    gap: 20,
  }
});