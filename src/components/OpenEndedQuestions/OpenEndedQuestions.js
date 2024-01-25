import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import Button from "../Button";
import mascot from "../../../assets/images/mascot.png";

 const OpenEndedQuestions = ({question, onCorrect, onWrong}) => {
    const onButtonPress = () => {
        
    };
    
    return(
        <>
        <Text style={styles.title}>Translate this sentence</Text>

        <View style={styles.row}>
            <Image source={mascot} style={styles.mascot} resizeMode="contain"/>
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>{question.text}</Text>
            </View>
        </View>

        <TextInput 
              placeholder="Type in english"
              style={styles.textUnput}
            />
        <Button text="Continnue" onPress={onButtonPress} disabled={true} />
        </>
    )
 }

 export default OpenEndedQuestions;