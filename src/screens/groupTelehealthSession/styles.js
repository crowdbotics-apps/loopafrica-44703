import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import { widthPercentageToDP } from "../../utils/size"
import Colors from "../../utils/colors"

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.flx1,
    backgroundColor: Colors.white
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center"
  },

  body: { flex: 7.3 },
  headerTitle: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  bottomTabTxt: {
    color: "#000000",
    fontSize: Math.round(widthPercentageToDP(3.4)),
    fontFamily: "Poppins-Regular",
    marginTop: 5
  },
  leaveTxt: {
    color: "#FFFFFF",
    fontSize: Math.round(widthPercentageToDP(3.6)),
    fontFamily: "Poppins-Medium",
  }
})

export default styles
