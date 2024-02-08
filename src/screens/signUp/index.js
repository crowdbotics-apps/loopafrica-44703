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
import Step2 from "./step2"
import axios from "axios"


const SignUp = props => {


  const handleRegistration = () => {
    try {
      let data = JSON.stringify({
        name: "Lucky",
        full_name: "Mohd Lucky",
        first_name: "Mohd",
        last_name: "Lucky",
        email: "lucky.loophealth@gmail.com",
        gender: "Male",
        phone_number: "999999999",
        profile: {
          user_type: "patient"
        },
        patient_info: {
          age: 29,
          address: "India",
          age_range: "18-29",
          health_today: "healthiest",
          busy_schedule: "barely",
          support_needed: "immune_health"
        },
        password: "lucky@123",
        confirm_password: "lucky@123"
      })

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://silent-sea-44703.botics.co/rest-auth/registration/",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        data: data
      }

      axios
        .request(config)
        .then(response => {
          console.log(JSON.stringify(response.data))
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.wdh10}
            onPress={() => {
              props?.navigation?.goBack()
            }}
          >
            <Image source={ARROW_LEFT_WHITE} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            {/* <Image source={REGISTER_USER} /> */}
          </View>
          <View style={styles.wdh10} />
        </View>
        <View style={styles.bodyContainer}>
          <ScrollView>
            <Step2 navigation={props?.navigation} />
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

export default SignUp
