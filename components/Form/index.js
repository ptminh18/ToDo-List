import { View, Text, Keyboard, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function Form(props) {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task.length === 0) {
            alert('Please type!')
            return false;
        }
        props.onAddTask(task)
        setTask('')
        Keyboard.dismiss()
    }
  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder='Your Task Here' 
        style={styles.input}
      />
      <TouchableOpacity 
      onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
            <Text style={styles.icon}>+</Text>
        </View>
    </TouchableOpacity>

    </View>
  )
}
