import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import { widthPercentageToDP } from "../../utils/size"
import Colors from "../../utils/colors"

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.flx1,
    backgroundColor: Colors.white
  },
  body: { flex: 7.5 },
  containerScreen: { ...CommonStyle.wd90, alignSelf: "center" },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center"
  },
  headerTitle: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  createNewPasswordTxt: {
    color: Colors.black1,
    fontSize: Math.round(widthPercentageToDP(5.2)),
    letterSpacing: 0.7,
    lineHeight: 21,
    fontFamily: "Poppins-Bold",
    marginTop: 40
  },
  descTxt: {
    color: "#A6A6A6",
    fontFamily: "Poppins-Bold",
    fontSize: Math.round(widthPercentageToDP(3)),
    marginTop: 10,
    marginBottom: 5
  },
  mrTp10: {
    
  },
  chngePassWpr: {
    ...CommonStyle.wd90,
    alignSelf: "center",
    ...CommonStyle.center,
    marginBottom: 20,
    marginTop: 30
  },
  errorTxt: {
    color: "rgba(226, 73, 7, 0.6)",
    fontWeight: "500",
    fontSize: Math.round(widthPercentageToDP(2.8)),
  },
  textInputStyle: {
    fontSize: Math.round(widthPercentageToDP(3)),
    fontFamily: "Poppins-Bold",
    color: "#001D4E",
    borderColor: "rgba(44, 44, 44, 0.1)",
    borderRadius: 11
  },
})

export default styles
