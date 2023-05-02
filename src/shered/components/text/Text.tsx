import {  Alert, TextProps as TextPropsNative} from 'react-native'
import React, { useMemo } from 'react'
import * as C from './text.style'
import { textTypes } from './textTypes'

interface TextProps extends TextPropsNative{
  color?:string
  type?:string
}

const Text = ({color,type,...props}:TextProps) => {

  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return "32px"
      default:
        return "16px"
    }
  },[type])

  return <C.Text fontSize={handleSize} color={color} {...props}/>
  
}

export default Text