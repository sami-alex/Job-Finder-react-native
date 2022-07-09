import React from 'react'
import Choice from './new/Choice'
import UpdateJob from './new/update'
import AddJob from './new/AddJob'
import Login from './new/signin'
import DisplayJob from './new/Display'
import MoreInfo from './new/moreInfo'
import SignUp from './new/signup'
import UserLogin from './new/UserLogin'
import Jobs from './new/Jobs'
import ShowUsers from './new/showUsers'
import SplashScreen from './new/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image,View,Text } from 'react-native'
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const  UserTabs=({})=> {
 
  return (
     
    
   <Tab.Navigator>
    <Tab.Screen name="Jobs" component={Jobs} options={{ headerShown: false}}/>
  </Tab.Navigator>
  

  );
}


const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Jobs"
        component={DisplayJob}
        options={{ headerShown: false }} />
      
      <Tab.Screen name="Add Job"
        component={AddJob}
        options={{ headerShown: false }} />
      
      <Tab.Screen name="Show Users"
        component={ShowUsers}
        options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName='Tabs' */}
      <Stack.Navigator >
      
      <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Choice" component={Choice} options={{ headerShown: false, }} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="UserLogin" component={UserLogin}  />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="On Demand Jobs" component={Jobs} /> 
        <Stack.Screen name="Tabs" component={Tabs}  />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
        <Stack.Screen name="UpdateJob" component={UpdateJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



