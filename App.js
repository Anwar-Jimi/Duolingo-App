import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';

export default function App() {
  const status = "ok"
  return (
    <View style={styles.root}>

      <Text style={styles.title}>Which of these is the "glass"</Text>

      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>

    </View>
  );
}