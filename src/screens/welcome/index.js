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

const DESC = [
  { value: "Bi Weekly consultations with a Nigerian based doctor", id: "1" },
  { value: "Free data for consultation calls", id: "2" },
  { value: "1 emergency response per month ", id: "3" },
  { value: "Bi- annual blood test", id: "4" },
  {
    value: "Discounts at local gyms and for pharmaceutical subscriptions ",
    id: "5"
  },
  {
    value:
      "Access to extensive app features for centralized health records, appointment booking and medication purchases",
    id: "6"
  }
]

const Welcome = props => {
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
            <Text style={styles.headerTitle}>Your Plan</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <ScrollView>
            <Text style={[styles.welcomeTxt, { marginTop: 30 }]}>Welcome</Text>
            <Text style={[styles.joinedTxt, { marginTop: 20 }]}>
              You have Successfully joined the
            </Text>

            <Text style={[styles.welcomeTxt, { marginTop: 10 }]}>
              Loop Standard Plan
            </Text>
            <View style={{ width: "80%", alignSelf: "center" }}>
              <Text style={[styles.getTxt, { marginTop: 30, marginBottom: 10 }]}>You get..</Text>
              {DESC.map((obj, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      alignItems: "flex-start",
                      justifyContent:'flex-start',
                      width: "100%"
                    }}
                  >
                    <View style={styles.dotStyle} />
                    <View style={{bottom: 10}}>
                      <Text style={styles.pointTxt}>{obj?.value}</Text>
                    </View>
                  </View>
                )
              })}
            </View>

            <Button
              name={"Get Your Medkit"}
              nameStyle={styles.nameStyle}
              btnStyle={{ width: "100%", alignSelf: "center" }}
              handleOnpress={() => isLogout(true)}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Welcome
