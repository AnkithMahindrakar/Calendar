/* eslint-disable react-hooks/exhaustive-deps */
//import liraries npx react-native run-android
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Day from './Day';
// import CalendarAux from './CalenderAux';

const App = () => {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState();
  const [dateDisplay, setDateDisplay] = useState('');
  const [currentDay, setCurrentDay] = useState(true);
  const [isCurrentDay2, setisCurrentDay2] = useState(true);
  const [borders, setBorders] = useState(null);
  // console.log('1', dateDisplay);
  const dt2 = new Date();
  const day = dt2.getDate();
  const month = dt2.getMonth();
  const year = dt2.getFullYear();

  // const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    // const weekdays = ["Sunday",'Monday', 'T', 'W', 'T', 'F', 'S', 'S'];
    // const weekdays = [
    //   'Sunday',
    //   'Monday',
    //   'Tuesday',
    //   'Wednesday',
    //   'Thursday',
    //   'Friday',
    //   'Saturday',
    // ];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const getDay = dt.getDay();

    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfMonth2 = firstDayOfMonth.getDay();

    const firstDayOfMonthDay = new Date(year, month, 1).getDate();
    // const firstDayOfMonthDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateString = firstDayOfMonth.toLocaleDateString('en-uk', options);
    // const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    // const paddingDays = weekdays[dt.getDay()];
    // const paddingDays = getDay;
    // const paddingDays = 0;
    const paddingDays =
      firstDayOfMonth2 + 6 >= 7 ? firstDayOfMonth2 - 1 : firstDayOfMonth2 + 6;
    // const paddingDays = firstDayOfMonth2 + 6;
    console.log('-----------------------------------------------');
    console.log('default', dt);

    console.log(
      'first Day Of Month---',
      firstDayOfMonth,
      '--',
      firstDayOfMonth2,
    );
    console.log('dateString', dateString);
    console.log('Borders---', borders);
    console.log('dateString.split(', ')[0]', dateString.split(', ')[0]);
    console.log('days In Month---', daysInMonth);
    console.log('paddingDays', paddingDays);
    console.log(day, month + 1, year);
    // console.log(weekdays[getDay]);
    console.log('date display----', dateDisplay);
    console.log('firstDayOfMonthDay', firstDayOfMonthDay);
    console.log('-----------------------------------------------');
    setDateDisplay(
      `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`,
    );
    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          month: month + 1,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          month: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }
    // console.log('2', daysArr);
    setDays(daysArr);
    setBorders(null);
    setisCurrentDay2(true);
  }, [nav, dateDisplay]);

  return (
    <View style={styles.container}>
      <View style={styles.containerCalendar}>
        <Text style={styles.calendarTxt}>Calendar</Text>
      </View>
      <View style={styles.monthContainer}>
        <View style={styles.container4}>
          <Text style={styles.TodayTxt}>
            {isCurrentDay2 ? 'Today' : currentDay}
            {/* {currentDay} */}
          </Text>
        </View>
        <Text style={styles.AugTxt}>
          {dt2.toString().slice(3, 7) + ' '}
          {dt2.getFullYear()}
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
      <View style={styles.daysContainer}>
        <FlatList
          data={days}
          // horizontal
          numColumns={7}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                item.value === 'padding'
                  ? setisCurrentDay2(true)
                  : setisCurrentDay2(null);

                item.isCurrentDay
                  ? setCurrentDay('Today')
                  : setCurrentDay(`${item.value}/${item.month}/${year}`);
                // setParticularClick(true);
                // console.log(currentDay);
                item.isCurrentDay ? setBorders(null) : setBorders(item.value);
              }}>
              <Day
                date={item.value}
                isCurrentDay={item.isCurrentDay}
                // particularClick={particularClick}
                borders={borders}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <CalendarAux /> */}
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
  container5: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    height: 50,
    width: 400,
    // top: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Txt2: {
    fontSize: 20,
    // marginLeft: 80,
    fontWeight: 'bold',
    color: 'grey',
  },
  containerCalendar: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightblue',
    height: 50,
    width: 180,
    right: 125,
    // alignItems: 'flex-start',
  },
  calendarTxt: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#616161',
  },
  daysContainer: {
    // backgroundColor: 'yellow',
    // flexDirection: 'row',
    marginTop: 10,
    height: 400,
    width: 400,
    // overflow: 'hidden',
    // top: 10,
  },
  container4: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'teal',
    height: '80%',
    width: '33%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    // top: 60,
    // left: 40,
    // right: 20,
    left: 10,
  },
  eachContainer: {
    height: 50,
    width: 50,
    margin: 3.5,
    borderColor: 'black',
    borderWidth: 1,
  },
  AugTxt: {
    fontSize: 30,
    // left: -20,
    color: 'grey',
    fontWeight: 'bold',
    // marginLeft: 80,
  },
  TodayTxt: {
    fontSize: 22,
    // left: -20,
    color: 'grey',
    fontWeight: 'bold',
    // marginLeft: 80,
  },
  monthContainer: {
    height: 50,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,

    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;

///////////////////////////////////////////////////////////////////////////////////////////////
//import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// // create a component
// const MyComponent = () => {
//   const dt = new Date();
//   console.log('default', dt);
//   const day = dt.getDate();
//   const month = dt.getMonth();
//   const year = dt.getFullYear();
//   const firstDayOfMonth = new Date(year, month, 1);
//   console.log('first Day Of Month---', firstDayOfMonth);
//   //     console.log('days In Month---', daysInMonth);
//   //     console.log('dateString', dateString);
//   //     console.log('paddingDays', paddingDays);

//   console.log('day', day);
//   console.log('month', month);
//   console.log('year', year);
//   return (
//     <View style={styles.container}>
//       <Text>MyComponent</Text>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default MyComponent;
