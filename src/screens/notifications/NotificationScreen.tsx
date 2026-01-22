import { View, StyleSheet, Text, ScrollView, Pressable, Image } from "react-native"
import { PopUpHeader } from "../../components/headers/PopUpHeader";
import { palette } from "../../styles/color";
import { TitleContent } from "../../components/commons/TitleContent";
import { useState } from "react";
import { fontWeight } from "../../styles/typography";
import { NotificationTile } from "../../components/tiles/NotificationTile";

export const NotificationScreen = () => {
  const [notificationCount, setNotificationCount] = useState(2);
  return (
    <View style={styles.notification}>
      <PopUpHeader/>
      <ScrollView style={styles.scrollView}>
      <View style={styles.contentWrapper}>
        <View style={styles.titleWrapper}>
          <TitleContent title="내 알림" content={notificationCount > 0 ? `${notificationCount}건의 알림들을 확인해보세요`: "현재 알림이 없네요" } />
            <View style={styles.buttonWrapper}>
                <Pressable style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>모두 삭제</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>모두 읽기</Text>
                </Pressable>
            </View>
        </View>
        {
          ( notificationCount > 0 ) ? (
          <View style={styles.listWrapper}>
            <Text>대충 알림 리스트들</Text>
            <NotificationTile title="테스트" content="북북예아" date="2025-05-11" isRead={true}/>
            <NotificationTile title="테스트" content="북북예아" date="2025-05-11" isRead={false}/>
          </View>
          ) : (
          <View style={styles.noSearchWrapper}>
            <Image 
              source={require("../../assets/images/backgrounds/no_search.png")} 
              style={styles.noSearchImage}
            />
            <Text style={styles.noSearchText}>알림 없음</Text>
          </View>
          )
        }
      </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  notification: {
    flex: 1,
    backgroundColor: palette.white,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 19,
    paddingVertical: 23.
  },
  titleWrapper: {
    gap: 20,
  },
  contentWrapper: {
    gap: 33,
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    paddingHorizontal: 21,
    paddingVertical: 6,
    backgroundColor: palette.gray[100],
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    fontWeight: fontWeight.bold,
    color: palette.gray[800],
    // 아래는 지피티가 넣어줌
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  listWrapper: {
    gap: 20,
  },
  noSearchWrapper: {
    marginTop: 67,
    alignItems: 'center',
    gap: 10,
  },
  noSearchImage: {
    width: 194.15,
    height: 238,
    resizeMode: 'contain',
  },
  noSearchText: {
    fontFamily: 'Pretendard-Variable',
    fontSize: 14,
    color: palette.gray[500],
    fontWeight: fontWeight.medium,
  },
});