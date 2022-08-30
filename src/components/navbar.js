import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper'

export default function Navbar({ navigation, onHome }) {
return (
    <Appbar.Header>
        {
        !onHome &&
        <Appbar.BackAction 
            onPress={ () => navigation.navigate( 'Home' )}
        />
        }
        <Appbar.Content title="CriptoFav" />
    </Appbar.Header>
);
}

