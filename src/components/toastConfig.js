import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TOAST_SUCCESS, TOAST_ERROR } from "../utils/images";
import { widthPercentageToDP } from "../utils/size";
import Colors from "../utils/colors";
export const toastConfig = {
  // SUCCESS Toast
  success: ({ props }) => {
    if (props?.heading)
      return (
        <View style={[styles.commonWrp, styles.successWpr, styles.shadowWpr]}>
          <Image
            source={TOAST_SUCCESS}
            resizeMode="contain"
            style={styles.toastImg}
          />
          <View style={styles.pdgLt10}>
            <Text style={styles.headingTxt}>{props?.heading}</Text>
            <Text style={styles.successDescTxt}>{props?.desc}</Text>
          </View>
        </View>
      );
  },

  // ERROR Toast
  error: ({ props }) => {
    if (props?.heading)
      return (
        <View style={[styles.commonWrp, styles.errorWpr]}>
          <Image
            source={TOAST_ERROR}
            resizeMode="contain"
            style={styles.toastImg}
          />
          <View style={styles.pdgLt10}>
            <Text style={styles.headingTxt}>{props?.heading}</Text>
            <Text style={styles.descTxt}>{props?.desc}</Text>
          </View>
        </View>
      );
  },
};
const styles = StyleSheet.create({
  toast: {
    borderRadius: 4,
    marginHorizontal: 16,
    padding: 4,
    position: "absolute",
    top: 0,
    zIndex: 2,
    right: 0,
    backgroundColor: "#ff3f3f",
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 32,
  },
  commonWrp: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  successWpr: {
    backgroundColor: "#E0E0E6",
  },
  headingTxt: {
    color: Colors.black1,
    fontSize: Math.round(widthPercentageToDP(4.5)),
    fontWeight: "700",
  },
  descTxt: {
    color: Colors.orangeRed,
    fontSize: Math.round(widthPercentageToDP(4)),
    fontWeight: "300",
  },
  successDescTxt: {
    color: Colors.appThemeColor,
    fontSize: Math.round(widthPercentageToDP(4)),
    fontWeight: "400",
  },
  pdgLt10: {
    paddingLeft: 10,
    paddingRight: 10
  },
  errorWpr: {
    backgroundColor: "#f8f8f8",
  },
  shadowWpr: {
    shadowColor: "#76adff2b",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.58,
    shadowRadius: 19.0,
    elevation: 20,
  },
  toastImg: { width: 30, height: 30 },
});
