import React from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import styles from "./styles"
import CommonStyle from "../../utils/commonStyle"
// import SvgImages from "../../utils/svgImages"
import { EYE_CLOSE } from "../../utils/images"

const TextInputWithLabel = props => {
  const {
    label,
    labelStyle,
    textInputStyle,
    eyeToggle,
    isEyeToggle,
    eyeHide,
    ...rest
  } = props
  return (
    <View style={CommonStyle.wd100}>
      {label && (
        <Text style={[styles.labelTxt, labelStyle && labelStyle]}>{label}</Text>
      )}
      <TextInput
        style={[styles.textInputWpr, textInputStyle && textInputStyle]}
        {...rest}
      />
      {eyeHide && (
        <TouchableOpacity
          style={{ position: "absolute", right: 10, bottom: 15 }}
          onPress={() => {
            isEyeToggle(!eyeToggle)
          }}
        >
          {eyeToggle ? (
            <Image source={EYE_CLOSE} style={{ width: 20, height: 20 }} />
          ) : (
            <Image source={EYE_CLOSE} style={{ width: 20, height: 20 }} />
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TextInputWithLabel
