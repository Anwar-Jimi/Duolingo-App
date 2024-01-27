import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import Button from "../Button";
import mascot from "../../../assets/images/mascot.png";

 const OpenEndedQuestions = ({question, onCorrect, onWrong}) => {

    const [input, setInput] = useState("");


    const onButtonPress = () => {
        if(question.answer === input){
            onCorrect();
        } else {
            onWrong();
        }
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
              value={input}
              onChangeText={setInput}
              placeholder="Type in english"
              style={styles.textUnput}
              textAlignVertical="top"
              multiline
            />
        <Button text="Continnue" onPress={onButtonPress} disabled={false} />
        </>
    )
 }

 export default OpenEndedQuestions;