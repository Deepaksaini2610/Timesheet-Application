import React, { useState } from "react";
// import {StyleSheet, TouchableOpacity, View, TextInput,Text } from "react-native";
// import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from "react-native";
// import React from 'react'
// import empData from '../components/EmpolyeeData';
import remark from "../components/remark";
// import empData from '../components/EmpolyeeData';
const AssignTask = ({ navigation }) => {
    const [stars, setstars] = useState([1,2,3,4,5]);

    // const [password, setpassword] = useState("");

// const todoRef = firebase.firestore().collection("rating");  

const [defaultstar, setdefaultstar] = useState(2);

  const filled =
    "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  const corner =
    "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";

// const addTimeField = () => {
//   if (stars && stars.length > 0) {
//     const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//     const data = {
//       // day: addDay,
//       // description: addDescription,
//       // remark: addRemark,
//       rating:defaultstar,
//       createdAt: timestamp,
//     };
//     todoRef
//       .add(data)
//       .then(() => {
//         // release the new field state
//         // setAddData("");
//         Keyboard.dismiss();
//       })
//       .catch((error) => {
//         // show an alert in case of error
//         alert(error);
//       });
//   }
// };




  // const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  
  // const d = new Date();
  return (
    <View
      style={{ flex: 1, backgroundColor: "white", padding: 20, margin: 20 }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <TextInput
          style={{ borderWidth: 1, width: 300, height: 30 }}
          placeholder="Name"
          value={remark[0].name}
        />
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="day"
          value={remark[0].day}
        />
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="day"
          value={remark[0].data}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1, width: 300, height: 30 }}
          placeholder="Project name"
          value={remark[0].description}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          multiline={true}
          numberOfLines={4}
          placeholder="description"
          value={remark[0].description}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          multiline={true}
          numberOfLines={4}
          placeholder="remark"
          value={remark[0].remark}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
        />
      </View>
      <Text>Rating:</Text>
      <View style = {{flexDirection:'row'}}>
        {stars.map((ele) => (
          <View style = {{flexDirection:'row'}}>
            <TouchableOpacity
              key={ele}

              onPress={() => {
                setdefaultstar(ele);
              }}
            >
              <Image  style = {{height:30,width:30}} source={ele <= defaultstar ? {uri:filled}:{uri:corner}} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ borderWidth: 2, width: 50 }}
          onPress={() => {
            navigation.navigate("EmployeeScreen");
          }}
        >
          <Text >submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
// export default Login
export default AssignTask;
