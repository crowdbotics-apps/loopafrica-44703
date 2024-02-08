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

  body: { flex: 8.5 },
  HeaderRightSection: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  headerTitle: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  },
  bodyContainer: {
    width: "90%",
    alignSelf: "center"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(227, 227, 227, 1)",
    marginTop: 10,
    marginBottom: 15
  },
  titleTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(3)),
    fontFamily: "Poppins-Regular",
    lineHeight: 14
  },
  valueTxt: {
    color: "#001D4E",
    fontSize: Math.round(widthPercentageToDP(3.6)),
    fontFamily: "Poppins-Regular",
    lineHeight: 16,
    marginTop: 2
  },
  columnWpr: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default styles
