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
  PushNotification.localNotificationSchedule({
    message: "Don't forget to take a quiz today",
    date: new Date(Date.now() + 60 * 1000 * 3600), // in 24 hours
    allowWhileIdle: false,
  });
}