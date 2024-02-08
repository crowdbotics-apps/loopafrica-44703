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

const AccountSetting = props => {
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
            <Text style={styles.headerTitle}>Account Settings</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <View style={styles.userProfileWpr}>
          <Image source={DEFAULT_USER} resizeMode="contain" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userNameTxt}>John Smith</Text>
            <Text style={styles.editTxt}>Edit my profile</Text>
          </View>
        </View>
        <ScrollView>
          {ACCOUNT_SETTING?.map((obj, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props?.navigation?.navigate(obj?.navigation)
                }}
                style={[
                  styles.boxWpr,
                  {
                    borderBottomWidth: index === 5 ? 0 : 1
                  }
                ]}
              >
                <View
                  style={{
                    width: "80%",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Image source={obj?.image} resizeMode="contain" />
                  <Text
                    style={[
                      styles.titleTxt,
                      obj?.name === "Delete account" && styles.deleteClr
                    ]}
                  >
                    {obj?.name}
                  </Text>
                </View>
                <Image source={ARROW_RIGHT_BLUE} resizeMode="contain" />
              </TouchableOpacity>
            )
          })}
          <Button
            name={"LOGOUT"}
            nameStyle={styles.nameStyle}
            btnStyle={{ width: "90%", alignSelf: "center" }}
            handleOnpress={() => isLogout(true)}
          />
        </ScrollView>
      </View>
      <ModalContainer
        modalVisible={logout}
        children={
          <Logout
            isLogout={isLogout}
            type={"logout"}
            navigation={props?.navigation}
            route={props?.route}
          />
        }
        modalClose={() => isLogout(false)}
      />
      <ModalContainer
        modalVisible={deleteAccount}
        children={
          <Logout
            isLogout={isDeleteAccount}
            type={"delete"}
            navigation={props?.navigation}
            route={props?.route}
          />
        }
        modalClose={() => isDeleteAccount(false)}
      />
    </View>
  )
}

export default AccountSetting
