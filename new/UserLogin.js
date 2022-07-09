import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput,Button, Alert,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ShowProfile from './showProfile'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class  UserLogin extends Component {
  
   state={
      inputNames:'',
      inputpassword:'',
     
    }
    insertUsers=async()=>{
const {inputNames}=this.state
const {inputpassword}=this.state

await AsyncStorage.setItem('Name', inputNames)
await AsyncStorage.setItem('password', inputpassword)

fetch('http://127.0.0.1/Api/login.php',
{
method:'POST',
headers:{
  'Accept': 'application/json',
  'Content-Type': 'application/json'

},
body:JSON.stringify({
names:inputNames,
passwords:inputpassword,

})

}).then((response)=> response.json())
  .then((responseJson)=> {
if(responseJson=='ok'){
  
this.props.navigation.navigate("UserTabs")
}
else{
  alert("wrong username or password")
}

    

  }).catch((error)=>{
    console.error(error);
  })

    } 




render(){
  
    return(
  <View style={styles.container} >
    <Text>User Login</Text>
   <View style={styles.inputView}>
<TextInput
style={styles.TextInput}
placeholder='enter name'
onChangeText={value=>this.setState({inputNames:value})}

/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.TextInput}
placeholder='enter password'
secureTextEntry={true}
onChangeText={value=>this.setState({inputpassword:value})}
/>
</View>
<TouchableOpacity style={styles.loginBtn}
onPress={this.insertUsers}

>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
onPress={()=>this.props.navigation.navigate("SignUp")}

>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>




    </View>
  );
}}

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
