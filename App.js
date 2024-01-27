import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from './App.styles';

import ImageMulatipleChoiceQuestions from './src/components/imageMulatipleChoiceQuestions/imageMulatipleChoiceQuestions'
import OpenEndedQuestions from './src/components/OpenEndedQuestions/OpenEndedQuestions'

import questions from './assets/data/allQuestions';

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
  
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMulatipleChoiceQuestions
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === 'OPEN_ENDED' ? (
        <OpenEndedQuestions
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}

    </View>
  );
}