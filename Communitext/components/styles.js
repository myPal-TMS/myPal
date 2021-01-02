// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#CBC2B9',
  },
  text: {
    fontFamily: './assets/fonts/Dosis-Bold.ttf',
    //fontStyle: normal,
    //fontWeight: bold,
    fontSize: 20,
    lineHeight: 25,
    //display: flex,
    //alignItems: center,
    //textAlign: center,
    
    color: '#FFFFFF'
  },
});

export default styles;