import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step2 = props => {
  return (
    <>
      <Text style={styles.titleTxt}>Thanks</Text>
      <Text style={styles.mainTxt}>What is your gender?</Text>
      <Text style={styles.descTxt}></Text>
      {props?.genderArr?.map((obj, index) => {
        return (
          <ButtonWithArrow
            key={index}
            handleSelect={props?.handleSelectGender}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step2
