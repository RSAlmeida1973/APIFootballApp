import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
//import { Card, Avatar, ListItem } from 'react-native-elements';
//import { useSelector } from 'react-redux';

const AboutScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>About Me</Card.Title>
                <Card.Divider />
                <Text style={styles.cardText}>
                    Considering how much I love soccer (I am Brazilian, after all!), I decided to create this simple app allowing you to pull up scores, stats, and standings for any professional league around the world.  I hope you enjoy it!
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

export default AboutScreen;