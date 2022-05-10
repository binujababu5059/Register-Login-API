import { View, Text, TextInput, StyleSheet, TouchableHighlight , Alert} from 'react-native'
import React, { useState } from 'react'



export default function Registers ({navigation}) {

  const[emailorphonenumber, setEmailorphonenumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);


  Registers =()=>{
    if(emailorphonenumber && password && firstname && lastname){
      fetch('https://api.oopacks.com/api/test/register',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailorphonenumber: emailorphonenumber,
          password: password,
          firstname: firstname,
          lastname: lastname
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('Response Register',response)
        Alert.alert('data inserted successfully')
      })
      .catch((error)=> {
        console.log('Login error',error)
      })
      console.log(firstname);
      console.log(lastname);
      console.log(password);
      console.log(emailorphonenumber)
    } else {
      console.log('Register error')
      Alert.alert('Register error')
    }
    
  }

   return (

    <View style={styles.container}>
       <View style={styles.container1}>
          <Text style={styles.text}>Sign Up</Text>
       </View>
       <View style={styles.container2}>
         <TextInput 
           placeholder="Email Id"
           style={styles.input}
           onChangeText={(email)=>setEmailorphonenumber(email)}
         />
         <TextInput
           placeholder="Password"
           style={styles.input}
           onChangeText={(password) => setPassword(password)}
           secureTextEntry
           underlineColorAndroid='#fff'
         />
         <TextInput 
           placeholder="First Name"
           style={styles.input}
           onChangeText={(fname) => setFirstname(fname)}
         />
         <TextInput 
           placeholder="Last Name"
           style={styles.input}
           onChangeText={(lname) => setLastname(lname)}
         />
        </View>
        <TouchableHighlight onPress={()=>Registers()} style={styles.button}>
            <View style={styles.container3}>
              <Text style={styles.text2}>Sign Up</Text>
            </View>
        </TouchableHighlight>
        <View style={styles.container4} >
             <Text onPress={()=>navigation.navigate('Login')} 
                style={styles.text2}>You have a account? Login</Text>
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
    },
    container4:{
        width:'100%',
        height:'5%',
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        alignItems:'center'
    }    
  }
)
