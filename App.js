import { View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from './App.styles';

import ImageMulatipleChoiceQuestions from './src/components/imageMulatipleChoiceQuestions/imageMulatipleChoiceQuestions'
import OpenEndedQuestions from './src/components/OpenEndedQuestions/OpenEndedQuestions'
import Header from './src/components/Header';
import FillInTheBlank from './src/components/FillInTheBlank';

import questions from './assets/data/allQuestions';

export default function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])
  const [lives, setLives] = useState(5);

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

  const Restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () => {
    if(lives <= 1){
      Alert.alert("Game Over!", "Try A Gain", [
        {
          text: "Try Again",
          onPress: Restart,
        },
      ]);
    } else {
      Alert.alert("Wroooong!");
      setLives(lives - 1);
    }
  }

  return (
  
    <View style={styles.root}>
      <Header progress={currentQuestionIndex/questions.length} lives={lives}/>
      
      <FillInTheBlank 
         question={currentQuestion}
         onCorrect={onCorrect}
         onWrong={onWrong}
      /> 
{/* 
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
      ) : null} */}

    </View>
  );
}