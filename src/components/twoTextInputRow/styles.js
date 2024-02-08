import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import Colors from "../../utils/colors"

const styles = StyleSheet.create({
  textInputStyle: {
    // borderRadius: 5,
    // color: Colors.black,
    // borderColor: "#F0EFEE"
  },
  wd45: {
    width: "48%"
  },
  rowWpr: {
    ...CommonStyle.wd100,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default styles
