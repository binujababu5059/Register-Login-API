import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableHighlight,Alert} from 'react-native';

export default function Login({navigation}){

const [emailorphonenumber, setEmailorphonenumber] = useState('');
const [password, setPassword] = useState('');

Login =()=>{
    if(emailorphonenumber && password){
      fetch('https://api.oopacks.com/api/test/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: password
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Login',response)
        Alert.alert('Login successfully')
        navigation.navigate('Home')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
    
    } else {
      console.log('Login error')
      Alert.alert('username or password incorrect')
    }
    
}

    return(
        
        <View style = {styles.container}>
             <View style={styles.container1}>
                 <Text style={styles.text}>OOPACKS</Text>
             </View>
             <View style={styles.container2}>
                 <Text style={styles.text1}>Login</Text>
                 <TextInput style={styles.input} 
                  placeholder="Email" 
                  placeholderTextColor="#000"
                  onChangeText={(email) => setEmailorphonenumber(email)}>
                 </TextInput>
                 <TextInput style={styles.input1} 
                  placeholder="Password" 
                  placeholderTextColor="#000" 
                  secureTextEntry
                  onChangeText={(password) => setPassword(password)}>
                 </TextInput>
                 <TouchableHighlight 
                  onPress={()=>Login()} 
                  style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableHighlight>
                  <View style={styles.container3} >
                     <Text 
                       onPress={()=>navigation.navigate('Register')} 
                       style={styles.text2}>Don't have any account? Sign Up</Text>
                </View>
               
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000"
    },
    container1:{
        height:"20%",
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#000"
    },
    text:{
        fontSize:25,
        color:"#fff"
    },
    container2:{
        height:"80%",
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f2f2f2',
        borderTopLeftRadius:80
    },
    input:{
        borderWidth:1,
        borderColor:"gray",
        width:"80%",
        marginBottom:20,
        marginTop:30
    },
    input1:{
        borderWidth:1,
        borderColor:"gray",
        width:"80%",
        marginBottom:20
    },
    button:{
        height:50,
        width:"70%",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:"#000"
    },
    container3:{
        width:'100%',
        height:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        fontSize:14,
        color:"#000",
    }    
})