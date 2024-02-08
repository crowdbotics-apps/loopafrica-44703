import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step1 = props => {
  return (
    <>
      <Text style={styles.titleTxt}>Welcome to Loop!</Text>
      <Text style={styles.descTxt}>
        Let's find out how we can meet your unique needs.
      </Text>
      <Text style={styles.mainTxt}>What is age range?</Text>
      {props?.ageArr?.map((obj, index) => {
        return (
          <ButtonWithArrow
            key={index}
            handleSelect={props?.handleSelectAge}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step1
