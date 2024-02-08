import React, { useEffect } from "react"
import { View, Text, Image, InteractionManager } from "react-native"
import styles from "./style"
import { LOGO_WITH_NAME, LOGO_WITH_TAG, BG_SHADOW } from "../../utils/images"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Splash = props => {
  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        handleCheckAuth()
      })
      return () => task.cancel()
    }, [])
  )

  const handleCheckAuth = () => {
    let tempDataAuth = props?.route?.params?.auth
    // console.log("tempDataAuthtempDataAuthtempDataAuth: ", tempDataAuth)
    setTimeout(() => {
      AsyncStorage.getItem("data").then(value => {
        console.log("ffff", value)
        if (value !== null) {
          let tempData = JSON.parse(value)
          if (tempData?.key) {
            // navigation.navigate('BottomTabNavigator');
            tempDataAuth?.signIn()
          } else {
            props?.navigation.navigate("OnBoarding")
          }
        } else {
          //  tempDataAuth?.signIn()
          props?.navigation.navigate("OnBoarding")
        }
      })
    }, 4000)
  }


  return (
    <View style={styles.container}>
      <View style={styles.logoWpr}>
        <View style={styles.titleTagWpr}>
          <Image source={LOGO_WITH_NAME} resizeMode="contain" />
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

export default Splash
