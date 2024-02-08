import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import { widthPercentageToDP } from "../../utils/size"
import Colors from "../../utils/colors"

const styles = StyleSheet.create({
  modalContainer: {
    ...CommonStyle.wd90,
    backgroundColor: Colors.white,
    borderRadius: 6,
    padding: 20
  },
  modalTitleTxt: {
    fontFamily: "Poppins-Medium",
    color: Colors.appThemeColor,
    fontSize: Math.round(widthPercentageToDP(4.6)),
    width: "65%",
    alignSelf: 'center',
    textAlign:'center',
    marginTop: 20
  },
  btnWpr: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 5},
  modalCancel: { width: "45%" , },
  logoutBtn: {
    backgroundColor: Colors.orangeRed1,
    width: "45%",
    borderColor: Colors.orangeRed1
  },
  logoutTxt: {
    color: Colors.white
  }
})

export default styles
