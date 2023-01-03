import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
// import { auth } from "../firebase";
// import empData from "../components/EmpolyeeData";
import { auth } from "../config";
// import firebase from "firebase"
import { firebase } from "../config";


import empData from "../components/EmpolyeeData";
const LoginScreen = ({navigation,route}) => {
     const id = route.params.employeId;
     const idSelector = empData.find((element) => {
       return id === element.empId;
     });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
//   const navigation = useNavigation();

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>
        {idSelector.name}
      </Text>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.estyle}
          placeholder="Email"
          value={email}
          placeholderTextColor="black"
          onChangeText={(text) => setemail(text)}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.pstyle}
          placeholder="password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
      </View>
      {/* <View style = {{marginTop:10,padding:10,alignItems:'center'}}> */}
      <TouchableOpacity
        style={styles.login}
        onPress={handleSignUp}

        // onPress={() => {
        //   navigation.navigate("AdminDashboard");
        // }}
      >
        <TouchableOpacity
          onPress={() => {
            if(idSelector.empId == '1'){
            navigation.navigate("emp1");
            }
            else if(idSelector.empId =='2'){
              navigation.navigate('emp2')
            }
            else{
              navigation.navigate('emp3')
            }
          }}
        >
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "violet",
    marginLeft: 20,
    marginRight: 20,
  },
  estyle: {
    // width:500,
    // height:40,
    borderRadius: 18,
    width: 500,
    height: 40,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 20,
  },

  pstyle: {
    borderRadius: 18,
    width: 500,
    height: 40,
    borderWidth: 2,
    // marginTop:10,
    // resizeMode:'contain',
    borderRadius: 20,
    // alignItems:'center'
    textAlign: "center",
  },
  login: {
    borderWidth: 2,
    width: "80%",
    height: 50,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    //   textAlign:'center',
    //   justifyContent:'center'  ,
    //   alignItems:'center'
  },
  logintext: {
    // textAlign:'center',
  },
});

export default LoginScreen;
