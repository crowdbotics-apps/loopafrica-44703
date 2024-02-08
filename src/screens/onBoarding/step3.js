import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step3 = props => {
  return (
    <>
      <Text style={styles.titleTxt}>
        Our health plans are designed to handle all your health concerns
      </Text>
      <Text style={styles.mainTxt}>
        How do you feel about your health today?
      </Text>
      <Text style={styles.descTxt}></Text>
      {props?.healthTodayArr?.map((obj, index) => {
        return (
          <ButtonWithArrow
            key={index}
            handleSelect={props?.handleSelectFeelToday}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step3
