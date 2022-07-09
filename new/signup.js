import React,{Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

export default class  SignUp extends Component {
    state={
      inputnames:'',
      inputemail:'',
      inputpasswords:'',
      inputage:'',
      inputJob_Tittle:'',
      inputExperiance:''
    }
  SignUps = () => {
    const { inputnames } = this.state
    const { inputemail } = this.state
    const { inputpasswords } = this.state
    const { inputage } = this.state
    const { inputJob_Tittle } = this.state
    const { inputExperiance } = this.state

    if (inputnames == "" || inputemail == "" || inputpasswords == "" || inputage == "" || inputJob_Tittle == "" || inputExperiance == "")
    {
      alert("please fill the form")
    }
    else {
      alert("Signed up sucessfully")
      fetch('http://127.0.0.1/Api/user.php',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            names: inputnames,
            email: inputemail,
            passwords: inputpasswords,
            age: inputage,
            Job_Tittle: inputJob_Tittle,
            Experiance: inputExperiance,
          })
        }).then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson)
        }).catch((error) => {
          console.error(error);
        })
  }
} 
  render()
  {
    return (
      <View style={{ margin: 100 }}>
        <TextInput
          style = {styles.inputContainer}
          placeholder='enter Name'
          onChangeText={value => this.setState({ inputnames: value })}
        />

        <TextInput
          style={styles.inputContainer}
          placeholder='enter Email'
          onChangeText={value => this.setState({ inputemail: value })}
        />

        <TextInput
          style={styles.inputContainer}
          placeholder='enter password'
          onChangeText={value => this.setState({ inputpasswords: value })}
        />
        
        <TextInput
          style={styles.inputContainer}
          placeholder='enter Age'
          onChangeText={value => this.setState({ inputage: value })}
        />
        
        <TextInput
          style={styles.inputContainer}
          placeholder='enter job tittle'
          onChangeText={value => this.setState({ inputJob_Tittle: value })}
        />
        
        <TextInput
          style={styles.inputContainer}
          placeholder='enter experiance'
          onChangeText={value => this.setState({ inputExperiance: value })}
        />

        <TouchableOpacity onPress={this.SignUps} style={styles.touchableOpacity}>
          <Text style={styles.title}>Sign Up</Text>
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
    height: 55,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    margin: 15,
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

