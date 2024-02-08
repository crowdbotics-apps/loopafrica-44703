import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import {
  CIRCLE_ARROW,
  ARROW_RIGHT_BLUE,
  DEFAULT_USER
} from "../../utils/images"
import styles from "./styles"
import { ACCOUNT_SETTING } from "../../utils/constants"
import Button from "../../components/button"
import Logout from "../../components/logout"
import ModalContainer from "../../components/modalContainer"

const Notification = props => {
  const [logout, isLogout] = useState(false)
  const [deleteAccount, isDeleteAccount] = useState(false)

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: "#01E5C0",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => {
              props?.navigation?.goBack()
            }}
          >
            <Image source={CIRCLE_ARROW} />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.headerTitle}>Notifications</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        
        <ScrollView>
         
         
        </ScrollView>
      </View>
    
    </View>
  )
}

export default Notification
