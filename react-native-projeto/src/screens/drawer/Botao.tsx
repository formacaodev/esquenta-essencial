import { View, StyleSheet, Button } from 'react-native'

export default function Botao() {
    const quandoClicar = () => {
        alert('Botão acionado!')
    }

    return (
        <View style={styles.container}>
            <Button title="Clique" onPress={quandoClicar} color="#ff0000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
