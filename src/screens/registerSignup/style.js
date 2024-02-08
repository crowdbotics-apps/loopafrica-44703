import { StyleSheet } from "react-native"
import Colors from "../../utils/colors"
import CommonStyle from "../../utils/commonStyle"
import { SCREEN_HEIGHT, widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.flx1,
    backgroundColor: Colors.appThemeColor
  },
  headerContainer: {
    flex: 1.5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center"
  },
  headerCenter: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainBody: {
    ...CommonStyle.flx9
  },
  bodyContainer: {
    flex: 8.5,
    width: "85%",
    alignSelf: "center"
  },
  footerLogo: {
    ...CommonStyle.flx1,
    ...CommonStyle.centerEnd,
    paddingBottom: 15
  },
  footerImg: {
    ...CommonStyle.wd100
  },
  bgShadowWpr: { position: "absolute", bottom: -10, zIndex: -999 },
  wdh10: {
    ...CommonStyle.wd10
  },

  dobContainer: {
    width: "100%",
    marginTop: 10
  },
  dobWpr: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: "#005D9A",
    borderRadius: 5,
    marginTop: 5
  },
  labelTxt: {
    fontSize: Math.round(widthPercentageToDP(3.8)),
    color: Colors.white,
    fontFamily: "Poppins-Regular"
  },
  termTxt: {
    fontSize: Math.round(widthPercentageToDP(3.2)),
    color: Colors.white,
    fontFamily: "Poppins-Regular",
    width: "90%",
    textAlign: "center",
    // marginTop: 12,
    // marginLeft: -20
  },
  passwordValidationTxt: {
    fontSize: Math.round(widthPercentageToDP(3)),
    color: "#96DAEF",
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    marginTop: 2
  },
  dotStyle: {
    width: 3,
    height: 3,
    borderRadius: 3,
    borderColor: "#96DAEF",
    backgroundColor: "#96DAEF",
    marginRight: 5
  }
})
export default styles
