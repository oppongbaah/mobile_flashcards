import PushNotification from "react-native-push-notification";

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

export function setLocalNotification() {

  let tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(24);
  // tomorrow.setMinutes(1);
            
  PushNotification.localNotificationSchedule({
    message: "Don't forget to take a quiz today",
    date: tomorrow,
    allowWhileIdle: false,
  });
}