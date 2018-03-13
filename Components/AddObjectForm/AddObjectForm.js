import React from 'react';
import {TextInput, Button, View} from 'react-native';
import styles from './styles';

export default class AddObjectForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyText: '',
            valText: '',
        }
    }

    handleKeyChange = keyText => {
        this.setState({keyText});
    }

    handleValChange = valText => {
        this.setState({valText});
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.keyText, this.state.valText);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInputField}
                    onChangeText={this.handleKeyChange} 
                    value={this.state.keyText} 
                    placeholder="Key"
                />
                <TextInput 
                    style={styles.textInputField}
                    onChangeText={this.handleValChange} 
                    value={this.state.valText} 
                    placeholder="Value"
                />
                <Button
                    title="Submit" 
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}