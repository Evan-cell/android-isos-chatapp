import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/base';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
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
      />
    </View>
  )
}

export default LoginScreen