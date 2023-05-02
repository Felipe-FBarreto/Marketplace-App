import styled from "styled-components/native";

interface TextProps {
  color?: string;
  fontSize: string;
}

export const Text = styled.Text<TextProps>`
  ${(props)=> props.color ? `color: ${props.color};` : ""}
  font-size : ${(props)=> props.fontSize};
  font-family: Poppins-Italic;
`