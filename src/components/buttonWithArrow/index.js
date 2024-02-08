import React from "react"
import { Text, TouchableOpacity, Image } from "react-native"
import { ARROW_RIGHT_BLUE, ARROW_RIGHT_PINK } from "../../utils/images"
import styles from "./style"

const ButtonWithArrow = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props?.select && styles.selectedTitle]}
      onPress={() => {
        props?.handleSelect(props?.index)
      }}
    >
      <Text style={[styles.titleTxt, props?.select && styles.selectedTitleClr]}>
        {props?.name}
      </Text>
      {props?.arrow ? null : props?.arrow === false ? null : (
        <Image source={props?.select ? ARROW_RIGHT_BLUE : ARROW_RIGHT_PINK} />
      )}
    </TouchableOpacity>
  )
}

export default ButtonWithArrow
