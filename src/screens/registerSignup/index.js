import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import styles from "./style"
import {
  LOGO,
  LOGO_WITH_TAG,
  BG_SHADOW,
  ARROW_LEFT_WHITE,
  REGISTER_USER,
  PASSWORD_LOCK
} from "../../utils/images"
import Step1 from "./step1"
import Step2 from "./step2"
import axios from "axios"
import Toast from "react-native-toast-message"

const RegisterSignup = props => {
  const [firstName, setFirstName] = useState("")
  const [surName, setSurName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("Male")
  const [datePicker, isDatePicker] = useState(false)
  const [terms, isTerms] = useState(false)

  const [createPassword, setCreatePassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [step, setStep] = useState("1")
  const details = props?.route?.params?.details

  // console.log("details: ",details?.ageRange)

  const handleRegistrationAPI = () => {
    try {
      // const details = props?.route?.params?.details;
      const tempAgeRange = details?.ageRange?.filter(obj => obj.select === true)
      const tempHealthTodayArr = details?.healthTodayArr?.filter(
        obj => obj.select === true
      )
      const tempAverageDayArr = details?.averageDayArr?.filter(
        obj => obj.select === true
      )
      const tempWellnessGoalArr = details?.wellnessGoalArr?.filter(
        obj => obj.select === true
      )

      let data = {
        name: firstName,
        full_name: surName + " " + firstName + " " + middleName,
        first_name: firstName,
        last_name: middleName,
        email: email,
        gender: gender,
        phone_number: mobileNumber,
        profile: {
          user_type: "patient"
        },
        patient_info: {
          age: tempAgeRange[0]?.name.split("-")[0],
          address: address,
          age_range: tempAgeRange[0]?.value,
          health_today: "healthiest", //tempHealthTodayArr[0]?.name,
          busy_schedule: "barely", //tempAverageDayArr[0]?.name,
          support_needed: "immune_health" //tempWellnessGoalArr[0]?.name
        },
        password: createPassword,
        confirm_password: confirmPassword
      }

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://silent-sea-44703.botics.co/rest-auth/registration/",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
      }

      axios
        .request(config)
        .then(response => {
          console.log("000000")
          if (response?.status === 201) {
            Toast.show({
              type: "success",
              props: {
                heading: "Registration",
                desc: "Patient registered successfully"
              }
            })
            props?.navigation?.navigate("RegisterDone", {
              patientDetails: data
            })
          } else if (response?.status === 400) {
            Toast.show({
              type: "error",
              props: {
                heading: "Registration",
                desc: "User already registered with this e-mail"
              }
            })
          } else {
            Toast.show({
              type: "error",
              props: {
                heading: "Registration",
                desc: "Something went wrong, please try again"
              }
            })
          }
        })
        .catch(error => {
          console.log("ERROR: ", error?.response)
          if (error?.response?.status === 400) {
            Toast.show({
              type: "error",
              props: {
                heading: "Registration",
                desc: "User already registered with this e-mail"
              }
            })
          } else {
            Toast.show({
              type: "error",
              props: {
                heading: "Registration",
                desc: "Something went wrong, please try again"
              }
            })
          }
        })
    } catch (error) {}
  }

  const handleCheckValidationStep1 = () => {
    try {
      if (!surName?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Name",
            desc: "Surname can't be empty"
          }
        })
      } else if (!firstName?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Name",
            desc: "First name can't be empty"
          }
        })
      } else if (!middleName?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Name",
            desc: "Middle name can't be empty"
          }
        })
      } else if (!mobileNumber?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Mobile Number",
            desc: "Mobile number can't be empty"
          }
        })
      } else if (!(mobileNumber?.length >= 10 && mobileNumber?.length <= 12)) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Mobile Number",
            desc: "Mobile number range between 10-12 digits"
          }
        })
      } else if (!email?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Email Address",
            desc: "Email address can't be empty"
          }
        })
      } else if (!validateEmail(email)) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Email Address",
            desc: "Email address is invalid"
          }
        })
      } else if (!dob?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient DOB",
            desc: "Date of birth can't be empty"
          }
        })
      } else if (!address?.trim()) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient Address",
            desc: "Address can't be empty"
          }
        })
      } else if (!terms) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient",
            desc: "Please select agree"
          }
        })
      } else {
        setStep(parseInt(step) + 1)
      }
    } catch (error) {}
  }

  const handleCheckValidationStep2 = () => {
    try {
      const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
      if (!createPassword) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient",
            desc: "Password can't be empty"
          }
        })
      } else if (createPassword?.trim()?.length < 8) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient",
            desc: "Password should not be less than 8 characters"
          }
        })
      } else if (!passwordValidation.test(createPassword)) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient",
            desc: "At least 1 numeral value and one special character"
          }
        })
      } else if (createPassword !== confirmPassword) {
        Toast.show({
          type: "error",
          props: {
            heading: "Patient",
            desc: "Create and confirm password not match"
          }
        })
      } else {
        handleRegistrationAPI()
      }
    } catch (error) {}
  }

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.wdh10}
            onPress={() => {
              if (step == "1") {
                props?.navigation?.goBack()
              } else {
                setStep("1")
              }
            }}
          >
            <Image source={ARROW_LEFT_WHITE} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Image source={step == "1" ? REGISTER_USER : PASSWORD_LOCK} />
          </View>
          <View style={styles.wdh10} />
        </View>
        <View style={styles.bodyContainer}>
          <ScrollView>
            {step == "1" && (
              <Step1
                step={step}
                setStep={setStep}
                firstName={firstName}
                setFirstName={setFirstName}
                surName={surName}
                setSurName={setSurName}
                middleName={middleName}
                setMiddleName={setMiddleName}
                mobileNumber={mobileNumber}
                setMobileNumber={setMobileNumber}
                email={email}
                setEmail={setEmail}
                dob={dob}
                setDob={setDob}
                address={address}
                setAddress={setAddress}
                gender={gender}
                setGender={setGender}
                datePicker={datePicker}
                isDatePicker={isDatePicker}
                handleCheckValidationStep1={handleCheckValidationStep1}
                terms={terms}
                isTerms={isTerms}
              />
            )}
            {step == "2" && (
              <Step2
                navigation={props?.navigation}
                createPassword={createPassword}
                setCreatePassword={setCreatePassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                handleCheckValidationStep2={handleCheckValidationStep2}
              />
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footerLogo}>
        <Image
          source={LOGO_WITH_TAG}
          resizeMode="contain"
          style={styles.footerImg}
        />
      </View>
      <View style={styles.bgShadowWpr}>
        <Image source={BG_SHADOW} resizeMode="contain" />
      </View>
    </View>
  )
}

export default RegisterSignup
