import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import styles from "./style"
import { CALENDAR, CIRCLE_EMPTY, CHECKBOX_EMPTY } from "../../utils/images"
import TwoTextInputRow from "../../components/twoTextInputRow"
import TextInputWithLabel from "../../components/textInputWithLabel"
import Button from "../../components/button"

const Step2 = props => {
  return (
    <>
      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Create Password"}
        value={props?.createPassword}
        onChangeText={e => props?.setCreatePassword(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.dotStyle} />
          <Text style={styles.passwordValidationTxt}>
            Password should not be less that 8 charcters
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.dotStyle} />
          <Text style={styles.passwordValidationTxt}>
            Password should have at least 1 numeral value and one special
            character{" "}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Confirm Password"}
        value={props?.confirmPassword}
        onChangeText={e => props?.setConfirmPassword(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <Button
        name={"SUBMIT"}
        btnStyle={{ marginTop: 80 }}
        handleOnpress={() => {
          props?.handleCheckValidationStep2()
          // props?.navigation?.navigate("RegisterDone")
        }}
      />
    </>
  )
}

export default Step2
