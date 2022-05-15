import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ToastAndroid, StatusBar
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import DatePicker from 'react-native-date-picker';

const RootScreen = () => {
  const [eventTitle, setEventTile] = React.useState('');
  const [eventLocation, setEventLocation] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [dateValue, setdateValue] = React.useState('');

  //Execute when component is loaded
  React.useEffect(() => {
    RNCalendarEvents.requestPermissions()
      .then(res => {
        console.log('Premission Response', res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createEvent = () => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 2);


    RNCalendarEvents.saveEvent(eventTitle, {
      calendarId: '3',
      startDate: date.toISOString(),
      endDate: newDate.toISOString(),
      location: eventLocation
    }).then((value) => {
      console.log('Event Id--->', value);
      ToastAndroid.show("Meeting Fixed", ToastAndroid.SHORT)

    }).catch((error) => {
      console.log(' Did Not work Threw an error --->', error)
    })
  }


  const fetchEvent = (eventId) => {
    RNCalendarEvents.findEventById(eventId).then((data) => {
      console.log("Event Data-->", data);
    })
  }

  const deletEvent = (eventId) => {
    RNCalendarEvents.removeEvent(eventId).then((val) => {
      console.log(val); //returns true if event is delted
    })
  }


  return (

    <>
      <StatusBar
        animated={true}
        backgroundColor="#3f3849"
      />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 25, marginTop: 20, fontWeight: 'bold' }}>Assign Your Metting</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.singleElement}>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Metting Title"
                  value={eventTitle}
                  onChangeText={value => {
                    setEventTile(value);
                  }}
                />

              </View>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.singleElement}>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Metting Location"
                  value={eventLocation}
                  onChangeText={value => {
                    setEventLocation(value);
                  }}
                  multiline={true}
                  numberOfLines={2}
                />
              </View>
            </View>
          </View>


          <View style={styles.mainContainer}>
            <View style={styles.singleElement}>
              <View style={styles.dateInputContainer}>
                <TextInput value={dateValue} style={styles.dateInput} />

                <TouchableOpacity
                  style={styles.dateIcon}
                  onPress={() => setOpen(true)}>
                  <Text style={{ fontWeight: 'bold', marginRight: 25 }}> Select Date/Time </Text>
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    var currentdate = new Date(date);
                    var datetime =
                      +currentdate.getDate() +
                      '/' +
                      (currentdate.getMonth() + 1) +
                      '/' +
                      currentdate.getFullYear() +
                      ' - ' +
                      currentdate.getHours() +
                      ':' +
                      currentdate.getMinutes();

                    setOpen(false);
                    setDate(date);
                    setdateValue(datetime.toString());
                  }}
                  minimumDate={new Date()}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            </View>
          </View>



          <TouchableOpacity
            style={{
              flex: 2,
              padding: 25,
              height: 72,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => createEvent()}

          >
            <View style={styles.mettingbtn}>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Fix Your Metting </Text>
            </View>

          </TouchableOpacity>

        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,

  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,

  },

  singleElement: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },

  textInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    // padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    // marginBottom: 1,
    borderWidth: 1,
    borderColor: '#566573',
    width: '80%',
    height: 55,
    alignSelf: 'center',
    elevation: 10
  },

  dateInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 1,
    margin: 2,
    width: '100%',
    height: 60,
    alignSelf: 'center',
    elevation: 10
  },

  dateIcon: {
    padding: 10,
  },
  mettingbtn: {
    backgroundColor: '#3f3849',
    width: 130,
    height: 40,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 10


  },
});

export default RootScreen;
