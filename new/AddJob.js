import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput,Button, Alert,TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class  AddJob extends Component {
    state={
      inputTittle:'',
      inputDescription:'',
      inputType:'',
      inputExperiance:'',
      inputLocation:'',
      inputSalary:''

    }
    Addjobs=()=>{
      // this.props.navigation.navigate('Login')
const {inputTittle}=this.state
const {inputDescription}=this.state
const {inputType}=this.state
const {inputExperiance}=this.state
const {inputLocation}=this.state
const {inputSalary}=this.state
// fetch('http://127.0.0.1/Api/AddJob.php',
fetch('http://127.0.0.1/Api/AddJob.php',
{
method:'POST',
headers:{
  'Accept': 'application/json',
  'Content-Type': 'application/json'

},
body:JSON.stringify({
  
  Tittle:inputTittle,
  Descriptions:inputDescription,
  Types:inputType,
  Experiance:inputExperiance,
  Locations:inputLocation,
  Salary:inputSalary
})

}).then((response)=> response.json())
  .then((responseJson)=> {
     
  }).catch((error)=>{
    console.error(error);
  })
  if(inputTittle==""||inputDescription==""||inputType==""||inputExperiance==""||inputLocation==""||inputSalary==""){
    alert("Please Fill the form")
          }
          else{
            alert("sucessfully added")
          }
    } 




render(){

    return(
  <View style={{margin:100}}>
<TextInput
style = {styles.inputContainer}
placeholder='enter Tittle'
onChangeText={value=>this.setState({inputTittle:value})}

/>

<TextInput
style = {styles.inputContainer}
placeholder='enter job  Description'
onChangeText={value=>this.setState({inputDescription:value})}
/>
<TextInput
style = {styles.inputContainer}
placeholder='enter Type'
onChangeText={value=>this.setState({inputType:value})}

/>
<TextInput
style = {styles.inputContainer}
placeholder='enter Experiance'
onChangeText={value=>this.setState({inputExperiance:value})}

/>
<TextInput
style = {styles.inputContainer}
placeholder='enter Location'
onChangeText={value=>this.setState({inputLocation:value})}
/>
<TextInput
style = {styles.inputContainer}
placeholder='enter Salary'
onChangeText={value=>this.setState({inputSalary:value})}

/>
<TouchableOpacity
          onPress={this.Addjobs}
          style={styles.touchableOpacity}
        >
          <Text style={styles.title}>Insert Job</Text>
        </TouchableOpacity>



    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30
  },
  inputContainer: {
    height:35,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    margin:3,
  backgroundColor: 'rgba(255,255,255,0.9)'

  },
  touchableOpacity: {
    height: 50,
    width: '100%' ,
    backgroundColor: 'rebeccapurple',
    justifyContent: 'center',
    alignItems: 'center ',
    borderRadius: 20,
    marginTop: 15
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 60,
  }
});
