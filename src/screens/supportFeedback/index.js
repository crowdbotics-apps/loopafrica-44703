import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native"
import { CIRCLE_ARROW, NAME, EMAIL } from "../../utils/images"
import styles from "./styles"
import { ACCOUNT_SETTING } from "../../utils/constants"
import Button from "../../components/button"
import Logout from "../../components/logout"
import ModalContainer from "../../components/modalContainer"
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/size"
import Colors from "../../utils/colors"
import { Card } from "react-native-paper"


const SupportFeedback = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")

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
            <Text style={styles.headerTitle}>Support / Send Feedback</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>
      </View>
      <View style={{ flex: 8.5 }}>
        <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
          <ScrollView>
            <>
              <Text style={styles.commonTxt}>Name</Text>
              <View style={styles.textInputWithLabelWpr}>
                <Image source={NAME} style={{ marginRight: 10 }} />
                <TextInput
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholder="Enter your name"
                  placeholderTextColor={"rgba(170, 170, 170, 1)"}
                  style={styles.textInputStyle}
                />
              </View>
            </>
            <>
              <Text style={styles.commonTxt}>Email Address</Text>
              <View style={styles.textInputWithLabelWpr}>
                <Image source={EMAIL} style={{ marginRight: 10 }} />
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Enter your email"
                  placeholderTextColor={"rgba(170, 170, 170, 1)"}
                  style={styles.textInputStyle}
                />
              </View>
            </>
            <>
              <Text style={styles.commonTxt}>Subject</Text>
              <View style={styles.textInputWithLabelWpr}>
                {/* <Image source={EMAIL} style={{ marginRight: 10 }} /> */}
                <TextInput
                  value={subject}
                  onChangeText={text => setSubject(text)}
                  placeholder="Enter subject"
                  placeholderTextColor={"rgba(170, 170, 170, 1)"}
                  style={styles.textInputStyle}
                />
              </View>
            </>
            <>  
              <View style={[styles.textInputWithLabelWpr,{marginTop: 20}]}>
                <TextInput
                  value={comment}
                  onChangeText={text => setComment(text)}
                  placeholder="Add your comment..."
                  placeholderTextColor={"rgba(170, 170, 170, 1)"}
                  style={styles.commentTxtArea}
                  keyboardType="default"
                  autoCapitalize="none"
                  multiline={true}
                />
              </View>
            </>
            <Button 
            name={"SUBMIT"} btnStyle={{ marginTop: 50}}/>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default SupportFeedback
