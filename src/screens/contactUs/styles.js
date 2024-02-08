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
  commonBtnWpr: {
    backgroundColor: "#D00202",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingTop:10,
    paddingBottom: 10,
    marginBottom: 30
  },
  numberTxt: {
    color: "#fff",
    fontSize: Math.round(widthPercentageToDP(6)),
    fontFamily: "Poppins-Medium",
  },
  commonTxt: {
    color: "#fff",
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Regular",
  },
  bgEnquiry: {
    backgroundColor: "#B5EBE4"
  },
  enquiryTxt: {
    color: "#001D4E"
  },
  bgEmail: {
    backgroundColor: "#96DAEF"
  },
  emailTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(5)),
    fontFamily: "Poppins-Regular",
  },
  callTxt: {
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Regular",
    color: "#001D4E",
    textAlign: 'center',
    marginBottom: 10
  },
  socialMediaWpr: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#01E5C0",
    padding: 5,
    marginRight: 20
  }
})

export default styles
