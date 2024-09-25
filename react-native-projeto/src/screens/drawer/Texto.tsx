import { View, StyleSheet, Text } from 'react-native'

export default function Texto() {
    return (
        <View style={styles.container}>
            <Text style={styles.primario}>Texto em Negrito e Azul</Text>
            <Text style={styles.secundario}>Texto em Itálico e Verde</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primario: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        color: 'blue',
        fontWeight: 'bold',
    },
    secundario: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        color: 'green',
        fontStyle: 'italic',
    },
})
