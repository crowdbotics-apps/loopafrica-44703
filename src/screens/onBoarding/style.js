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
  titleTxt: {
    fontSize: Math.round(widthPercentageToDP(5.2)),
    fontFamily: "Poppins-Regular",
    color: Colors.white
  },
  descTxt: {
    fontSize: Math.round(widthPercentageToDP(4.6)),
    fontFamily: "Poppins-Regular",
    color: Colors.white,
    marginTop: 15
  },
  mainTxt: {
    fontSize: Math.round(widthPercentageToDP(5.2)),
    fontFamily: "Poppins-Semibold",
    color: "#01E0C5",
    marginTop: 15,
    marginBottom: 20
  },
  selectBoxWpr: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#02B5F7",
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center"
  },
  selectBoxTxt: {
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Regular",
    color: Colors.white
  }
})
export default styles
