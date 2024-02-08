import { StyleSheet } from "react-native"
import Colors from "../../utils/colors"
import CommonStyle from "../../utils/commonStyle"
import { SCREEN_HEIGHT, widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#02B5F7",
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center"
  },
  titleTxt: {
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Regular",
    color: Colors.white
  },
  selectedTitle: {
    backgroundColor: "#96DAEF",
    borderColor: "#96DAEF"
  },
  selectedTitleClr: {
    color: "#001D4E"
  }
})
export default styles
