import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button } from 'react-native';
import ZipCodeForm from './ZipCodeForm';

const monsters = [
    {
        monster: 'Big Foot',
        image: require('../images/bigfoot.png')
    },
    {
        monster: 'Godzilla',
        image: require('../images/godzilla.png')
    }, 
    {
        monster: 'Lochness Monster',
        image: require('../images/lochness.png')
    }, 
    {
        monster: 'Ogre',
        image: require('../images/ogre.png')
    },
    {
        monster: 'Yeti',
        image: require('../images/yeti.png')
    },
];

export default class ZipCode extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            activeMonsterIndex: 0
        };
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
                        style = { styles.yetiImage }
                        source = { activeMonster.image }>
                    </Image>
            
                    <Text style = { styles.largeTitle }>
                        { 'Was that an earthquake \nor a ' + activeMonster.monster + '?' }
                    </Text>

                    <Button 
                        title = { 'Next monster' }
                        onPress = { this.nextMonster} />

                    <Text style = { styles.subtitle }>
                        { 'An app made to determine \nearthquake activity' }
                    </Text>
                </View>

                <View>
                    <ZipCodeForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    largeTitle: {
        color: '#3498db',
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