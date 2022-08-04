import React from 'react';
import type {Node} from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';


const App: () => Node = () => {
  
  const [enteredGoalText, setText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setText(enteredText)
  }
  function addGoal(){
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,enteredGoalText])
  }
  
  return (
        <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}/>
              <Button title='Add Goal' onPress={addGoal}/>
          </View>
          <View style={styles.goalsContainer}>
            <FlatList data={courseGoals}
            renderItem={(itemData) =>{
              return(
                <View style={styles.estilolista}>
                  <Text style={styles.textColor}>{itemData.item}</Text>
                  </View>
              )
            }
          }
            alwaysBounceVertical={false} />
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingHorizontal: 15,
    
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 0,
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width:'70%',
    marginBottom: 0,
  },
  goalsContainer:{
    flex: 5,
  },
   estilolista: {
    backgroundColor: 'purple',
    margin: 15,
    padding: 8,
    borderRadius: 6,
  },
  textColor: {
    color:'white',
  }
});

export default App;
