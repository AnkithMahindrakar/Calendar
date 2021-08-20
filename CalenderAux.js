//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component

const CalenderAux = () => {
  const num = 5;
  for (let i = 1; i <= 31; i++) {
    let dateArr = [];
    dateArr.push(i);
    const dateArr2 = dateArr;
    // console.log(dateArr);
    // console.log(dateArr2);
  }
  let dateee = new Date();
  let days = dateee.toString();
  const date = dateee.getDate();
  dateee.setDate(16).toString();

  console.log(days.toString());
  // console.log(dateArr);

  console.log(typeof dateee);
  const container = num === 5 ? styles.container : null;
  console.log(container);

  return (
    <View style={container}>
      <View style={styles.container2}>
        <View style={styles.containerCalendar}>
          <Text style={styles.calendarTxt}>Calendar</Text>
        </View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.todaytTxt}>Today</Text>
          </View>
          <Text style={styles.AugTxt}>
            {dateee.toString().slice(3, 7) + ' '}
            {dateee.getFullYear()}
          </Text>
        </View>
        <View style={styles.container5}>
          <Text style={styles.Txt2}>M</Text>
          <Text style={styles.Txt2}>T</Text>
          <Text style={styles.Txt2}>W</Text>
          <Text style={styles.Txt2}>T</Text>
          <Text style={styles.Txt2}>F</Text>
          <Text style={styles.Txt2}>S</Text>
          <Text style={styles.Txt2}>S</Text>
        </View>
        <View style={styles.dateContainer}>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 16 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 16 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10)}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 17 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 17 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 1}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 18 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 18 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 2}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 19 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 19 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 3}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 20 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 20 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 4}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 21 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 21 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 5}
            </Text>
          </View>
          <View
            style={{
              ...styles.particularView,
              ...{backgroundColor: date === 22 ? 'grey' : null},
            }}>
            <Text
              style={{
                ...styles.dateTxt,
                ...{color: date === 22 ? 'white' : 'grey'},
              }}>
              {parseInt(days.toString().slice(7, 10), 10) + 6}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container2: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: '33%',
    width: '95%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  containerCalendar: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightblue',
    height: '25%',
    width: '40%',
  },
  calendarTxt: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#616161',
  },
  container3: {
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '22%',
    width: '100%',
    // top: 50,
    flexDirection: 'row',
  },
  container4: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'teal',
    height: '80%',
    width: '30%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    // top: 60,
    // left: 40,
    right: 20,
  },
  todaytTxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  AugTxt: {
    fontSize: 25,
    left: 20,
    color: 'grey',
    fontWeight: 'bold',
    // marginLeft: 80,
  },
  container5: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    top: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Txt2: {
    fontSize: 20,
    // marginLeft: 80,
    fontWeight: 'bold',
    color: 'grey',
  },
  dateContainer: {
    // backgroundColor: 'lightgrey',
    flexDirection: 'row',
    height: '24%',
    width: '100%',
    top: 12,
    justifyContent: 'space-around',
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
});

//make this component available to the app
export default CalenderAux;
