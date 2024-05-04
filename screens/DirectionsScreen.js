import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
//import { Card, Avatar, ListItem } from 'react-native-elements';
// import { useSelector } from 'react-redux';
// import { baseUrl } from '../shared/baseUrl';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';


const DirectionsScreen = () => {
    return (
        <Card>
            <Card.Title>Directions on how to use this tool:</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>
                Step 1: Choose a country.
                Step 2: Choose a league.
                Step 3: Choose between Fixtures, Standings, Top Scorers, Top Assists, Top Red Cards, and Top Yellow Cards.
            </Text>


        </Card>
    )
}

const styles = StyleSheet.create({
    cardText: {
        justifyContent: 'center',
        margin: 20
    }
});

export default DirectionsScreen;