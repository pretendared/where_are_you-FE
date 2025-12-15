import { View, Text, StyleSheet, StatusBar,ScrollView } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryHeader } from "../components/Headers/PrimaryHeader"
import { palette } from "../styles/color"
import { TitleContent } from "../components/commons/TitleContent"
import { BoardTile } from "../components/tiles/BoardTile"
import boardDummy from "../../mock/boardDummy.json"
import { useEffect, useState } from "react"
import { FloatingActionButton } from "../components/buttons/FloatingActionButton"
import { MainBottomSheet } from "../components/bottomsheets/MainBottomSheet";
import { useNavigation } from "@react-navigation/native";

export const MainScreen = () => {
  const [boardData, setBoardData] = useState(boardDummy);
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <StatusBar barStyle='dark-content'/>
      <PrimaryHeader/>
      <FloatingActionButton onPress={() => navigation.openDrawer()}/>
      <ScrollView style={styles.scollScreen} contentContainerStyle={styles.scrollContent}>
          <TitleContent title="홈" content="소속된 보드들을 확인하세요"/>
          {boardData.map(
            item => <BoardTile 
            title={item.title}
            dDay={item.dDay}
            host={item.host}
            key={item.id}
            roomID={item.id}
            color={item.color}
            nickname={item.nickname}
              />
            )
          }
          <View style={{ height: 27 }}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.white,
  },
  scollScreen: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 21,
    paddingVertical: 27,
  },
  scrollContent: {
    gap: 18,
  },
});