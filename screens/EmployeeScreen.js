import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import empData from '../components/EmpolyeeData'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
const EmployeeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      {empData.map((ele, index) => (
        <View
          key={index}
          style={{ justifyContent: "space-between", padding: 10 }}
        >
          <View
            style={{
              padding: 10,
              borderWidth: 2,
              justifyContent: "space-evenly",
            }}
          >
            <FontAwesomeIcon icon={faUser} style={{ width: 30, height: 30 }} />
            <Text>EmpID: {ele.empId}</Text>
            <Text>Emp Name: {ele.name}</Text>
            <Text>emp Salary: {ele.salary}</Text>
            <Text>developer: {ele.developer}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                width: 500,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Ratings");
              }}
            >
              <Text>View Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            width: 500,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("AdminDashboard");
          }}
        >
          <Text>go to AdminDashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({})

export default EmployeeScreen
