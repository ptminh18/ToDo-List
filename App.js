import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.components.styles'
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    //add task
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Anounce", 
      "Are you really want to delete this task?",
    [
      { text: "OK", onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
      }},
      {
        text: "Cancel",
        onPress: () => {}
      }
    ])
  }

  return (
    <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.header}>Todo List</Text>
      <ScrollView>
      {
        taskList.map((item, index) => {
          return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
        })
      }

      </ScrollView>
    </View>
    <Form onAddTask={handleAddTask}/>

      <StatusBar style="auto" />
    </View>
  );
}
