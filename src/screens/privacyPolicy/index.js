import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { CIRCLE_ARROW } from "../../utils/images"
import styles from "./style"

const PrivacyPolicy = (props) => {
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
          <TouchableOpacity style={{ width: "10%" }} onPress={() => {
            props?.navigation?.goBack();
          }}>
            <Image source={CIRCLE_ARROW} />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.headerTitle}>Privacy Policy</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Text style={styles.termTxt}>Privacy Policy</Text>
          <ScrollView style={{ paddingBottom: 20, marginBottom: 20 }}>
            <Text style={styles.descTxt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default PrivacyPolicy
