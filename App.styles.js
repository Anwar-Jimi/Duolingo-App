import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold", 
    alignSelf: "stretch",
  },

  optionsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between"
  },

  optionContainer:{
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 3,

    width: "46%",
    height: "46%",

    padding: 10,

    alignItems: "center",
  },

  optionImage: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
  },

  optionText: {

  }
});

export default styles;
