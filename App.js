import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as colors from './src/utils/colors';
import Dashboard from './src/Components/Dashboard';
import NewDeck from './src/Components/NewDeck';
import DeckDetails from './src/Components/DeckDetials';
import Quiz from './src/Components/Quiz';
import AddCard from './src/Components/AddCard';
import {Provider} from 'react-redux';
import store from './src/store';
import {StatusBar, View, Text, Button} from 'react-native';
import {registerForPushNotificationsAsync} from './src/utils/helpers';
import * as Notifications from 'expo-notifications';

const App = () => {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {

    const loadFont = async() => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      });
    }
   loadFont()

   registerForPushNotificationsAsync()
   .then(token => setExpoPushToken(token));

   notificationListener.current = Notifications
   .addNotificationReceivedListener(notification => {
     setNotification(notification);
   });
 
   responseListener.current = Notifications
   .addNotificationResponseReceivedListener(response => {
     console.log(response);
   });
 
   return () => {
     Notifications.removeNotificationSubscription(notificationListener);
     Notifications.removeNotificationSubscription(responseListener);
   };
  }, [])

  // create a tab navigation
  const Tab = createBottomTabNavigator();

  // create stack navigators
  const HomeStack = createStackNavigator();
  const NewDeckStack = createStackNavigator();

  const HomeScreen = () => {
    return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: (focused, size, color) => {
            let iconName;

            if(route.name === "Dashboard") {
              iconName = "home"
            }
            else if (route.name === "New Deck") {
              iconName = "add-circle-sharp"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={colors.primary} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 16,
            margin: 0,
            padding: 0
          },
          style: {
            backgroundColor: "silver"
          }
        }}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="New Deck" component={NewDeck}/>
        </Tab.Navigator>
    )
  }

  return (
    <Provider store={store}>

      <StatusBar
        animated={true}
        backgroundColor= {colors.primary}
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false} 
      />

      <NavigationContainer>
        <HomeStack.Navigator 
          initialRouteName="Mobile Flashcards"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle :{
              fontWeight: 'bold',
            },
          }}
        >
          <HomeStack.Screen 
            name="Mobile Flashcards"
            component={HomeScreen}
          />
          <HomeStack.Screen 
              name="Deck Details" 
              component={DeckDetails} 
              options={({route}) => ({title: route.params.title})} 
          />
          <HomeStack.Screen 
              name="Quiz"
              component={Quiz}
              options={({route}) => ({title: route.params.title})}
          />
          <HomeStack.Screen 
              name="Add Card"
              component={AddCard}
              options={({route}) => ({title: route.params.title})}
          />
          <NewDeckStack.Screen 
            name="Add New Deck" 
            component={NewDeck} 
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
