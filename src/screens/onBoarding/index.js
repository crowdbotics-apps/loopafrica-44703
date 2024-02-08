import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import styles from "./style"
import {
  LOGO,
  LOGO_WITH_TAG,
  BG_SHADOW,
  ARROW_LEFT_WHITE,
  ARROW_RIGHT_PINK,
  ARROW_RIGHT_BLUE
} from "../../utils/images"
import {
  AGE_RANGE,
  GENDER,
  FEEL_TODAY,
  AVERAGE_DAY,
  WELLNESS_GOAL,
  CONTINUE1,
  CONTINUE2
} from "../../utils/constants"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Step5 from "./step5"
import Step6 from "./step6"
import Step7 from "./step7"
// import Toast from "react-native-toast-message"


const OnBoarding = props => {
  const [ageArr, setAgeArr] = useState(AGE_RANGE)
  const [genderArr, setGenderArr] = useState(GENDER)
  const [healthTodayArr, setHealthTodayArr] = useState(FEEL_TODAY)
  const [averageDayArr, setAverageDayArr] = useState(AVERAGE_DAY)
  const [wellnessGoalArr, setWellnessGoalArr] = useState(WELLNESS_GOAL)
  const [continue1Arr, setContinue1Arr] = useState(CONTINUE1)
  const [continue2Arr, setContinue2Arr] = useState(CONTINUE2)

  const [step, setStep] = useState("1")

  const handleSelectAge = index => {
    let temp = []
    ageArr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setAgeArr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectGender = index => {
    let temp = []
    genderArr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setGenderArr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectFeelToday = index => {
    let temp = []
    healthTodayArr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setHealthTodayArr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectContinue1 = index => {
    let temp = []
    continue1Arr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setContinue1Arr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectAverageToday = index => {
    let temp = []
    averageDayArr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setAverageDayArr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectContinue2 = index => {
    let temp = []
    continue2Arr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        }
      } else {
        data.select = false
      }
      temp.push(data)
    })
    setContinue2Arr([...temp])
    setStep(parseInt(step) + 1)
  }

  const handleSelectWellnessToday = index => {
    let temp = []
    wellnessGoalArr?.map((obj, ind) => {
      let data = obj
      if (index === ind) {
        if (!data?.select) {
          data.select = true
        } else {
          data.select = false
        }
      }
      temp.push(data)
    })
    setWellnessGoalArr([...temp])
  }

  const handlePassingValues = () => {
    let userDetails = {
      ageRange: ageArr,
      genderArr: genderArr,
      healthTodayArr: healthTodayArr,
      averageDayArr: averageDayArr,
      wellnessGoalArr: wellnessGoalArr
    }

    const tempWellnessGoalArr = wellnessGoalArr?.filter(
      obj => obj.select === true
    )
    if (tempWellnessGoalArr?.length === 0) {
      // Toast.show({
      //   type: "error",
      //   props: {
      //     heading: "Wellness Goals",
      //     desc: "Please select atleast one option"
      //   }
      // })
    } else {
      props?.navigation?.navigate("RegisterSignup", { details: userDetails })
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 9
        }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => {
              if (step == 1) {
              } else {
                setStep(step - 1)
              }
            }}
          >
            <Image source={ARROW_LEFT_WHITE} />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image source={LOGO} />
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
        <View style={styles.bodyContainer}>
          <ScrollView>
            {step == "1" && (
              <Step1
                ageArr={ageArr}
                handleSelectAge={handleSelectAge}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "2" && (
              <Step2
                genderArr={genderArr}
                handleSelectGender={handleSelectGender}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "3" && (
              <Step3
                healthTodayArr={healthTodayArr}
                handleSelectFeelToday={handleSelectFeelToday}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "4" && (
              <Step4
                continue1Arr={continue1Arr}
                handleSelectContinue1={handleSelectContinue1}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "5" && (
              <Step5
                averageDayArr={averageDayArr}
                handleSelectAverageToday={handleSelectAverageToday}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "6" && (
              <Step6
                continue2Arr={continue2Arr}
                handleSelectContinue2={handleSelectContinue2}
                setStep={setStep}
                step={step}
              />
            )}
            {step == "7" && (
              <Step7
                wellnessGoalArr={wellnessGoalArr}
                handleSelectWellnessToday={handleSelectWellnessToday}
                navigation={props?.navigation}
                handlePassingValues={handlePassingValues}
              />
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footerLogo}>
        <Image
          source={LOGO_WITH_TAG}
          resizeMode="contain"
          style={styles.footerImg}
        />
      </View>
      <View style={styles.bgShadowWpr}>
        <Image source={BG_SHADOW} resizeMode="contain" />
      </View>
    </View>
  )
}

export default OnBoarding
