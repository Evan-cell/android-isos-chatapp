import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Input 
      placeholder='enter your email'
      label='Email'
      leftIcon={{type:'material', name: 'email'}}
      value={email}
      onChangeText={text => setEmail(text)}
      />
      <Input 
      placeholder='enter your password'
      label='Password'
      leftIcon={{type:'material', name: 'lock'}}
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry
      />
       <Button title="Sign In"    style={styles.mwaki} />
       <Button title="Register" style={styles.mwaki} />
    </View>
  )
}


export default LoginScreen
const styles = StyleSheet.create({
  mwaki:{
    width: 20 ,
    marginTop: 40,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 10,
  }
})