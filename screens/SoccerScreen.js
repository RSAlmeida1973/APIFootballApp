import { useState } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { Card } from 'react-native-elements';
//import { Card, Avatar, ListItem } from 'react-native-elements';
//import { useSelector } from 'react-redux';
//import { baseUrl } from '../shared/baseUrl';

const SoccerScreen = () => {
    const [showLeague, setShowLeague] = useState(false);
    const [showStat, setShowStat] = useState(false);
    //const [showResults, setShowResults] = useState(false);

    const [country, setCountry] = useState(1);
    const [league, setLeague] = useState(1);
    const [stat, setStat] = useState(1);

    const onCountryChange = (countryValue) => {
        setCountry(countryValue);
        setShowLeague(true);
    };

    const onLeagueChange = (leagueValue) => {
        setLeague(leagueValue);
        setShowStat(true);
    };

    return (
        <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Country:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={country}
                        onValueChange={(itemValue) => onCountryChange(itemValue)}
                    >
                        <Picker.Item label='USA' value={1} />
                        <Picker.Item label='Brazil' value={2} />
                        <Picker.Item label='England' value={3} />
                        <Picker.Item label='France' value={4} />
                        <Picker.Item label='Germany' value={5} />
                        <Picker.Item label='Spain' value={6} />
                    </Picker>
                </View>
                {showLeague ? (
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>League:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={league}
                        onValueChange={(itemValue) => onLeagueChange(itemValue)}
                    >
                        <Picker.Item label='USA' value={1} />
                        <Picker.Item label='Brazil' value={2} />
                        <Picker.Item label='England' value={3} />
                        <Picker.Item label='France' value={4} />
                        <Picker.Item label='Germany' value={5} />
                        <Picker.Item label='Spain' value={6} />
                    </Picker>
                </View>) : null}
                {showStat ? (
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Stat:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={stat}
                        onValueChange={(itemValue) => setStat(itemValue)}
                    >
                        <Picker.Item label='Fixtures' value={1} />
                        <Picker.Item label='Standings' value={2} />
                        <Picker.Item label='Top Scorers' value={3} />
                        <Picker.Item label='Top Assists' value={4} />
                        <Picker.Item label='Top Red Cards' value={5} />
                        <Picker.Item label='Top Yellow Cards' value={6} />
                    </Picker>
                </View>) : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardText: {
        justifyContent: 'center',
        margin: 20
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 2
    }
});

export default SoccerScreen;