import { StyleSheet, Dimensions } from "react-native"
import CommonStyle from "../../utils/commonStyle"

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    backgroundColor: "#000000af",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    ...CommonStyle.centerEnd,
  },
  modalSubContainer: {
    ...CommonStyle.wd100,
    ...CommonStyle.center
  }
})

export default styles
