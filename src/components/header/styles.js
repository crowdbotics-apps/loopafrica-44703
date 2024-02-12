import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import Colors from "../../utils/colors"
import { widthPercentageToDP } from "react-native-responsive-screen"

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: Colors.secondaryColor,
    ...CommonStyle.center
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    ...CommonStyle.wd90
  },
  leftWpr: {
    ...CommonStyle.wd10
  },
  rightWpr: {
    ...CommonStyle.wd10
  },
  centerWpr: {
    ...CommonStyle.wd80,
    ...CommonStyle.center
  },
  title: {
    color: Colors.appThemeColor,
    fontSize: Math.round(widthPercentageToDP(4.4)),
    fontFamily: "Poppins-Semibold"
  }
})
export default styles
