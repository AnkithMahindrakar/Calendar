//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Day = ({date, isCurrentDay, borders}) => {
  // console.log(particularClick);
  // console.log(borders);

  return (
    // <TouchableOpacity>
    <View
      style={{
        ...styles.eachContainer,
        ...{
          backgroundColor: isCurrentDay ? 'grey' : 'white',
          borderWidth: date === 'padding' ? 0 : borders === date ? 1.5 : 1,
          borderColor: borders === date ? '#008da6' : '#ccc',
        },
      }}>
      <Text
        style={{
          ...styles.dateTxt,
          ...{
            color: isCurrentDay
              ? 'white'
              : borders === date
              ? '#008da6'
              : 'grey',
          },
        }}>
        {date === 'padding' ? null : date}
      </Text>
    </View>
    // </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  eachContainer: {
    height: 50,
    width: 50,
    margin: 3.5,
    borderColor: '#ccc',
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
