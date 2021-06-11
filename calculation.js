import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './calculation'


export default function calculation() {
  const [firstnumber, setFirstNumber] = useState(0)
  const [secondnumber, setSecondNumber] = useState(0)
  const [message, setMessage] = React.useState("");
  

  function reduceFunc(firstnumber, secondnumber){
    let array = [];
    for (let i = Number(firstnumber); i <= Number(secondnumber); i++){
      console.log(firstnumber);
      console.log(secondnumber);
      array.push(i)
    };
    const summation = array.reduce((acc, value) => acc + value, 0);
    console.log(array);
    console.log(summation);
    return summation;
  }

  //Part 3 Compare 2 Numbers 
  function calculate(){
    if (firstnumber && secondnumber <= 1) {
      return `Invalid Input, Please Try Again! `
    }
    if (firstnumber && secondnumber >= 101) {
      return `Invalid Input, Please Try Again! `
    }
    if (firstnumber == secondnumber) {
      return `Number1: ${firstnumber} is equal to Number 2: ${secondnumber}`
    }
    if (firstnumber == secondnumber) {
      return `Number1: ${firstnumber} is equal to Number 2: ${secondnumber}`
    }
    if (firstnumber > secondnumber){
      return `Number1: ${firstnumber} is bigger than Number 2: ${secondnumber}`
    }
    if (firstnumber < secondnumber){
      return `Number1: ${firstnumber} is less than Number 2: ${secondnumber}`
    }
  }
  
  return (
    <View>
      <Text style = {styles.textStyle}>Number 1: </Text>
      <TextInput
        min = "2"
        max ="100"
        keyboardType="numeric"
        style = {styles.textInput}
        placeholder='Enter Number 1:'
        onChangeText={(val) => setFirstNumber(val)}
      />
      <Text style = {styles.textStyle}>Number 2: </Text>
      <TextInput
      min = "2"
      max ="100"
        keyboardType="numeric"
        style = {styles.textInput}
        placeholder='Enter Number 2'
        onChangeText={(val) => setSecondNumber(val)}
      />
      <Text style = {styles.textStyle}>Number 1: {firstnumber}, Number 2: {secondnumber}</Text>
      <Button 
        title="Compare" 
        onPress={() => setMessage(calculate())}
      />
      <Text>{message}</Text>

    </View>
  )
}
