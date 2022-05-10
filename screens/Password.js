import React, {useState}from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet,Alert} from 'react-native';


export default function Password(){

const [emailorphonenumber, setEmailorphonenumber] = useState('');
const [cpassword, setCpassword] = useState('');

Register =()=>{
    if(emailorphonenumber && cpassword ){
      fetch('https://api.oopacks.com/api/test/forgotpassword',{
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: cpassword
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Password',response)
        // Alert.alert('Password Updated Successfully')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
      console.log(cpassword);
      console.log(emailorphonenumber)
    } else {
      console.log('Password error')
    }
    
  }
    return(
        <View
           style={styles.container}>
            <View style={styles.container1}>
               <Text style={styles.text}>Forgot password</Text>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.input} 
                 placeholder="Email" 
                 placeholderTextColor="#000"
                 onChangeText={(email) => setEmailorphonenumber(email)}>
                </TextInput>
                <TextInput style={styles.input} 
                 placeholder="Password" 
                 placeholderTextColor="#000" 
                 secureTextEntry
                 onChangeText={(cpassword) => setCpassword(cpassword)}>
                </TextInput>
                <TouchableHighlight 
                 onPress={()=>Password()} 
                 style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
               
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
        height:"15%",
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
        height:"85%",
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
        marginBottom:20
    },
    button:{
        height:50,
        width:"70%",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
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