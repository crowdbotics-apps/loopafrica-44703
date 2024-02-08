import { StyleSheet } from "react-native"
import CommonStyle from "../../utils/commonStyle"
import { SCREEN_WIDTH, widthPercentageToDP } from "../../utils/size"
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

  bodyWpr: {
    width: "90%",
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

  ratingTxt: {
    fontSize: Math.round(widthPercentageToDP(4)),
    fontFamily: "Poppins-Medium",
    color: "#001D4E"
  },
  ratingDoctorImgWpr: {
    ...CommonStyle.wd100,
    ...CommonStyle.center,
    marginTop: 20
  },
  doctorImg: {
    width: SCREEN_WIDTH / 4.5,
    height: SCREEN_WIDTH / 4.5,
    marginRight: 10
  },
  mrTp10: {
    marginTop: 10
  },
  mrTp15: {
    marginTop: 15
  },
  mrTp20: {
    marginTop: 20
  },
  starImg: {
    width: SCREEN_WIDTH / 20,
    height: SCREEN_WIDTH / 20,
    marginRight: 5
  },
  doctorName: {
    fontSize: Math.round(widthPercentageToDP(5.4)),
    fontFamily: "Poppins-Regular",
    color: "#001D4E",
    marginTop: 5
  },
  doctorCategory: {
    fontSize: Math.round(widthPercentageToDP(3.6)),
    fontFamily: "Poppins-Light",
    color: "#001D4E",
    marginTop: -3
  },
  flxClm: {
    flexDirection: "column"
  },
  ratingStarWpr: {
    position: "absolute",
    top: 15,
    left: "65%",
    flexDirection: "row"
  },
  doctorDetailsWpr: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "rgba(1, 224, 197, 0.25)",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 15
  },
  detailsWpr: {
    backgroundColor: "white",
    width: "30%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  numberTitleTxt: {
    fontSize: Math.round(widthPercentageToDP(6.6)),
    fontFamily: "Poppins-Semibold"
  },
  numberValueTxt: {
    fontSize: Math.round(widthPercentageToDP(3.2)),
    fontFamily: "Poppins-Light",
    color: "#09142F"
  },
  aboutDoctorWpr: {
    width: "100%",
    marginTop: 15,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  aboutDoctorTxt: {
    fontSize: Math.round(widthPercentageToDP(4.6)),
    fontFamily: "Poppins-Regular",
    color: "#09142F",
    marginBottom: 2
  },
  aboutDesc: {
    fontSize: Math.round(widthPercentageToDP(3.6)),
    fontFamily: "Poppins-Regular",
    color: "#959595",
    lineHeight: 20,
    textAlign: "justify"
  },
  seeMoreWpr: {
    width: "auto",
    alignSelf: "center",
    backgroundColor: "rgba(181, 235, 228, 0.45)",
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  arrowDownImg: { width: 12, height: 12, marginLeft: 10 },
  seeMoreTxt: {
    fontSize: Math.round(widthPercentageToDP(3.8)),
    fontFamily: "Poppins-Regular",
    color: "rgba(164, 164, 164, 1)"
  },
  scheduleMonthWpr: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  monthTxt: {
    fontSize: Math.round(widthPercentageToDP(3.6)),
    fontFamily: "Poppins-Regular",
    color: "rgba(151, 151, 151, 1)"
  },
  dateDayWpr: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  dateTxt: {
    fontSize: Math.round(widthPercentageToDP(6)),
    fontFamily: "Poppins-Semibold",
    color: "#001D4E"
  },
  dayTxt: {
    fontSize: Math.round(widthPercentageToDP(3.2)),
    fontFamily: "Poppins-Semibold",
    color: "#001D4E"
  },
  timeSlotWpr: {
    borderWidth: 1,
    borderColor: "#F1F1F1",
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft:15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  timeSlotTxt: {
    fontSize: Math.round(widthPercentageToDP(3.2)),
    fontFamily: "Poppins-Regular",
    color: "#001D4E"
  },
  btnNameStyle: {
    fontSize: Math.round(widthPercentageToDP(4.2)),
    fontFamily: "Poppins-Medium"
  },
  btnStyle: { width: "100%", marginBottom: 30, marginTop: 15  }
})

export default styles
