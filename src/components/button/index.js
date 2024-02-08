import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./styles"

const Button = props => {
  const { name, nameStyle, handleOnpress, btnStyle } = props
  return (
    <TouchableOpacity
      style={[styles.signUpWpr, btnStyle && btnStyle]}
      onPress={() => {
        handleOnpress && handleOnpress()
      }}
    >
      <Text style={[styles.signUpTxt, nameStyle && nameStyle]}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button
