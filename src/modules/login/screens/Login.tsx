import {  Text, Platform, Alert } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'
import Button from '../../../shered/components/buttom/Button'


const Login = () => {
  const handleOnPress = () => {
    Alert.alert("Clicou")
  }

  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text>Login</Text>
      <Input />
      <Button margin='8px' title='ENTRAR' onPress={handleOnPress}/>
    </C.ContainerLogin>
  )
}

export default Login

