import { View, Text } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home</Text>
      <View style={{width:'100%',height:'90%',justifyContent:'center',alignItems:'center'}} >
                     <Text 
                       onPress={()=>navigation.navigate('Password')} >Reset Password</Text>
                </View>
    </View>
  )
}