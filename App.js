import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import questions from './assets/data/imageMulatipleChoiceQuestions';
import Button from './src/components/Button';
import ImageMulatipleChoiceQuestions from './src/components/imageMulatipleChoiceQuestions';

export default function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])

  useEffect(() => {
    if(currentQuestionIndex >= questions.length){
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else{
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
  const onWrong = () => {
    Alert.alert("Wroooong!");
  }

  return (
    <View style={styles.root}>
      <ImageMulatipleChoiceQuestions
       question={currentQuestion}
       onCorrect={onCorrect}
       onWrong={onWrong}/>
    </View>
  );
}