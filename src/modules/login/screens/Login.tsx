import {  Platform, Alert } from 'react-native'
import React from 'react'
import * as C from '../styles/login.styles'
import Input from '../../../shered/components/Inputs/Input'
import Button from '../../../shered/components/buttom/Button'
import Text from '../../../shered/components/text/Text'
import { textTypes } from '../../../shered/components/text/textTypes'


const Login = () => {
  const handleOnPress = () => {
    Alert.alert("Clicou")
  }

  return (
    <C.ContainerLogin behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text type={textTypes.SUB_TITLE_BOLD}  color='#000'>Login</Text>
      <Input />
      <Button margin='8px' title='ENTRAR' onPress={handleOnPress}/>
    </C.ContainerLogin>
  )
}

export default Login

