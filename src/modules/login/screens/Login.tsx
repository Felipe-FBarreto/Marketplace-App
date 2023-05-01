import {  Text, Platform, Alert } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'


const Login = () => {

  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text>Login</Text>
      <Input />
    </C.ContainerLogin>
  )
}

export default Login

