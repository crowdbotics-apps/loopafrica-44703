import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import Button from "../button"
import { useNavigation } from "@react-navigation/native"
import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Logout = props => {
  const { isLogout, type } = props

  const navigation = useNavigation()

  const handleLogout = () => {
    Toast.show({
      type: "success",
      props: { heading: "Logout", desc: "Logout successfully !!!" }
    })
    console.log("oooooppppppp")
    props?.route?.params?.auth?.signOut()
  }

  const handleDeleteAccountAPI = () => {}

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitleTxt}>
        {type === "logout"
          ? "Are you sure you want to Logout?"
          : "Are you sure you want to delete your account?"}
      </Text>
      <View style={styles.btnWpr}>
        <Button
          name={"No, Cancel"}
          btnStyle={styles.modalCancel}
          handleOnpress={() => isLogout(false)}
        />
        <Button
          name={type === "logout" ? "Logout" : "Delete"}
          btnStyle={styles.logoutBtn}
          handleOnpress={() => {
            isLogout(false)
            if (type === "logout") handleLogout()
            else handleDeleteAccountAPI()
          }}
          nameStyle={styles.logoutTxt}
        />
      </View>
    </View>
  )
}

export default Logout
