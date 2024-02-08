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
    ...CommonStyle.flx6,
    ...CommonStyle.centerEnd
  },
  footerLogo: {
    ...CommonStyle.flx4,
    ...CommonStyle.centerEnd,
    paddingBottom: 15
  },
  footerImg: {
    ...CommonStyle.wd100
  },
  bgShadowWpr: { position: "absolute", bottom: -10, zIndex: -999 },
  descTxt: {
    fontSize: Math.round(widthPercentageToDP(3.8)),
    color: Colors.white,
    fontFamily: "Poppins-Regular",
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    textAlign: 'center'
  },
  emailTxt: {
    fontSize: Math.round(widthPercentageToDP(3.8)),
    color: "#01E0C5",
    fontFamily: "Poppins-Medium",
    marginTop: 5
  }
})
export default styles
