import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import {
  CIRCLE_ARROW,
  ARROW_RIGHT_BLUE,
  DEFAULT_USER,
  CROSS_RED,
  SHARE
} from "../../utils/images"
import styles from "./styles"
import { ACCOUNT_SETTING } from "../../utils/constants"
import Button from "../../components/button"
import Logout from "../../components/logout"
import ModalContainer from "../../components/modalContainer"

const PeopleSession = props => {
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
            <Text style={styles.headerTitle}>Yoga Session</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
          <ScrollView>
            {[1, 1, 1, 1, 1, 1, 1, 1].map(() => {
              return (
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10
                  }}
                >
                  <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: "#001D4E",
                        marginRight: 10
                      }}
                    />
                    <Text style={styles.emailTxt}>Maxwell@email.com</Text>
                  </View>
                  <Image
                    source={CROSS_RED}
                    resizeMode="contain"
                    style={{ width: 15, height: 15 }}
                  />
                </View>
              )
            })}
          </ScrollView>
          <TouchableOpacity style={styles.shareBtnWpr}>
            <Image
              source={SHARE}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30
              }}
            />
            <Text style={styles.shareTxt}>Share Invite Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PeopleSession
