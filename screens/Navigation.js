import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdminDashboard from './AdminDashboard';
import Admin from './Admin';
import AddManager from './AddManager';
import AssignTask from '../components/AssignTask';
import Login from './login';
import LoginScreen from './LoginScreen';

import Rate from './Rate';
import EmployeeScreen from './EmployeeScreen';
import Ratings from './Ratings';
import EmployeeScreenThree from './EmployeeScreenThree';
import EmployeeScreenOne from './EmployeeScreenOne';
import EmployeeScreenTwo from './EmployeeScreenTwo';
const stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Admin">
        <stack.Screen
          name="Admin"
          component={Admin}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          options={{
            headerShown: false,
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "ADMIN DASHBOARD",
            headerTitleAlign: "center",
          }}
          name="AdminDashboard"
          component={AdminDashboard}
        />
        <stack.Screen
          options={{
            headerShown: false,
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Employee DASHBOARD",
            headerTitleAlign: "center",
          }}
          name="EmployeeScreen"
          component={EmployeeScreen}
        />

        <stack.Screen
          options={{
            headerShown: "false",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Manager rate",
            headerTitleAlign: "center",
          }}
          name="Rate"
          component={Rate}
        />
        <stack.Screen
          options={{
            headerShown: "false",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "ratings",
            headerTitleAlign: "center",
          }}
          name="Ratings"
          component={Ratings}
        />

        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "TimeSheet",
            headerTitleAlign: "center",
          }}
          name="Login"
          component={Login}
        />

        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            // headerTitle: "TimeSheet",
            headerTitleAlign: "center",
          }}
          name="emp1"
          component={EmployeeScreenOne}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            // headerTitle: "TimeSheet",
            headerTitleAlign: "center",
          }}
          name="emp2"
          component={EmployeeScreenTwo}
        />

        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Employee dashboard",
            headerTitleAlign: "center",
          }}
          name="emp3"
          component={EmployeeScreenThree}
        />

        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // backgroundColor:"black",
            },
            headerTitle: "Manager Dashboard",
            headerTitleAlign: "center",
            // headerBackground:'blue'
            // headerBackground:{
            //   backgroundColor:"black"
            // }
          }}
          name="AddManager"
          component={AddManager}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // backgroundColor:"black",
            },
            headerTitle: "Assign Task",
            headerTitleAlign: "center",
            // headerBackground:'blue'
            // headerBackground:{
            //   backgroundColor:"black"
            // }
          }}
          name="AssignTask"
          component={AssignTask}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "TimeSheet",
            headerTitleAlign: "center",
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation