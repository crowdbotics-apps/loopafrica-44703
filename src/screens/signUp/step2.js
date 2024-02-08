import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import styles from "./style"
import {
  CALENDAR,
  CIRCLE_EMPTY,
  CHECKBOX_SOLID,
  CHECKBOX_EMPTY
} from "../../utils/images"
import TwoTextInputRow from "../../components/twoTextInputRow"
import TextInputWithLabel from "../../components/textInputWithLabel"
import Button from "../../components/button"

const Step2 = props => {
  const [email, setEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <>
      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Email Address"}
        value={email}
        onChangeText={e => setEmail(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
      />
      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Create Password"}
        value={createPassword}
        onChangeText={e => setCreatePassword(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
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
            Password should have at least 1 numeral value and  one {" "}special
            character{" "}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Confirm Password"}
        value={confirmPassword}
        onChangeText={e => setConfirmPassword(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
      />

      <View
        style={{
          width: "100%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10
        }}
      >
        <TouchableOpacity>
          <Image source={CHECKBOX_SOLID} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.termTxt}>
          By signing up, I agree to your{" "}
          <Text style={{ color: "#2C4DF6" }}>Terms and Conditions</Text>
        </Text>
      </View>

      <Button
        name={"SUBMIT"}
        btnStyle={{ marginTop: 80, borderRadius: 5 }}
        handleOnpress={() => {
          props?.navigation?.navigate("RegisterDone")
        }}
      />
    </>
  )
}

export default Step2
