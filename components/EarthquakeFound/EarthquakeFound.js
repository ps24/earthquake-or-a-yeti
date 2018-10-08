import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import ZipCode from '../ZipCode/ZipCode';

import RunInfo from './run-info';
import RunInfoNumeric from './run-info-numeric'


export default class EarthquakeFound extends Component {
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
        navigate('ZipCode');
    }

    
    render() {
        const zipcode = this.props.navigation.getParam('zipcodeEntry', 'NO ZIPCODE');

        return (
            <View style = {styles.entireWrapper}>  {/* wrapper takes up the entire screen */}

            <View style = {styles.titleWrapper}>
                <Text style = {styles.titleFont}>
                    Earthquake Found
                </Text>

            </View>
                <MapView style = {styles.map}
                    showsMyLocationButton 
                    initialRegion = {{
                        latitude: 37.33307,
                        longitude: -122.0324,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                />  {/* map view takes up the entire screen */}

                
                    <View style = {styles.infoWrapper1}>
                        <RunInfo title = {zipcode + " Earthquake Epicenter"} 
                            value = "-3.352, 62.353"
                            ref = {(info) => this.distanceInfo = info} 
                        />
                        <RunInfo title = "City of Epicenter" 
                            value = "Brisbane, CA"
                            ref = {(info) => this.speedInfo = info} 
                        />
                    </View>

                    <View style = {styles.infoWrapper2}>
                        <RunInfo title = "Magnitude" 
                            value = "2.7"
                            ref = {(info) => this.directionInfo = info} 
                        />
                        <RunInfo title = "Distance Away" 
                            value = "350 mi"
                            ref = {(info) => this.directionInfo = info} 
                        />
                    </View>

                    <View style = {styles.infoWrapper3}>
                        <RunInfo title = "Time of Earthquake" 
                            value = "July 1, 2018 14:53"
                            ref = {(info) => this.directionInfo = info} 
                        />
                        <RunInfo title = "Occured" 
                            value = "35 mins ago"
                            ref = {(info) => this.directionInfo = info} 
                        />
                    </View>

                    <View style = {styles.searchAgainWrapper}>
                        <TouchableOpacity style = { styles.buttonContainer }>
                        <Button 
                            title = 'RETURN TO SEARCH'
                            style={ styles.buttonText } onPress={this.handleCheckPress} /> 
                        </TouchableOpacity>

                    </View>
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
/*     infoWrapper inside of MAPVIEW and is see-through */
    entireWrapper:{
        backgroundColor: '#34495e',
        /* backgroundColor: 'rgba(255,255,255,0.75)',
 */        flex: 1,
    },
    titleWrapper:{
        flex: 1,
        //backgroundColor: '#34495e'
    },
    titleFont:{
        top: 20,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        color: '#3498db'
    },
    infoWrapper1:{
        /* position: 'absolute', */
        left: 5,
        bottom: 0,
        right: 0,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#34495e',
    },
    infoWrapper2:{
        /* position: 'relative', */
        left: 5,
        bottom: 0,
        right: 0,
        flex: 1,
        flexDirection: 'row',   
        backgroundColor: '#34495e',
    },
    infoWrapper3:{
        /* position: 'relative', */
        left: 5,
        bottom: 0,
        right: 0,
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: '#34495e',
    },
    searchAgainWrapper:{
        flex: 1, 
        padding: 20,
        backgroundColor: '#34495e',
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 12,
        
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    map: {
        flex: 4,
        padding: 15,
        borderRadius: 15,
        /* ...StyleSheet.absoluteFillObject */
    }
});
//export default EarthquakeFound;
