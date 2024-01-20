import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import question from './assets/data/oneQuestionWithOption'

export default function App() {
  const status = "ok"
  return (
    <View style={styles.root}>

      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        { question.options.map((option) => (
          <ImageOption 
          key={option.id}
          image={option.image}
          text={option.text}/>
        ))}
      </View>

    </View>
  );
}