import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import rData from '../components/RatingData'
import { faAdd,faDelete, faMinus } from '@fortawesome/free-solid-svg-icons';
const rData = [
  {
    id: "1",
    day: "tuesday",
    rating: "**",
  },
  {
    id: "2",
    day: "wednesday",
    rating: "****",
  },
  { id: "3", day: "thursday", rating: "*" },
  {
    id: "4",
    day: "tuesday",
    rating: "***",
  },
];
const Ratings = ({navigation}) => {
 
const renderItems = ({ item }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      alignItems: "center",
    }}
  >
    <Text>{item.day}</Text>
    <Text>{item.rating}</Text>
    <TouchableOpacity
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesomeIcon icon={faAdd} />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{
        onDelete(item.id)
    }}

      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesomeIcon icon={faMinus} />
    </TouchableOpacity>
  </View>
);

  return (
    <SafeAreaView>
      <FlatList
        data={rData}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
      <View  style ={{justifyContent:'center'}} >
        <TouchableOpacity  onPress={()=>{
            navigation.goBack();
            
        }}
        style ={{justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
            <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Ratings

const styles = StyleSheet.create({})