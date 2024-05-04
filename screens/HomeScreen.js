import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
//import { Card, Avatar, ListItem } from 'react-native-elements';
//import { useSelector } from 'react-redux';
//import { baseUrl } from '../shared/baseUrl';

const HomeScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Soccer App</Card.Title>
                <Card.Divider />
                <Text style={styles.cardText}>
                    Welcome to the Soccer App!.
                    Click on the Home icon or swipe from the right to bring up the menu.
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardText: {
        justifyContent: 'center',
        margin: 20
    }
});

export default HomeScreen;