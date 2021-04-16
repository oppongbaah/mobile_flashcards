import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Take a quiz! 📬",
      body: "Hello, kindly note that you haven't taken a quiz today",
      data: { data: [] },
    },
    trigger: { seconds: 86400 }, // 86400 sec for 24 hours
  });
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {

    // ask for user's permission
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
   
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  }
  else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
}