import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import {
  CIRCLE_ARROW,
  HOME1,
  HOME2,
  HOME3,
  HEART,
  HOME4,
  PROFILE,
  NOTIFICATION,
  SETTING,
  BOOK,
  HOME_CONTACT
} from "../../utils/images"
import styles from "./style"
import { SCREEN_WIDTH } from "../../utils/size"

const Home = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 4,
          backgroundColor: "#01E5C0"
          // alignItems: "center",
          // justifyContent: "center"
        }}
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20
            // paddingBottom: 20
          }}
        >
          <View>
            <Image source={PROFILE} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                props?.navigation?.navigate("Welcome")
                // props?.navigation?.navigate("Notification")

              }}
            >
              <Image source={NOTIFICATION} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props?.navigation?.navigate("AccountSetting")
              }}
            >
              <Image source={SETTING} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.feelTxt}>How are you feeling today?</Text>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <TouchableOpacity onPress={() => {
            props?.navigation?.navigate("TelehealthAppointment")
          }}>
            <Image source={BOOK} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // props?.navigation?.navigate("GroupTelehealthSession")
            props?.navigation?.navigate("ContactUs")
          }}>
          <Image source={HOME_CONTACT} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.headerContainer}>
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
            <Text style={styles.headerTitle}>Terms and Conditions</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View> */}
      </View>
      <View style={{ flex: 6 }}>
        <ScrollView>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 20
            }}
          >
            <ScrollView horizontal={true}>
              {[1, 1, 1, 1, 1, 1].map(() => {
                return (
                  <View style={{ marginRight: 10 }}>
                    <Image source={HOME3} />
                    <View
                      style={{ position: "absolute", left: "35%", top: 25 }}
                    >
                      <Image source={HEART} />
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Image source={HOME2} />
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Image source={HOME1} />
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 20,
              borderRadius: 10
            }}
          >
            <ScrollView horizontal={true}>
              {[1].map(() => {
                return (
                  <View style={{}}>
                    <Image
                      source={HOME4}
                      style={{
                        borderRadius: 10,
                        width: SCREEN_WIDTH - 10,
                        alignSelf: "center"
                      }}
                      resizeMode="cover"
                    />
                    <View
                      style={{
                        position: "absolute",
                        left: "34%",
                        top: 15,
                        width: "50%"
                      }}
                    >
                      <Text style={styles.eatTxt}>Eat Healthy Today</Text>
                      <Text style={styles.mealTxt}>
                        Get a meal plan for your health goals
                      </Text>
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
