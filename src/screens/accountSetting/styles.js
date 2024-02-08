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
  userNameWpr: {
    ...CommonStyle.wd90,
    flexDirection: "row",
    height: "100%",
    alignSelf: "center"
  },
  HeaderRightSection: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  headerTitle: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  titleTxt: {
    color: "rgba(0, 27, 53, 0.8)",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Medium",
    marginLeft: 10
  },
  deleteClr: {
    color: "rgba(220, 42, 64, 1)"
  },
  nameStyle: {
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  userProfileWpr: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
    marginTop: 20
  },
  userNameTxt: {
    color: "#091C3F",
    fontSize: Math.round(widthPercentageToDP(4.8)),
    fontFamily: "Poppins-Semibold"
  },
  boxWpr: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomColor: "rgba(44, 44, 44, 0.1)",
    marginBottom: 10
  },
  editTxt: {
    color: "#02BAF2",
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Medium"
  }
})

export default styles
