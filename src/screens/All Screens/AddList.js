import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import { colors, fontFamily, fontSize } from '../../styles/variables';
const COLORS = { primary: '#1f145c', white: '#fff' };
import { Input } from 'react-native-elements';
import EvilIcons
  from 'react-native-vector-icons/EvilIcons';



const AddList = props => {
  const [data, setData] = useState([{}]);

  // useEffect(() =>{
  //   const url ='https://jsonplaceholder.typicode.com/posts';
  //   fetch(url).then(resp=> resp.json())
  //   .then(resp => console.log(resp))
  // },[])

  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       // 'Authorization': 'Bearer ' + authToken,
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(res => console.warn(res))
  //     // .then(res=>{
  //     //     setData(res);          
  //     // })     
  //     .catch(error => {
  //       console.log(error);

  //     })
  // }, []);




  const [todos, setTodos] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

  React.useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const markTodoComplete = todoId => {
    const newTodosItem = todos.map(item => {
      if (item.id == todoId) {
        return { ...item, completed: true };
      }
      return item;
    });

    setTodos(newTodosItem);
  };

  const deleteTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
  };



  const ListItem = ({ todo }) => {
    return (
      <>
        <View style={styles.listItem}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: todo?.completed ? colors.lightgray : COLORS.primary,
                //  color: COLORS.primary,
                textDecorationLine: todo?.completed ? 'line-through' : 'none',
              }}>
              {todo?.task}
            </Text>
          </View>
          {!todo?.completed && (
            <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
              <View style={[styles.actionIcon, { backgroundColor: 'blue' }]}>
                <Icon name="done" size={20} color="white" />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <View style={styles.actionIcon}>
              <Icon name="delete" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fefefe',
      }}>


      <GradientNavigationBar
        navigation={props.navigation}
        title="Create Task"

        titleStyle={{
          color: colors.white,
          fontSize: fontSize.medium,
          fontFamily: fontFamily.regular,

          textAlign: 'center',
          paddingTop: 10,
        }}
        backIcon="arrow-back"
        backIconColor={colors.white}

        name1={"check"}
        onPress1={addTodo}


      />

      <View>
        <View>
          <Input
            value={textInput}
            onChangeText={text => setTextInput(text)}
            placeholder="List Name"
            placeholderTextColor={'#808B96'}
            leftIcon={
              <View style={{ marginLeft: 10 }}>
                <EvilIcons name="navicon" size={25} color={colors.primary} />
              </View>
            }
            inputStyle={styles.inputStyles}
            numberOfLines={1}
            inputContainerStyle={styles.inputContainer}
          />
        </View>
      </View>

      {/* Search Icon */}


      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      />

    </SafeAreaView>


  );
};

const styles = StyleSheet.create({

  listItem: {

    flexDirection: 'row',
    borderRadius: 7,
    marginVertical: 5,
  },
  actionIcon: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 3,
    marginRight: 35
  },


  inputStyles: {
    paddingLeft: 20,
  },


  inputContainer: {
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
});

export default AddList;
