import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from "react-native"
import {
  CIRCLE_ARROW,
  ARROW_RIGHT_BLUE,
  DEFAULT_USER,
  ARROW_DOWN_GRAY
} from "../../utils/images"
import styles from "./styles"
import { ACCOUNT_SETTING } from "../../utils/constants"
import Button from "../../components/button"
import Logout from "../../components/logout"
import ModalContainer from "../../components/modalContainer"
import { STAR_BLUE, APPOINTMENT_DEFAULT_USER } from "../../utils/images"

const DOCTOR_DETAILS = [
  { title: "Patients", value: "26+", id: 1, color: "#02B5F7" },
  { title: "Exp. Years", value: "15+", id: 2, color: "#01E5C0" },
  { title: "Reviews", value: "7+", id: 3, color: "rgba(237, 29, 36, 0.63)" }
]

const DAYS = [
  { date: 5, day: "Sun", id: 1, select: true, userSelect: false },
  { date: 6, day: "Mon", id: 2, select: false, userSelect: false },
  { date: 7, day: "Tue", id: 3, select: false, userSelect: false },
  { date: 8, day: "Wed", id: 4, select: false, userSelect: false },
  { date: 9, day: "Thu", id: 5, select: false, userSelect: false },
  { date: 10, day: "Fri", id: 6, select: false, userSelect: false },
  { date: 11, day: "Sat", id: 7, select: false, userSelect: false }
]

const TIME_SLOT = [
  { name: "11:00AM", id: 1, select: false },
  { name: "11:30AM", id: 2, select: false },
  { name: "12:00PM", id: 3, select: false },
  { name: "12:30PM", id: 4, select: false },
  { name: "01:00PM", id: 5, select: false },
  { name: "01:30PM", id: 6, select: false },
  { name: "02:00PM", id: 7, select: false },
  { name: "02:30PM", id: 8, select: false }
]

const TelehealthAppointment = props => {
  const [logout, isLogout] = useState(false)
  const [deleteAccount, isDeleteAccount] = useState(false)
  const [dateList, setDateList] = useState(DAYS)
  const [timeSlot, setTimeSlot] = useState(TIME_SLOT)

  const handleSelectDate = index => {
    let temp = []
    dateList?.map((obj, index1) => {
      let tempData = obj
      if (index === index1) {
        tempData.userSelect = true
      } else {
        tempData.userSelect = false
      }
      temp.push(tempData)
    })
    setDateList([...temp])
  }

  const handleSelectTime = index => {
    let temp = []
    timeSlot?.map((obj, index1) => {
      let tempData = obj
      if (index === index1) {
        tempData.select = true
      } else {
        tempData.select = false
      }
      temp.push(tempData)
    })
    setTimeSlot([...temp])
  }

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
              props?.navigation?.goBack()
            }}
          >
            <Image source={CIRCLE_ARROW} />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.headerTitle}>Appointment</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyWpr}>
          <ScrollView>
            <View style={styles.ratingDoctorImgWpr}>
              <Image
                source={APPOINTMENT_DEFAULT_USER}
                resizeMode="contain"
                style={styles.doctorImg}
              />
              <Text style={[styles.doctorName]}>Dr Wale Oni</Text>
              <Text style={styles.doctorCategory}>Dietician</Text>
              <View style={styles.ratingStarWpr}>
                <Image
                  source={STAR_BLUE}
                  resizeMode="contain"
                  style={[styles.starImg]}
                />
                <Text style={[styles.ratingTxt]}>4.5</Text>
              </View>
            </View>
            <View style={styles.doctorDetailsWpr}>
              {DOCTOR_DETAILS.map((obj, index) => {
                return (
                  <View style={styles.detailsWpr}>
                    <Text
                      style={[styles.numberTitleTxt, { color: obj?.color }]}
                    >
                      {obj?.value}
                    </Text>
                    <Text style={styles.numberValueTxt}>{obj?.title}</Text>
                  </View>
                )
              })}
            </View>
            <View style={styles.aboutDoctorWpr}>
              <Text style={styles.aboutDoctorTxt}>About Doctor</Text>
              <Text style={styles.aboutDesc}>
                Dr Wale Oni has over 25 years of experience in anaesthesiology.
                She rose from the cadres of Consultant, Sr. Consultant,
                Principal Consultant...
              </Text>
            </View>
            <View style={styles.seeMoreWpr}>
              <Text style={styles.seeMoreTxt}>See more</Text>
              <Image
                source={ARROW_DOWN_GRAY}
                style={styles.arrowDownImg}
                resizeMode="contain"
              />
            </View>
            <View style={styles.scheduleMonthWpr}>
              <Text style={styles.aboutDoctorTxt}>Schedules</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.monthTxt}>August</Text>
                <Image
                  source={ARROW_DOWN_GRAY}
                  style={{
                    width: 12,
                    height: 12,
                    transform: [{ rotate: "270deg" }],
                    marginLeft: 10
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
              <ScrollView horizontal={true}>
                {dateList.map((obj, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.dateDayWpr,
                        obj?.userSelect && { backgroundColor: "#01E0C5" }
                      ]}
                      disabled={obj?.select}
                      onPress={() => {
                        handleSelectDate(index)
                      }}
                    >
                      <Text
                        style={[
                          styles.dateTxt,
                          obj?.select && { color: "#D7D7D7" },
                          obj?.userSelect && { color: "#ffffff" }
                        ]}
                      >
                        {obj?.date}
                      </Text>
                      <Text
                        style={[
                          styles.dayTxt,
                          obj?.select && { color: "#D7D7D7" },
                          obj?.userSelect && { color: "#ffffff" }
                        ]}
                      >
                        {obj?.day}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Text style={styles.aboutDoctorTxt}>Consult Time</Text>
              <FlatList
                data={timeSlot}
                numColumns={4}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.timeSlotWpr,
                        item?.select && { backgroundColor: "#01E0C5" }
                      ]}
                      onPress={() => {
                        handleSelectTime(index)
                      }}
                    >
                      <Text
                        style={[
                          styles.timeSlotTxt,
                          item?.select && {
                            color: "#FFFFFF",
                            fontFamily: "Poppins-Semibold"
                          }
                        ]}
                      >
                        {item?.name}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
            <Button
              name={"COMPLETE BOOKING"}
              nameStyle={styles.btnNameStyle}
              btnStyle={styles.btnStyle}
              handleOnpress={() => {}}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default TelehealthAppointment
