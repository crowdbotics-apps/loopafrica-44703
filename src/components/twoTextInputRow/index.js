import React from "react"
import { View } from "react-native"
import TextInputWithLabel from "../../components/textInputWithLabel"
import styles from "./styles"

const TwoTextInputRow = props => {
  const {
    label1,
    label2,
    value1,
    textInputStyle,
    value2,
    setValue1,
    setValue2,
    placeholder1,
    placeholder2,
    editable,
    type1,
    type2,
    maxLength1,
    maxLength2
  } = props
  return (
    <View style={styles.rowWpr}>
      <View style={styles.wd45}>
        <TextInputWithLabel
          label={label1}
          editable={editable}
          value={value1}
          onChangeText={e => {
            if (type1 === "string") {
              let temp = (e + "").replace(/[^a-zA-Z ]/g, "")
              setValue1(temp)
            } else if (type1 === "number") {
              if (!isNaN(e) && e !== " ") setValue1(e)
            } else {
              if (placeholder1 === "YYYY-MM") {
                if ((e + "").length === 5) {
                  let temp = (e + "").substring(0, 3)
                  setValue1(temp)
                } else {
                  let temp = (e + "").replace(/[^0-9-]/g, "")
                  if (temp?.length === 4) temp = temp + "-"
                  setValue1(temp)
                }
              } else setValue1(e)
            }
          }}
          placeholder={placeholder1}
          placeholderTextColor="rgba(68, 200, 245, 0.4)"
          keyboardType="default"
          autoCapitalize="none"
          textInputStyle={[styles.textInputStyle, textInputStyle]}
          maxLength={maxLength1 && maxLength1}
        />
      </View>
      <View style={styles.wd45}>
        <TextInputWithLabel
          label={label2}
          editable={editable}
          value={value2}
          onChangeText={e => {
            if (type2 === "string") {
              let temp = (e + "").replace(/[^a-zA-Z ]/g, "")
              setValue2(temp)
            } else if (type2 === "number") {
              if (!isNaN(e) && e !== " ") setValue2(e)
            } else {
              setValue2(e)
            }
          }}
          placeholder={placeholder2}
          placeholderTextColor="rgba(68, 200, 245, 0.4)"
          keyboardType="default"
          autoCapitalize="none"
          textInputStyle={[styles.textInputStyle, textInputStyle]}
          maxLength={maxLength2 && maxLength2}
        />
      </View>
    </View>
  )
}

export default TwoTextInputRow
