//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Day = ({date, isCurrentDay}) => {
  //   console.log(isCurrentDay);
  return (
    <View
      style={{
        ...styles.eachContainer,
        ...{
          backgroundColor: isCurrentDay ? 'grey' : 'white',
          borderWidth: date === 'padding' ? 0 : 1,
        },
      }}>
      <Text
        style={{
          ...styles.dateTxt,
          ...{color: isCurrentDay ? 'white' : 'grey'},
        }}>
        {date === 'padding' ? '' : date}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  eachContainer: {
    height: 50,
    width: 50,
    margin: 3.5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTxt: {
    fontSize: 20,
    // marginLeft: 80,
    fontWeight: 'bold',
    color: 'grey',
  },
  particularView: {
    // backgroundColor: 'red',
    height: 35,
    width: 35,
    // padding: 7,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   eachContainer1: {
  //     height: 50,
  //     width: 400,
  //     margin: 3.5,
  //     borderColor: 'black',
  //     borderWidth: 1,
  //   },
});

//make this component available to the app
export default Day;
