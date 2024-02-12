import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native"
import { NAME, EMAIL } from "../../utils/images"
import Button from "../../components/button"
import Header from "../../components/header"
import styles from "./styles"

const SupportFeedback = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")

  return (
    <View style={styles.container}>
      <Header title={"Support / Send Feedback"} />
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
              <View style={[styles.textInputWithLabelWpr, { marginTop: 20 }]}>
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
            <Button name={"SUBMIT"} btnStyle={{ marginTop: 50 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default SupportFeedback
