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
  termTxt: {
    color: "rgba(44, 44, 44, 1)",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Regular",
    marginTop: 20
  },
  descTxt: {
    color: "rgba(44, 44, 44, 1)",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Regular",
    marginTop: 30,
    lineHeight: 24
  },
  eatTxt: {
    color: "#FFFFFF",
    fontSize: Math.round(widthPercentageToDP(7)),
    fontFamily: "Poppins-Semibold",
    flexWrap: "wrap",
    maxWidth: "100%",
    marginLeft: 20,
    lineHeight: 32
  },
  mealTxt: {
    color: "#FFFFFF",
    fontSize: Math.round(widthPercentageToDP(3.2)),
    fontFamily: "Poppins-Regular",
    marginLeft: 20,
    lineHeight: 19,
    marginTop: 5
  },
  feelTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(8)),
    fontFamily: "Poppins-Medium",
    width: "90%",
    alignSelf: "center"
  }
})

export default styles
