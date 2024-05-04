import { Text } from 'react-native';
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
            <Text style={{margin: 10}}>
                Step 1: fill in the two input fields with your starting location and you end destination. 
                Step 2: Click Submit. 
                Step 3: Take a look at the results given back. 
                Step 4: (optional) remove results you don't want by clicking on the 'minus' icon beside them . 
                Step 5: (optional) Print out the page or take a screenshot for your future reference.
            </Text>


        </Card>
    )
}


export default DirectionsScreen;