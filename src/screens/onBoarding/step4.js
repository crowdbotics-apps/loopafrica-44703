import React from "react"
import { Text } from "react-native"
import ButtonWithArrow from "../../components/buttonWithArrow"
import styles from "./style"

const Step4 = props => {
  return (
    <>
      <Text style={styles.titleTxt}></Text>
      <Text style={[styles.mainTxt, { lineHeight: 32 }]}>
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>That is why we at </Text>Loop Primary
        Care{" "}
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>
          are here for you, we cater for your health needs
        </Text>
      </Text>
      <Text style={styles.descTxt}></Text>
      {props?.continue1Arr?.map((obj, index) => {
        return (
          <ButtonWithArrow
          key={index}
            handleSelect={props?.handleSelectContinue1}
            index={index}
            name={obj?.name}
            select={obj?.select}
          />
        )
      })}
    </>
  )
}

export default Step4
