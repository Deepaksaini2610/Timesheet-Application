import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import Managers from '../components/manager';
const AdminDashboard = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "violet", flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 50, fontWeight: 900 }}>Add Manager</Text>
      </View>
      {Managers.map((ele, index) => (
        <View
          key={index}
          style={{
            marginTop: 40,

            marginLeft: 50,

            marginRight: 50,
            borderWidth: 1,
            flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              // width:500,
              // height:40,
              textAlign: "center",
              color: "black",
              fontSize: 20,
              fontWeight: 500,
              textTransform: "uppercase",
              padding: 10,
            }}
          >
            {ele.id}
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 500,
              height: 40,
              textAlign: "center",
              color: "black",
              fontSize: 20,
              fontWeight: 500,
              textTransform: "uppercase",
              padding: 10,
              //   borderWidth: 1,
            }}
          >
            {ele.name}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddManager", { managerId: ele.idn })
            }
          >
            <FontAwesomeIcon icon={faAdd} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default AdminDashboard