import { Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import * as C from './button.styles'

interface ButtonProps extends TouchableOpacityProps{
  title:string
  margin?:string
}

const Button = ({title,...props}:ButtonProps) => {
  return (
    <C.Button margin={props.margin} {...props}>
      <C.TitleButton>{title}</C.TitleButton>
    </C.Button >
     
  
  )
}

export default Button