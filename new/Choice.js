import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput,Button, Alert,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ShowProfile from './showProfile'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function   Choice({navigation}) {
  
   
    return(
  <View style={styles.container} >
 

        <TouchableOpacity style={styles.loginBtn}
        onPress={()=>navigation.navigate('Login')}

>
        <Text style={styles.loginText}>To Admin login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
        onPress={()=>navigation.navigate('UserLogin')}

>
        <Text style={styles.loginText}>To User login</Text>
      </TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "40%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    width: "100%",
    height: 50,
    flex: 1,
    padding: 10,

    borderRadius: 30,
  },
 
 
 
  loginBtn: {
    width: "25%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  }, 
  
 
});
