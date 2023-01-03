import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import Managers from '../components/manager';
import empData from '../components/EmpolyeeData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser,faStar } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
const Rate = ({navigation,route}) => {
    const [defaultRating,setDefaultRating] = useState(2);
    const [isRate,setisRate] = useState([1,2,3,4,5]);    
    const id = '1';
    const idSelector = empData.find((element)=>{
        return id === element.empId
    })
  return (
    <View style={{ marginRight: 20, marginLeft: 20 }}>
      <Text
        style={{
          padding: 10,
          fontWeight: 900,
          fontSize: 30,
          textTransform: "uppercase",
        }}
      >
        Manager
      </Text>
      <View style={{ justifyContent: "space-between", padding: 10 }}>
        <View
          style={{
            padding: 10,
            borderWidth: 2,
            justifyContent: "space-evenly",
          }}
        >
          <FontAwesomeIcon icon={faUser} style={{ width: 30, height: 30 }} />
          <Text>EmpID: {idSelector.empId}</Text>
          <Text>Emp Name: {idSelector.name}</Text>
          <Text>emp Salary: {idSelector.salary}</Text>
          <Text>developer: {idSelector.developer}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AssignTask");
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 16,
                backgroundColor: "whitesmoke",
                texAlign: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {" "}
                View Task
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "relative",
              bottom: 70,
              left: 300,
              flexDirection: "row",
              margin: 10,
            }}
          >
            {isRate.map((ele, index) => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    setDefaultRating(ele + 1);
                  }}
                >
                  <text>{defaultRating}</text>
                  {defaultRating <= ele ? (
                    <FontAwesomeIcon icon={faStar} />
                  ) : (
                    <FontAwesomeIcon icon={faStar} />
                  )}
                </TouchableOpacity>
              </View>
            ))}
            <View>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('Rate');
              }}>
                <Text>view rating</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Rate