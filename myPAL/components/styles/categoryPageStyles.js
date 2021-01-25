// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
//import {Font} from 'expo';

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
    //paddingBottom: 30,
    //paddingHorizontal: 30,
    backgroundColor: '#CBC2B9',
    //width: windowWidth,
    //height: windowHeight,
    //flexDirection: 'row'
    //fontFamily: 'Dosis-Bold'
    //justifyContent: 'space-between',
    //alignItems: 'center'
    //paddingTop: 30
    alignItems: 'center'
    

  },

  gallery: {
    
    //flex: 1,
    //flexDirection: 'column',
    justifyContent: 'space-evenly',
    //flexWrap: 'wrap',
    //paddingHorizontal: 20,
    //marginLeft: 40,
    
    //flexWrap: 'wrap',
    //width: windowWidth,
    //padding: 10,
    //height: windowHeight,
    //marginBottom: 30,
    alignItems: 'center',
    //margin: 50,
    //paddingTop: 30

    
   
   
    
    
    
    
  },

  button: {
    //flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 5,
    alignItems: 'center',
    //marginTop: 30,
    //flexWrap: 'wrap',
    backgroundColor: '#F4E4D5',
    width: 150,
    height: 200,
    borderRadius: 20,
    //marginRight: '5%',
    margin: '5%',
    marginTop: 20,
    marginBottom: 20,
    
    
  },

  picture: {
    flex: 1,
    //flexDirection: 'row',
    //alignItems: 'center',
    aspectRatio: 1/1,
    width: 100,
    height: 100,
    margin:15,
  },

  text: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    fontWeight: 'bold',
    fontSize: 25,
    //lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    //flex: 0.5,
    flexDirection: 'column',
    //alignItems: 'center',
    textAlign: 'center',
     //textShadowColor: '#FFFFFF',
    //textShadowOffset: {width: 0, height: 0},
     //textShadowRadius: 1.5,
    color: '#000000'
  },
});

export default styles;