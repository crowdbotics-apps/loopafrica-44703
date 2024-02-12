import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { CIRCLE_ARROW } from "../../utils/images"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"

const Header = ({ title }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.leftWpr}
          onPress={() => {
            navigation?.goBack()
          }}
        >
          <Image source={CIRCLE_ARROW} />
        </TouchableOpacity>
        <View style={styles.centerWpr}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightWpr}></View>
      </View>
    </View>
  )
}
export default Header