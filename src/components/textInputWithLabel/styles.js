const { StyleSheet } = require("react-native")
import Colors from "../../utils/colors"
import { widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  labelTxt: {
    fontSize: Math.round(widthPercentageToDP(3.8)),
    color: Colors.white,
    fontFamily: "Poppins-Regular"
  },
  textInputWpr: {
    borderColor: "#005D9A",
    borderWidth: 1,
    borderRadius: 5,
    fontSize:  Math.round(widthPercentageToDP(4.2)),
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: Colors.white,
    height: 40,
    fontFamily: "Poppins-Regular"
  }
})

export default styles
