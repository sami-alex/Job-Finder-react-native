import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View,FlatList,TextInput,Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function UpdateJob({navigation,route}) {
  const {item} = route.params;
  const [id,setid]=useState(item.id)
  const [title,settittle]=useState(item.Tittle)
  const [Descriptions,setDescriptions]=useState(item.Descriptions)
  const [	Types,setTypes]=useState(item.Types)
  const [Experiance,setExperiance]=useState(item.Experiance)
  const [Locations,setLocations]=useState(item.Locations)
  const [Salary,setSalary]=useState(item.Salary)
    
   const  update=()=>{


  if(title==""||Descriptions==""||Types==""||Experiance==""||Locations==""||Salary==""){
    alert("Please Fill the form")
    
          }
          else{
            fetch('http://127.0.0.1/Api/EditJob.php',
    {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    
    },
    body:JSON.stringify({
      id:item.id,
      Tittle:title,
      Descriptions:Descriptions,
      Types:Types,
      Experiance:Experiance,
      Locations:Locations,
      Salary:Salary
    })
    
    }).then((response)=> response.json())
      .then((responseJson)=> {
          alert(responseJson)
      }).catch((error)=>{
        console.error(error);
      })
            alert("sucessfully added")
          }

    } 






    return(
  <View style={{margin:100}}>
<TextInput
placeholder='enter id'
value={id}
editable={false}
/>

<TextInput
placeholder='enter Tittle'
value={title}
onChangeText={(value)=>settittle(value)}
editable={true}
/>

<TextInput
placeholder='enter job  Description'
value={Descriptions}
onChangeText={(value)=>setDescriptions(value)}
editable={true}
/>
<TextInput
placeholder='enter Type'
value={Types}
onChangeText={(value)=>setTypes(value)}
editable={true}
/>
<TextInput
placeholder='enter Experiance'
value={Experiance}
onChangeText={(value)=>setExperiance(value)}
editable={true}
/>
<TextInput
placeholder='enter Location'
value={Locations}
onChangeText={(value)=>setLocations(value)}
editable={true}
/>
<TextInput
placeholder='enter Salary'
value={Salary}
onChangeText={(value)=>setSalary(value)}
editable={true}
/>

<Button

title='Update'
 onPress={update}

/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30
  },
});
