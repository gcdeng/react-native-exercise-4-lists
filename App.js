import React from 'react';
import { Text, View, Button, SectionList } from 'react-native';

import styles from './styles';
import Row from './Components/Row';
// import objData from './objects';
import AddObjectForm from './Components/AddObjectForm';

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text style={styles.keyRow}>{section.title}</Text>

export default class App extends React.Component {
  state = {
    showForm: false,
    objData: {
      'key0': 'test',
      'key1': [1, 2, 3],
      'key2': ['a', 'b', 'c'],
      'key3': 'test',
      'key4': 'test',
      'key5': 'test',
      'key6': 'test',
      'key7': 'test',
      'key8': 'test',
      'key9': 'test',
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  handleFormSubmit = (key, val) => {
    let parsedVal;
    try{
      // parse array object
      parsedVal = JSON.parse(val);
    } catch (err) {
      parsedVal = val;
    }
    
    this.setState(prevState=>{
      if(prevState.objData[key] instanceof Array){
        if(typeof parsedVal === 'string'){
          return {
            objData: {...prevState.objData, [key]: [parsedVal, ...prevState.objData[key]]},
            showForm: false
          } 
        } 
        else {
          return {
            objData: {...prevState.objData, [key]: [...parsedVal, ...prevState.objData[key]]},
            showForm: false
          } 
        }
      }
      return {
        objData: {...prevState.objData, [key]: parsedVal},
        showForm: false
      } 
    });
  }

  render() {
    if(this.state.showForm) return <AddObjectForm onSubmit={this.handleFormSubmit}/>

    const sections = Object.keys(this.state.objData).sort().map(key=>{
      let data = [];
      data.push({
        key,
        property: key,
        values: this.state.objData[key]
      });
      return {
        title: key,
        data
      }
    });

    return (
      <View style={styles.container}>
        <Button title='Modify object' onPress={this.toggleForm}/>
        <SectionList 
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    );
  }
}
