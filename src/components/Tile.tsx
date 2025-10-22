import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    color: string;
    title?: string;
    iconName?: string;
}


const Tile = ({ color, title, iconName } : Props)=> {
    return (
        <View style={{ ...styles.container, backgroundColor: color }}>
            <Ionicons name={iconName || 'checkmark-circle'} size={32} color='#fff' />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
});


export default Tile;