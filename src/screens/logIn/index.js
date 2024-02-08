import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import styles from "./style"
import {
  LOGO_WITH_NAME,
  LOGO_WITH_TAG,
  BG_SHADOW,
  LOGIN_LOGO
} from "../../utils/images"
import TextInputWithLabel from "../../components/textInputWithLabel"
import Button from "../../components/button"
import axios from "axios"
// import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LogIn = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLoginAPI = () => {
    try {
      if (!email?.trim()) {
        // Toast.show({
        //   type: "error",
        //   props: {
        //     heading: "Login",
        //     desc: "Email address can't be empty"
        //   }
        // })
      } else if (!password?.trim()) {
        // Toast.show({
        //   type: "error",
        //   props: {
        //     heading: "Login",
        //     desc: "Password can't be empty"
        //   }
        // })
      } else {
        let data = JSON.stringify({
          username: "",
          email: email,
          password: password
        })
        let config = {
          method: "post",
          url: "https://silent-sea-44703.botics.co/rest-auth/login/",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json"
          },
          data: data
        }

        axios
          .request(config)
          .then(response => {
            console.log("00000: ", response?.data)
            if (response?.status === 200) {
              // Toast.show({
              //   type: "success",
              //   props: {
              //     heading: "Login",
              //     desc: "Login successfully !!!"
              //   }
              // })
              AsyncStorage.setItem("data", JSON.stringify(response?.data))
              props?.route?.params?.auth?.signIn()
              // props?.navigation?.navigate("Home")
            } else if (response?.status === 400) {
              // Toast.show({
              //   type: "error",
              //   props: {
              //     heading: "Login",
              //     desc: "Unable to log in with provided credentials."
              //   }
              // })
            }
          })
          .catch(error => {
            console.log("ERROR: ", error?.response?.data)
            if (error?.response?.status === 400) {
              // Toast.show({
              //   type: "error",
              //   props: {
              //     heading: "Login",
              //     desc: error?.response?.data?.hasOwnProperty(
              //       "non_field_errors"
              //     )
              //       ? error?.response?.data["non_field_errors"][0]
              //       : error?.response?.data?.hasOwnProperty("email")
              //       ? error?.response?.data["email"][0]
              //       : "Something went wrong"
              //   }
              // })
            } else {
              // Toast.show({
              //   type: "error",
              //   props: {
              //     heading: "Login",
              //     desc: "Something went wrong, please try again"
              //   }
              // })
            }
          })
      }
    } catch (error) {
      console.log("ooo: ", error)
    }
  }

  console.log("props?.route?.params?.auth: ", props?.route?.params?.auth)
  return (
    <View style={styles.container}>
      <View style={styles.logoWpr}>
        <View style={styles.titleTagWpr}>
          <Image source={LOGIN_LOGO} resizeMode="contain" />
        </View>
        <View style={{ marginTop: 45 }} />
        <TextInputWithLabel
          label={""}
          value={email}
          onChangeText={e => setEmail(e)}
          placeholder="Email"
          placeholderTextColor="#fff"
          keyboardType="default"
          autoCapitalize="none"
          textInputStyle={styles.textInputStyle}
        />

        <View style={{ marginTop: 5 }} />
        <TextInputWithLabel
          label={""}
          value={password}
          onChangeText={e => setPassword(e)}
          placeholder="Password"
          placeholderTextColor="#fff"
          keyboardType="default"
          autoCapitalize="none"
          textInputStyle={styles.textInputStyle}
          secureTextEntry={true}
        />
        <Button
          name={"LOGIN"}
          btnStyle={{
            width: "90%",
            marginTop: 15,
            borderRadius: 10
          }}
          handleOnpress={() => {
            // props?.navigation?.navigate("Home")
            handleLoginAPI()
          }}
        />

        <Text style={styles.forgotTxt}>Forgot password?</Text>
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

export default LogIn
