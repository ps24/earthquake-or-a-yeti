import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class ZipCodeForm extends Component {
    render() {
        return (
            <View style = { styles.container } >
                <StatusBar>
                    barStyle = "light-content"
                </StatusBar>
                
                <TextInput
                    placeholder = "enter zipcode"
                    placeholderTextColor = "rgba(252,252,252,0.3)"
                    returnKeyType = "done"
                    keyboardType = "phone-pad"
                    style = { styles.input }
                />
                
                <TouchableOpacity style = { styles.buttonContainer }>
                    <Text style = { styles.buttonText }>CHECK NOW</Text> 
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 12

    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15, /* height of the 'CHECK' box */
        borderRadius: 12
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})