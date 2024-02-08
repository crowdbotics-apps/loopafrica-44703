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
  welcomeTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(5.6)),
    fontFamily: "Poppins-Semibold",
    textAlign: "center"
  },
  joinedTxt: {
    color: "#02B5F7",
    fontSize: Math.round(widthPercentageToDP(4.8)),
    fontFamily: "Poppins-Regular",
    textAlign: "center"
  },
  getTxt: {
    color: "#02B5F7",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Regular",
    textAlign: "left"
  },
  dotStyle: {
    backgroundColor: "#001D4E",
    width: 5,
    height: 5,
    borderRadius: 10,
    marginRight: 10,
    alignSelf:'flex-start'
  },
  pointTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Regular",
  }
})

export default styles
