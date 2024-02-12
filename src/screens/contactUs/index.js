import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import { INSTAGRAM, LINKEDIN, FACEBOOK, YOUTUBE } from "../../utils/images"
import Header from "../../components/header"
import styles from "./styles"

const SOCIAL_MEDIAL = [
  { name: "Instagram", image: INSTAGRAM, link: "", id: 1 },
  { name: "Facebook", image: FACEBOOK, link: "", id: 2 },
  { name: "LinkedIn", image: LINKEDIN, link: "", id: 3 },
  { name: "Youtube", image: YOUTUBE, link: "", id: 4 }
]

const ContactUs = props => {
  return (
    <View style={styles.container}>
      <Header title={"Contact Us"} />
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
          <ScrollView>
            <Text style={[styles.callTxt]}>Call</Text>
            <TouchableOpacity style={styles.commonBtnWpr}>
              <Text style={styles.numberTxt}>0802 345 0000</Text>
              <Text style={styles.commonTxt}>For Emergencies</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.commonBtnWpr, styles.bgEnquiry]}>
              <Text style={[styles.numberTxt, styles.enquiryTxt]}>
                0802 312 8675
              </Text>
              <Text style={[styles.commonTxt, styles.enquiryTxt]}>
                For Enquiries
              </Text>
            </TouchableOpacity>

            <Text style={[styles.callTxt]}>OR Email</Text>

            <TouchableOpacity style={[styles.commonBtnWpr, styles.bgEmail]}>
              <Text style={[styles.numberTxt, styles.emailTxt]}>
                Care@loopprimarycare
              </Text>
            </TouchableOpacity>

            <Text style={[styles.callTxt]}>Follow us on</Text>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 5
              }}
            >
              {SOCIAL_MEDIAL.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.socialMediaWpr} key={index}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default ContactUs
