import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step6 = props => {
  return (
    <>
      <Text style={styles.titleTxt}>Interesting,</Text>
      <Text style={[styles.mainTxt, { lineHeight: 32 }]}>
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>We've built </Text>Loop Primary Care{" "}
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>
          to do the managing and prioritizing of your care for you
        </Text>
      </Text>
      <Text style={styles.descTxt}></Text>
      {props?.continue2Arr?.map((obj, index) => {
        return (
          <ButtonWithArrow
          key={index}
            handleSelect={props?.handleSelectContinue2}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step6
