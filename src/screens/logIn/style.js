import { StyleSheet } from "react-native"
import Colors from "../../utils/colors"
import CommonStyle from "../../utils/commonStyle"
import { SCREEN_HEIGHT, widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.flx1,
    backgroundColor: Colors.appThemeColor
  },
  logoWpr: {
    ...CommonStyle.flx7,
    ...CommonStyle.centerEnd
  },
  footerLogo: {
    ...CommonStyle.flx3,
    ...CommonStyle.centerEnd,
    paddingBottom: 15
  },
  footerImg: {
    ...CommonStyle.wd100
  },
  bgShadowWpr: { position: "absolute", bottom: -10, zIndex: -999 },

  textInputStyle: {
    backgroundColor: "rgba(141, 241, 255, 0.14)",
    borderWidth: 0,
    width: "90%",
    alignSelf: "center",
    height: 50,
    borderRadius: 10
  },
  forgotTxt: {
    fontSize: Math.round(widthPercentageToDP(3.6)),
    color: Colors.white,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    marginTop: 15
  }
})
export default styles
