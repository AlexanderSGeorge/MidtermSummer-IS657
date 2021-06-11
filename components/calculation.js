import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './calculation'
import Column from './Column'

export default function calculation() {

  const [name, setName] = useState(null)
  const [firstnumber, setFirstNumber] = useState(0)
  const [secondnumber, setSecondNumber] = useState(0)
  const [addednumber, addNumber] = useState(0)
  const [subtractednumber, subtractNumber] = useState(0)
  const [multipliednumber, multiplyNumber] = useState(0)
  const [dividednumber, divideNumber] = useState(0)
  const [seriesnumber, arrayNumber] = useState(0)

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

 
  function calculate(){
    addNumber( Number(firstnumber) + Number(secondnumber));
    subtractNumber( Number(firstnumber) - Number(secondnumber));
    multiplyNumber( Number(firstnumber) * Number(secondnumber));
    divideNumber( Number(firstnumber) / Number(secondnumber));
    arrayNumber(reduceFunc(firstnumber, secondnumber))
  }

  return (
    <View>
      <Text style = {styles.textStyle}> Enter Name: </Text>
      <TextInput
        multiline 
        style = {styles.textInput}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />
      <Text style = {styles.textStyle}>Enter your first number: </Text>
      <TextInput
        keyboardType="numeric"
        style = {styles.textInput}
        placeholder='e.g. 10'
        onChangeText={(val) => setFirstNumber(val)}
      />
      <Text style = {styles.textStyle}>Enter your second number: </Text>
      <TextInput
        keyboardType="numeric"
        style = {styles.textInput}
        placeholder='e.g. 10'
        onChangeText={(val) => setSecondNumber(val)}
      />
      <Text style = {styles.textStyle}>name: {name}, your first input : {firstnumber}, your second input : {secondnumber}</Text>
      <Button 
        title="Calculate"
        onPress = {calculate}  
      />
      <Column>
        <Text style = {styles.textStyle}>Addition: {addednumber}</Text>
        <Text style = {styles.textStyle}>Subtraction: {subtractednumber}</Text>
        <Text style = {styles.textStyle}>Multiplication: {multipliednumber}</Text>
        <Text style = {styles.textStyle}>Division: {dividednumber}</Text>
        <Text style = {styles.textStyle}>Series: {seriesnumber}</Text>
      </Column>
    </View>
  )
}