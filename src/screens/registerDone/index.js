import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"
import styles from "./style"
import {
  LOGO_WITH_NAME,
  LOGO_WITH_TAG,
  BG_SHADOW,
  REGISTER_USER
} from "../../utils/images"
import Button from "../../components/button"

const RegisterDone = props => {
  console.log("====",props?.route?.params?.patientDetails?.email)
  return (
    <View style={styles.container}>
      <View style={styles.logoWpr}>
        <View style={styles.titleTagWpr}>
          <Image source={REGISTER_USER} resizeMode="contain" />
        </View>
        <Text style={styles.descTxt}>An email has been sent to</Text>
        <Text style={styles.emailTxt}>{props?.route?.params?.patientDetails?.email}</Text>
        <Text style={[styles.descTxt, { marginTop: 30 }]}>
          Click the link in the email to verify registeration
        </Text>
        <Button
          name={"DONE, LOG IN"}
          btnStyle={{
            width: "55%",
            marginTop: 80
          }}
          handleOnpress={() => {
            props?.navigation?.navigate("Login")
          }}
        />
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

export default RegisterDone
