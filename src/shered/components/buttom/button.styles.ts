import styled from "styled-components/native";


interface ButtonProps {
  margin?:string
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 55px;
  border-radius: 4px;
  background-color: #0000ff;
  align-items: center;
  justify-content: center;
  ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
`

export const TitleButton = styled.Text`
  color: #fff;
`