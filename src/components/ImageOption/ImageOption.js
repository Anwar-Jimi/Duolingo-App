import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

const ImageOption = ({image, text, isSelected, onPress}) => {
    return (
      <Pressable 
      onPress={onPress}
      style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
          <Image 
          source={{ uri: image}}
          resizeMode='contain'
          style={styles.optionImage}
          />
          <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
        </Pressable>
    );
  };

  ImageOption.propTypesropTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func,
  };

  ImageOption.defaultProps = {
    text: "Default",
    isSelected: false,
    onPress: () => {}
  }

  export default ImageOption;