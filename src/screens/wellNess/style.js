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
  headerTitle: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  activityTxt: {
    color: "rgba(0, 29, 78, 1)",
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Medium",
  },
  descTxt: {
    color: "rgba(44, 44, 44, 1)",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Regular",
    marginTop: 30,
    lineHeight: 24
  }
})

export default styles
