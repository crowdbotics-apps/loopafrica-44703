import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import Button from "../../components/button"
import styles from "./style"

const Step7 = props => {
  return (
    <>
      <Text style={styles.titleTxt}></Text>
      <Text style={[styles.mainTxt, { lineHeight: 32 }]}>
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>
          We would like to see how we can support you.{" "}
        </Text>
        DO you have any of the following wellness goals?
        <Text style={{ color: "#fff" }}></Text>
      </Text>
      <Text style={styles.descTxt}></Text>
      {props?.wellnessGoalArr?.map((obj, index) => {
        return (
          <ButtonWithArrow
            key={index}
            handleSelect={props?.handleSelectWellnessToday}
            index={index}
            name={obj?.name}
            select={obj?.select}
            arrow={false}
          />
        )
      })}
      <Button
        name={"CONTINUE"}
        handleOnpress={() => {
          props?.handlePassingValues()
        }}
      />
    </>
  )
}

export default Step7
