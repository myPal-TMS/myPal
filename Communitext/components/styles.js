// A common style that can be used in more than one component which can be define here, i found shadow, evlevation as common requirement in my projects. You can alter, add as you like.
import React from 'react';
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({

  container: {
    //flex: 1,
    padding: 40,
    backgroundColor: '#CBC2B9',
    //fontFamily: 'Dosis-Bold'
  },

  button: {
    flex: 2,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F4E4D5',
    width: 150,
    


  },
  picture: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    aspectRatio: 1/1,
    width: 100,
    height: 100,
    margin:10,
    
    
    
   

  },
  text: {
    //fontFamily: 'Dosis-Bold',
    //fontStyle: normal,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    //display: flex,
    //alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    
    
    color: '#FFFFFF'
  },
});

export default styles;