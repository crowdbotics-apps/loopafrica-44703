import React, { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import styles from "./styles"
import TextInputWithLabel from "../../components/textInputWithLabel"
import Button from "../../components/button"
import Header from "../../components/header"

const ChangePassword = (props) => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [eyeToggle, isEyeToggle] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [eyeToggleNew, isEyeToggleNew] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [eyeToggleConfirm, isEyeToggleConfirm] = useState(false)
  const [loader, isLoader] = useState(false)
  const [validationError, setValidationError] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  useEffect(() => {}, [])

  const handleReset = () => {
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    isEyeToggle(false)
    isEyeToggleNew(false)
    isEyeToggleConfirm(false)
  }

  const handleChangePassword = () => {
    const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
    if (!currentPassword)
      setValidationError({
        currentPassword: "Password can't be empty"
      })
    else if (newPassword === currentPassword)
      setValidationError({
        currentPassword: "",
        newPassword: "Password can't be same as previous"
      })
    else if (!passwordValidation.test(newPassword)) {
      setValidationError({
        currentPassword: "",
        newPassword:
          "At least one capital letter, one number,one special character"
      })
    } else if (newPassword !== confirmPassword) {
      setValidationError({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "Password didn’t match, please retry"
      })
    } else {
      setValidationError({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
      let body = {
        old_password: currentPassword,
        new_password1: newPassword,
        new_password2: confirmPassword
      }
      isLoader(true)
      // dispatch(changePassword(body))
    }
  }

  return (
    <View style={styles.container}>
      <Header title={"Change Password"} />
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.containerScreen}>
            <Text style={styles.createNewPasswordTxt}>Create New Password</Text>
            <Text style={styles.descTxt}>
              Your new password must be different from previous used passwords.
            </Text>
            <TextInputWithLabel
              label={"  "}
              value={currentPassword}
              onChangeText={e => {
                setCurrentPassword(e)
              }}
              placeholder="Current password"
              placeholderTextColor="rgba(51, 51, 51, 0.4)"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry={!eyeToggle}
              // labelStyle={styles.mrTp10}
              isEyeToggle={isEyeToggle}
              eyeToggle={eyeToggle}
              eyeHide={true}
              textInputStyle={styles.textInputStyle}
            />
            <Text style={styles.errorTxt}>
              {validationError.currentPassword}
            </Text>
            <TextInputWithLabel
              label={""}
              value={newPassword}
              onChangeText={e => {
                setNewPassword(e)
              }}
              placeholder="New password"
              placeholderTextColor="rgba(51, 51, 51, 0.4)"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry={!eyeToggleNew}
              // labelStyle={styles.mrTp10}
              isEyeToggle={isEyeToggleNew}
              eyeToggle={eyeToggleNew}
              eyeHide={true}
              textInputStyle={styles.textInputStyle}
            />
            <Text style={styles.errorTxt}>{validationError.newPassword}</Text>
            <TextInputWithLabel
              label={""}
              value={confirmPassword}
              onChangeText={e => {
                setConfirmPassword(e)
              }}
              placeholder="Confirm new password"
              placeholderTextColor="rgba(51, 51, 51, 0.4)"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry={!eyeToggleConfirm}
              // labelStyle={styles.mrTp10}
              isEyeToggle={isEyeToggleConfirm}
              eyeToggle={eyeToggleConfirm}
              eyeHide={true}
              textInputStyle={styles.textInputStyle}
            />
            <Text style={styles.errorTxt}>
              {validationError.confirmPassword}
            </Text>
          </View>
          <View style={styles.chngePassWpr}>
            <Button
              name={"CHANGE PASSWORD"}
              handleOnpress={() => {
                handleChangePassword()
              }}
            />
          </View>
        </ScrollView>
      </View>
      {/* <Footer title={"Go Back"} handleBack={() => navigation.pop()} /> */}
    </View>
  )
}

export default ChangePassword
