import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const Button = styled.TouchableHighlight`
  background-color: red;
  height: 40;
  display: flex;
  align-items: center;
  justify-content: center;
`

const App:React.FC = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Button><Text>Comprar</Text></Button>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})