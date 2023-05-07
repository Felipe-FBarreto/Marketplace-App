import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import * as C from './button.styles'
import Text from '../text/Text'
import { theme } from '../themes/theme/theme'
import { textTypes } from '../text/textTypes'

interface ButtonProps extends TouchableOpacityProps{
  title:string
  margin?:string
}

const Button = ({title,...props}:ButtonProps) => {
  return (
    <C.Button margin={props.margin} {...props}>
      <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</Text>
    </C.Button >
     
  
  )
}

export default Button