import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,

} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../elements/Input';

import {
  colors,
  fontFamily,
  fontSize,
  spaceHeight,
} from '../../styles/variables';







const PlusButtonScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [taskassign, setTaskassign] = useState('');
  const [getList, setList] = useState([]);


  useEffect(() => {
    fetch('https://task.infotonicsmedia.com/api/public/tasks/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + authToken,
      },
      body: JSON.stringify({
        taskname: name,
        taskdecr: descriptions,
        category: categories,
        priority: '0',
        assign_to: taskassign.label
      })
    })
      .then(response => response.json())
      .then(res => console.log(res))
      // .then(res=>{
      //     setData(res);          
      // })     
      .catch(error => {
        console.log(error);

      })
  }, []);

  const fetchUser = () => {
    requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + authToken,
      },
    }
    fetch('https://task.infotonicsmedia.com/api/public/customer',
      requestOptions)
      .then(response => response.json())
      .then(res =>
        setList(res)
        //console.log(res)
      )

      .catch(error => {
        console.log(error);

      })

  }
  useEffect(() => {
    fetchUser()
  }, [])


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: colors.black }]}>
          Assign to...
        </Text>
      );
    }
    return null;
  };



  const submit = () => {
    const body = { name, categories, descriptions, taskassign }
    console.warn(body);
  };

  return (
    <>
      <View>
        <Text style={styles.heading}>
          What do you want to choose Your Categories
        </Text>
      </View>
      <ScrollView style={CommonStyles.noTabScrollView}>

        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>


          <Input
            textLabel="Projects"
            placeholder="Enter Projects Name"
            onChangeText={text => setName(text)}
          />

          <Input
            textLabel="Categories"
            placeholder="Enter Categories"
            onChangeText={text => setCategories(text)}
          />

          <Input
            textLabel="Write Short Description"
            placeholder="Enter Description"
            onChangeText={text => setDescriptions(text)}
          />

          <View>

          </View>


          <View>
            {console.log('getList', getList)}
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: colors.secondary }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={getList}
                search
                maxHeight={300}
                labelField="username"
                valueField="value"
                placeholder={!isFocus ? 'Select Employees' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                // onChangeText={item => {
                //   setTaskassign (item.taskassign);
                //   setIsFocus(false);
                // }}
                onChange={text => setTaskassign(text)}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? colors.secondary : 'black'}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>

          </View>

          {/* Rich Text Editor Added */}

          {/* Rich Text Editor Added */}

          <View style={{ marginTop: 60 }}>
            <TouchableOpacity onPress={() => submit()}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Assign Task</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PlusButtonScreen;

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    fontSize: fontSize.title,
    fontFamily: fontFamily.bold,
    marginTop: 50,
    textAlign: 'center',
    color: colors.black,
  },

  button: {
    backgroundColor: colors.primary,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttontext: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
  },

  container: {
    // backgroundColor: 'white',
    padding: 16,

  },
  dropdown: {
    height: 50,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1.2,
    idth: '100%',

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    // backgroundColor: 'white',
    left: 16,
    // top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.black
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: colors.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
})

