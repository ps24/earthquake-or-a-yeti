import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button } from 'react-native';
import ZipCodeForm from './ZipCodeForm';
import EStyleSheet from 'react-native-extended-stylesheet';

import monsters from '../Monsters';

export default class ZipCode extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            activeMonsterIndex: 0,
            zipcodeEntry: ''
        };
        this.handleCheckPress = this.handleCheckPress.bind(this);
    }

    handleCheckPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Loading',{
            zipcodeEntry: this.state.zipcodeEntry,
            monsterIndex: this.state.activeMonsterIndex,
        });
    }

    handleTextChange = (zipcodeEntry) => {
        this.setState({
            activeMonsterIndex: this.state.activeMonsterIndex,
            zipcodeEntry: zipcodeEntry
        });
    }
 
    nextMonster = () => {
        const { activeMonsterIndex } = this.state

        if (activeMonsterIndex < monsters.length - 1) {
            this.setState({
                activeMonsterIndex: activeMonsterIndex + 1
            });
        }else {
                this.setState({
                    activeMonsterIndex: 0
                });
            }
        }

    componentDidMount() {
        this.nextMonster();
    }
    
    render() {
        const activeMonster = monsters[this.state.activeMonsterIndex]
        
        return (
            <KeyboardAvoidingView behavior = "padding" style = { styles.container }>
                <View style = { styles.mainContainer }>
                    <Image 
                        resizeMode="contain"
                        style = { styles.yetiImage }
                        source = { activeMonster.image }>
                    </Image>
            
                    <Text style = { styles.largeTitle }>
                        { 'Was that an earthquake \nor a ' + activeMonster.monster + '?' }
                    </Text>

                    <Button 
                        title = { 'Next monster' }
                        onPress = { this.nextMonster} />

                </View>

                <View>
                    <ZipCodeForm onPress={this.handleCheckPress} onChangeText={this.handleTextChange}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = EStyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '$backgroundColor',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    largeTitle: {
        color: '$textColor',
        textAlign: 'center',
        fontSize: 40,
        width: 350,
        fontWeight: '900'
    },
    subtitle: {
        color: 'white',
        marginTop: 10,
        width: 300,
        textAlign: 'center',
        opacity: 0.9
    },
    yetiImage: {
        width: 100,
        height: 100
    },
})