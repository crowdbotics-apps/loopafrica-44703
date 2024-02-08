import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step5 = props => {
  return (
    <>
      <Text style={styles.titleTxt}></Text>
      <Text style={[styles.mainTxt, { lineHeight: 32 }]}>
        How busy are you{" "}
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>on an average day?</Text>
      </Text>
      <Text style={styles.descTxt}></Text>
      {props?.averageDayArr?.map((obj, index) => {
        return (
          <ButtonWithArrow
          key={index}
            handleSelect={props?.handleSelectAverageToday}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step5
