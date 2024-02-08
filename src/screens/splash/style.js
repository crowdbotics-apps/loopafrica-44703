import { StyleSheet } from "react-native"
import Colors from "../../utils/colors"
import CommonStyle from "../../utils/commonStyle"
import { SCREEN_HEIGHT, widthPercentageToDP } from "../../utils/size"

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.flx1,
    backgroundColor: Colors.appThemeColor
  },
  logoWpr: {
    ...CommonStyle.flx5,
    ...CommonStyle.centerEnd
  },
  footerLogo: {
    ...CommonStyle.flx5,
    ...CommonStyle.centerEnd,
    paddingBottom: 15
  },
  footerImg: {
    ...CommonStyle.wd100
  },
  bgShadowWpr: { position: "absolute", bottom: -10, zIndex: -999 }
})
export default styles
