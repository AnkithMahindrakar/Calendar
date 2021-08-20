//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Day from './Day';

// create a component
//1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,

const App = () => {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState();
  const [dateDisplay, setDateDisplay] = useState('');
  // console.log('1', dateDisplay);

  // const eventForDate = date => events.find(e => e.date === date);

  useEffect(() => {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dt = new Date();
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    console.log('firstDayOfMonth', firstDayOfMonth);
    console.log('daysInMonth', daysInMonth);
    console.log(dateString);
    console.log(paddingDays);
    setDateDisplay(
      `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`,
    );
    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          isCurrentDay: false,
          date: '',
        });
      }
    }
    // console.log('2', daysArr);
    setDays(daysArr);
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.container5}>
        <Text style={styles.Txt2}>S</Text>
        <Text style={styles.Txt2}>M</Text>
        <Text style={styles.Txt2}>T</Text>
        <Text style={styles.Txt2}>W</Text>
        <Text style={styles.Txt2}>T</Text>
        <Text style={styles.Txt2}>F</Text>
        <Text style={styles.Txt2}>S</Text>
      </View>
      <View style={styles.daysContainer}>
        {/* {days.map((d, index) => (
          <Day date={d.value} key={index} />
        ))} */}
        <FlatList
          data={days}
          // horizontal
          numColumns={7}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Day date={item.value} isCurrentDay={item.isCurrentDay} />
          )}
        />
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
  daysContainer: {
    // backgroundColor: 'yellow',
    // flexDirection: 'row',
    height: 400,
    width: 400,
    // overflow: 'hidden',
    // top: 10,
  },
  eachContainer: {
    height: 50,
    width: 50,
    margin: 3.5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

//make this component available to the app
export default App;
