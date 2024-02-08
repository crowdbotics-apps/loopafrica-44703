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
  emailTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Regular"
  },
  shareBtnWpr: {
    backgroundColor: "#02BAF2",
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    paddingTop:20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  shareTxt: {
    color: "#fff",
    fontSize: Math.round(widthPercentageToDP(5.2)),
    fontFamily: "Poppins-Medium",
    marginLeft: "12%"
  }
})

export default styles
