// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {Font} from 'expo';

/*
export class customText extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Dosis-Bold': require('../assets/fonts/Dosis-Bold.ttf'),
      'Oxygen-Light': require('../assets/fonts/Oxygen-Light.ttf')
    });

    this.setState({fontLoaded: true });
  }
}

*/
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    //flex: 1,
    paddingBottom: 30,
    //paddingHorizontal: 30,
    backgroundColor: '#CBC2B9',
    width: windowWidth,
    //height: windowHeight,
    //flexDirection: 'row'
    //fontFamily: 'Dosis-Bold'
    //justifyContent: 'space-between',
    //alignItems: 'center'
    
    

  },

  gallery: {
    
    //flex: 2,
    //flexDirection: 'row',
    //justifyContent: 'space-evenly',
    
    //flexWrap: 'wrap',
    //paddingRight: 20,
    //marginLeft: 30
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
    width: windowWidth-10,
    //height: windowHeight,
    //paddingBottom: 30,
    //alignItems: 'center',
    
    
    
    
    
  },

  button: {
    flex: 2,
    //flexDirection: 'column',
    //justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F4E4D5',
    width: 100,
    height: 200,
    borderRadius: 20,

    
    
  },

  sentenceButton: {
    //flex: 2,
    //flexDirection: 'column',
    //justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F4E4D5',
    
    borderRadius: 20,

    
    
  },

  submitText: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    marginTop: 20,
    //fontWeight: 'bold',
    fontSize: 25,
    
    //lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    //flex: 1,
    //flexDirection: 'column',
    textAlign: 'center',
    //letterSpacing: 1,
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    
    alignItems: 'center',
    borderColor: 'black'
    
  },
  
  submitButton: {
    //flex: 2,
    //flexDirection: 'column',
    //justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    height: 20,
    width: 100,
    
    borderRadius: 20,

    
    
  },
  

  text: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    fontWeight: 'bold',
    fontSize: 25,
    //lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    //flex: 1,
    //flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    //letterSpacing: 1,
   
    
    
    color: '#FFFFFF'
  },
});

export default styles;