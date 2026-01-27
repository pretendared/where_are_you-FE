import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/mains/MainScreen';
import { NotificationScreen } from '../screens/notifications/NotificationScreen';
import { BoardInfoScreen } from '../screens/boards/BoardInfoScreen';
import { ProjectInfoScreen } from '../screens/projects/ProjectInfoScreen';
import { CommentScreen } from '../screens/communitys/CommentScreen';
import { ScheduleDetailScreen } from '../screens/schedules/ScheduleDetailScreen';
import { ProjectMemberScreen } from '../screens/projects/ProjectMemberScreen';
import { PostCreateScreen } from '../screens/communitys/PostCreateScreen';
import { SchedulMapDetailScreen } from '../screens/schedules/SchedulMapDetailScreen';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="BoardInfo" component={BoardInfoScreen} />
      <Stack.Screen name="ProjectInfo" component={ProjectInfoScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="ScheduleDetail" component={ScheduleDetailScreen} />
      <Stack.Screen name="ProjectMember" component={ProjectMemberScreen} />
      <Stack.Screen name="PostCreate" component={PostCreateScreen} />
      <Stack.Screen name="ScheduleMapDetail" component={SchedulMapDetailScreen} />
    </Stack.Navigator>
  )
}