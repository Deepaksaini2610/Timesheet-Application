import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Managers from '../components/manager';
import empData from '../components/EmpolyeeData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const AddManager = ({navigation,route}) => {

  const onDelete = (id) =>{
    let filterArray = empData.filter((val,i)=>{
      if (val.empId !== id ){
        console.log(val)
        return val
        
      }
    })
    console.log(filterArray)
    // alert(filterArray)
    // setState({empData:filterArray})
  }
    
    const id = route.params.managerId;
    const idSelector = Managers.find((ele)=>{
        return id === ele.idn
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
        Manager {idSelector.name}
      </Text>
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
            <View style = {{flexDirection:'row'}}>
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
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Task</Text>
              </TouchableOpacity>
              <TouchableOpacity

                onPress={()=>{
                    navigation.navigate("LoginScreen",{employeId:ele.empId})
                }}

                style={{
                  width: 60,
                  height: 50,
                  borderRadius: 16,
                  backgroundColor: "whitesmoke",
                  texAlign: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={(ele)=>onDelete(ele.empId)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      ))}
    </View>
  );
}

export default AddManager