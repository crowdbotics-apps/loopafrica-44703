import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import Header from "../../components/header"
import styles from "./style"

const Terms = props => {
  return (
    <View style={styles.container}>
      <Header title={"Terms and Conditions"} />
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Text style={styles.termTxt}>Terms of Use</Text>
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

export default Terms
