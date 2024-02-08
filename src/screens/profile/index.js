import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import styles from "./styles"
import { SCREEN_WIDTH } from "../../utils/size"
import Button from "../../components/button"

const Profile = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: "#01E5C0",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => {
              // props?.navigation?.goBack()
            }}
          >
            {/* <Image source={CIRCLE_ARROW} /> */}
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={[styles.bodyContainer, { marginTop: 30 }]}>
            <View style={styles.line} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={styles.titleTxt}>Full name:</Text>
              <Text style={styles.valueTxt}>John Smith</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.columnWpr}>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>Mobile No:</Text>
                <Text style={styles.valueTxt}>0810 2323 433</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>MR Number:</Text>
                <Text style={styles.valueTxt}>17773</Text>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={styles.titleTxt}>Email:</Text>
              <Text style={styles.valueTxt}> john.smith@email.com</Text>
            </View>
            <View style={styles.line} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={styles.titleTxt}>Address:</Text>
              <Text style={styles.valueTxt}>16 Glover road, Ikoyi, Lagos</Text>
            </View>
            <View style={styles.line} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={styles.titleTxt}>DOB:</Text>
              <Text style={styles.valueTxt}>10 - October - 1988</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.columnWpr}>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>Genotype:</Text>
                <Text style={styles.valueTxt}>ABC</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>Blood Blood:</Text>
                <Text style={styles.valueTxt}>17773</Text>
              </View>
            </View>

            <View style={styles.line} />
            <View style={styles.columnWpr}>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>Weight:</Text>
                <Text style={styles.valueTxt}>100kg</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={styles.titleTxt}>Height:</Text>
                <Text style={styles.valueTxt}>172cm</Text>
              </View>
            </View>

            <View style={styles.line} />
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={styles.titleTxt}>Disabled?:</Text>
              <Text style={styles.valueTxt}>A</Text>
            </View>
          </View>
        <View
          style={{
            width: SCREEN_WIDTH,
            backgroundColor: "#01E5C0",
            marginTop: 20
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Poppins-Semibold",
              padding: 10
            }}
          >
            Your Subscription
          </Text>
          <View style={{width: "90%", backgroundColor: "#fff", borderRadius: 15, alignSelf:'center'}}>
              <View>
                <Text>Loop Standard Plan</Text>
                <Text>1 Person</Text>
              </View>

          </View>
          <Button name={"UPGRADE"} btnStyle={{width:"90%", alignSelf:"center"}}/>
        </View>
        </ScrollView>

      </View>
    </View>
  )
}

export default Profile
