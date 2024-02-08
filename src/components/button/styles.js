import { StyleSheet } from "react-native"
import Colors from "../../utils/colors"
import CommonStyle from "../../utils/commonStyle"
import { widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  signUpWpr: {
    ...CommonStyle.wd100,
    borderColor: Colors.btn1,
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    backgroundColor: Colors.btn1
  },
  signUpTxt: {
    color: Colors.white,
    fontFamily: "Poppins-Semibold",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    textAlign: "center"
  }
})

export default styles
