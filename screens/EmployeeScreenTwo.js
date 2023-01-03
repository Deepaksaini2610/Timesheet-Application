import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
// import empData from '../components/EmpolyeeData';
import remark from "../components/remark";
import empData from "../components/EmpolyeeData";
import { firebase } from "../config";
const Login = ({ navigation }) => {
  const empID3 = firebase.firestore().collection("employee3");
  // const newTodoRef = firebase.firestore().collection("Timesheet");
  // const emp1 = firebase.firestore().collection("Timesheet1");

  const [addName, setAddName] = useState("");
  const [addDay, setAddDay] = useState(" ");
  const [addProjectName, setAddProjectName] = useState(" ");
  const [addDescription, setAddDescription] = useState("");
  const [addRemark, setAddRemark] = useState("");

  const addTimeField = () => {
    if (addDescription && addDescription.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        name: addName,
        day: addDay,
        projectName: addProjectName,
        description: addDescription,
        remark: addRemark,
        createdAt: timestamp,
      };
      empID3
        .add(data)
        .then(() => {
          // release the new field state
          setAddProjectName("");
          setAddDay("");
          setAddDescription(" ");
          setAddRemark(" ");
          setAddName(" ");
          Keyboard.dismiss();
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        });
    }
  };

  // const id = route.params.employeId;
  // const idSelector = empData.find((element)=>{
  //     return id === element.empId
  // })
  const d = new Date();
  return (
    <View
      style={{ flex: 1, backgroundColor: "violet", padding: 20, margin: 20 }}
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
          onChangeText={(name) => setAddName(name)}
          value={addName}
          multiline={true}
          autoCapitalize="none"
        />
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="day"
          onChangeText={(day) => setAddDay(day)}
          value={addDay}
          multiline={true}
          autoCapitalize="none"
        />
        {/* <TextInput
            style={{ borderWidth: 1 }}
            placeholder="date"
            // onChangeText={(createdAt) => setAddDay(cre)}
            value={createdAt}
            multiline={true}
            autoCapitalize="none"
          /> */}
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1, width: 300, height: 30 }}
          placeholder="Project name"
          onChangeText={(projectName) => setAddProjectName(projectName)}
          value={addProjectName}
          multiline={true}
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={(description) => setAddDescription(description)}
          value={addDescription}
          multiline={true}
          autoCapitalize="none"
          placeholder="description"
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={(remark) => setAddRemark(remark)}
          value={addRemark}
          multiline={true}
          autoCapitalize="none"
          placeholder="remark"
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
        />
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
            navigation.navigate("Rate");
          }}
        >
          <TouchableOpacity onPress={addTimeField}>
            <Text>submit</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 2, width: 50 }}
          onPress={() => {
            navigation.navigate("Login", { emp: empData.id });
          }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Login;
