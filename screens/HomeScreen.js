import { Text, ScrollView } from 'react-native';
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
                <Text>
                    Welcome to the soccer app!.
                </Text>
            </Card>
        </ScrollView>
    );
};

export default HomeScreen;