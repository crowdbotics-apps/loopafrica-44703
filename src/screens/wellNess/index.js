import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native"
import {
  CIRCLE_ARROW,
  WELLNESS,
  WELLNESS1,
  WELLNESS2,
  WELLNESS3,
  WELLNESS4,
  CARD,
  TITLE,
  PROGRESS_CIRCLE
} from "../../utils/images"
import styles from "./style"

const WellNess = props => {
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
            <Text style={styles.headerTitle}>Wellness Center</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <ScrollView>
          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              justifyContent: "space-between"
            }}
          >
            {/* <Image source={WELLNESS} /> */}
            <Image source={WELLNESS1} />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.activityTxt}>Activity</Text>
            <Image source={WELLNESS2} />
          </View>
          <View
            style={{
              marginTop: 10,
              width: "90%",
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <ScrollView horizontal={true}>
              {[1, 1, 1].map(() => {
                return (
                  <View style={{}}>
                    <Image source={CARD} resizeMode="contain" style={{}} />
                    <View style={{ position: "absolute", marginBottom: 20 }}>
                      <Image
                        source={TITLE}
                        style={{ marginLeft: 20, marginTop: 20 }}
                      />
                      <Image
                        source={PROGRESS_CIRCLE}
                        style={{ width: 130, height: 130 }}
                      />
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <Image source={WELLNESS3} resizeMode="contain" />
          </View>

          <View
            style={{
              marginTop: 10,
              width: "90%",
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <Image source={WELLNESS4} resizeMode="contain" />
            <Image source={WELLNESS4} resizeMode="contain" />
            <Image source={WELLNESS4} resizeMode="contain" />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default WellNess
