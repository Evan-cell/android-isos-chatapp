import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base';

const RegisterScreen = () => {
    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Input 
      placeholder='enter your Name'
      label='Name'
      leftIcon={{type:'material', name: 'badge'}}
      value={name}
      onChangeText={text => setName(text)}
      />
      <Input 
      placeholder='enter your email'
      label='Email'
      leftIcon={{type:'material', name: 'email'}}
      value={email}
      onChangeText={text => setEmail(text)}
      />
      <Input 
      placeholder='enter your ImageUrl'
      label='Profile Picture'
      leftIcon={{type:'material', name: 'face'}}
      value={imageUrl}
      onChangeText={text => setImageUrl(text)}
      />
      <Input 
      placeholder='enter your password'
      label='Password'
      leftIcon={{type:'material', name: 'lock'}}
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry
      />
       
       <Button title="Register" style={styles.mwaki} />
    </View>
  )
}


export default RegisterScreen
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