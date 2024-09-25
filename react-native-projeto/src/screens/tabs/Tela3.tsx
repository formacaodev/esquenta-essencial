import { View, Text, StyleSheet } from 'react-native'

export default function Tela3() {
    return (
        <View style={styles.view}>
            <Text style={styles.primaryText}>Última e terceira página!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#009090',
        fontWeight: 'bold',
    },
})
