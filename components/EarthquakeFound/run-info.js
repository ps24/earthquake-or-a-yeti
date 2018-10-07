import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RunInfo extends Component{
    constructor(props){
        super(props);
        this.state = { value: this.props.value };
    }

    formatValue() {
        return this.state.value;
    }

    render() {
        let value = this.state.value ? this.formatValue() : '-';
        return (
            <View style = {styles.runInfoWrapper}>
            
                <Text style = {styles.runInfoTitle}> {this.props.title.toUpperCase()}</Text>
                <Text style = {styles.runInfoValue}>{value}</Text>
                {/* <Text style = {styles.runInfoValue}>{this.props.value}</Text> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    runInfoWrapper:{
        flex: 1,
        backgroundColor: '#34495e',

/*         backgroundColor: 'rgba(255,255,255,0.75)', */
        paddingVertical: 5, /* margin */
        /* flexDirection: 'column-reverse', */
    },
    runInfoTitle: {
        textAlign: 'left',
        fontWeight: '700',
        color: '#3498db'
    },
    runInfoValue: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '200',
        paddingVertical: 5,
        color: 'white'
    }
})