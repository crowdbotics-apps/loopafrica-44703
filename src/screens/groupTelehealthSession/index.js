import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native"
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
import { MUTE, VIDEO, USER, MORE, BG_SESSION } from "../../utils/images"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/size"

const YOGA_SETTING = [
  { name: "Unmute", img: MUTE },
  { name: "Video", img: VIDEO },
  { name: "People", img: USER },
  { name: "More", img: MORE }
]

const GroupTelehealthSession = props => {
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
            style={{ width: "20%", alignItems: 'flex-start' }}
            onPress={() => {
              props?.navigation?.goBack()
            }}
          >
            {/* <Image source={CIRCLE_ARROW} /> */}
            <View
              style={{
                borderRadius: 5,
                backgroundColor: "#E02901",
                width: "auto",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                paddingTop: 3,
                paddingBottom: 3
              }}
            >
              <Text style={styles.leaveTxt}>Leave</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.headerTitle}>Yoga Session</Text>
          </View>
          <View style={{ width: "20%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5, backgroundColor: "transparent"}}>
        <ScrollView style={{ flex: 9.5 }}>
          <ImageBackground
            source={BG_SESSION}
            resizeMode="cover"
            style={{ width: "100%", height: SCREEN_HEIGHT }}
          />
        </ScrollView>
        <View
          style={{
            backgroundColor: "#01E5C0",
            borderWidth: 3,
            borderColor: "#FFFFFF",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomWidth: 0,
            alignItems: "center",
            justifyContent: "center",
            position: 'absolute',
            bottom: 0,
            height: SCREEN_HEIGHT / 6,
            width: '100%'

          }}
        >
          <View
            style={{
              width: "90%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center"
            }}
          >
            {YOGA_SETTING.map((obj, index) => {
              return (
                <TouchableOpacity
                  style={{ alignItems: "center", justifyContent: "center" }}
                  onPress={() => {
                    props?.navigation?.navigate("PeopleSession")
                  }}
                >
                  <Image
                    source={obj.img}
                    resizeMode="contain"
                    style={{
                      width: SCREEN_WIDTH / 11,
                      height: SCREEN_WIDTH / 11
                    }}
                  />
                  <Text style={styles.bottomTabTxt}>{obj?.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </View>
    </View>
  )
}

export default GroupTelehealthSession
