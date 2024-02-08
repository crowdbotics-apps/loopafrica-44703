import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import styles from "./style"
import {
  CALENDAR,
  CIRCLE_EMPTY,
  CHECKBOX_EMPTY,
  CIRCLE_SOLID,
  CHECKBOX_SOLID
} from "../../utils/images"
import TwoTextInputRow from "../../components/twoTextInputRow"
import TextInputWithLabel from "../../components/textInputWithLabel"
import Button from "../../components/button"
import DatePicker from "react-native-date-picker"
import moment from "moment"

const Step1 = props => {
  return (
    <>
      <TwoTextInputRow
        label1={"Patient name"}
        label2={"    "}
        value1={props?.surName}
        value2={props?.firstName}
        setValue1={props?.setSurName}
        setValue2={props?.setFirstName}
        placeholder1={"Surname"}
        placeholder2={"First name"}
        type1={"string"}
        type2={"string"}
        maxLength1={20}
        maxLength2={20}
      />
      <View style={{ marginTop: 10 }} />
      <TwoTextInputRow
        label1={"    "}
        label2={"Mobile number"}
        value1={props?.middleName}
        value2={props?.mobileNumber}
        setValue1={props?.setMiddleName}
        setValue2={props?.setMobileNumber}
        placeholder1={"Middle name"}
        placeholder2={"0234 567 4488"}
        type1={"string"}
        type2={"number"}
        maxLength1={20}
        maxLength2={12}
      />
      <View style={{ marginTop: 10 }} />
      <TextInputWithLabel
        label={"Email address"}
        value={props?.email}
        onChangeText={e => props?.setEmail(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.dobContainer}>
        <Text style={styles.labelTxt}>Date of birth</Text>
        <View style={styles.dobWpr}>
          <Text style={[styles.labelTxt, { paddingLeft: 10 }]}>
            {props?.dob
              ? moment(new Date(props?.dob)).format("DD-MMM-YYYY")
              : props?.dob}
          </Text>
          <TouchableOpacity
            onPress={() => {
              props?.isDatePicker(true)
              // if (editProfile) isDatePicker(true)
            }}
          >
            <Image source={CALENDAR} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dobContainer}>
        <Text style={styles.labelTxt}>Gender:</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 10
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props?.setGender("Male")
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.labelTxt}>Male</Text>
            <Image
              source={props?.gender === "Male" ? CIRCLE_SOLID : CIRCLE_EMPTY}
              style={{ width: 30, height: 30, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props?.setGender("Female")
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.labelTxt}>Female</Text>
            <Image
              source={props?.gender === "Female" ? CIRCLE_SOLID : CIRCLE_EMPTY}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 15 }} />
      <TextInputWithLabel
        label={"Address"}
        value={props?.address}
        onChangeText={e => props?.setAddress(e)}
        placeholder=""
        placeholderTextColor="transparent"
        keyboardType="default"
        autoCapitalize="none"
      />

      <View
        style={{
          width: "90%",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center',
          // paddingTop: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props?.isTerms(!props?.terms)
          }}
          style={{ width: "10%", alignItems:'center',marginRight: 5 }}
        >
          <Image
            source={props?.terms ? CHECKBOX_SOLID : CHECKBOX_EMPTY}
            style={{
              width:  props?.terms ? 20 :  20,
              height:  props?.terms ? 20 : 20
            }}
          />
        </TouchableOpacity>
        <View style={{ width: "80%" }}>
          <Text style={[styles.termTxt, { marginTop: 10}]}>
            I agree to the{" "}
            <Text style={{ color: "#44C8F5" }}>Terms & Conditions</Text> and{" "}
            <Text style={{ color: "#44C8F5" }}>Privacy Policy</Text>
          </Text>
        </View>
      </View>

      <Button
        name={"CONTINUE"}
        handleOnpress={() => {
          props?.handleCheckValidationStep1()
          // props?.setStep(parseInt(props?.step) + 1)
        }}
      />
      <>
        <DatePicker
          modal
          mode="date"
          open={props?.datePicker}
          date={props?.dob ? new Date(props?.dob) : new Date()}
          title={"Select Date of Birth"}
          onConfirm={date => {
            if (date) {
              props?.setDob(moment(date).format("YYYY-MM-DD"))
            }
            props?.isDatePicker(false)
          }}
          onCancel={() => {
            props?.isDatePicker(false)
          }}
          maximumDate={new Date("2006-12-31")}
        />
      </>
    </>
  )
}

export default Step1
