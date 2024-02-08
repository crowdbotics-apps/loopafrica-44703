import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import { widthPercentageToDP } from "../../utils/size"
import Colors from "../../utils/colors"
import { SCREEN_WIDTH } from "../../utils/size"

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
  textInputWithLabelWpr: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(221, 221, 221, 1)",
    borderRadius: 9,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 5
  },
  textInputStyle: {
    fontSize: Math.round(widthPercentageToDP(4)),
    color: "#001D4E",
    fontFamily: "Poppins-Regular",
    width: "90%"
  },
  commonTxt: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: Math.round(widthPercentageToDP(3.4)),
    fontFamily: "Poppins-Regular",
    marginTop: 15
  },
  commentTxtArea: {
    height: SCREEN_WIDTH / 3,
    textAlignVertical: "top",
    borderRadius: 12,
    borderColor: Colors.pacificBlue,
    marginBottom: 15,
    paddingVertical: 10,
    fontSize: Math.round(widthPercentageToDP(4)),
    color: "#001D4E",
    fontFamily: "Poppins-Regular",
  }
  
})

export default styles
