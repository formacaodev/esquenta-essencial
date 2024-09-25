import { View, StyleSheet, Pressable, Text, Image } from 'react-native'

export default function Pressionavel() {
    const quandoClicar = () => {
        alert('Botão acionado!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.primario}>Botão comum:</Text>
            <Pressable style={styles.botao} onPress={quandoClicar}>
                <Text style={styles.textoBotao}>Clique</Text>
            </Pressable>
            <Text style={styles.primario}>Botão em imagem:</Text>
            <Pressable onPress={quandoClicar}>
                <Image
                    source={require('../../../assets/images/react-logo.png')}
                    style={styles.localImage}
                />
            </Pressable>
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
        fontSize: 16,
        paddingBottom: 15,
        marginTop: 50,
    },
    botao: {
        backgroundColor: '#FF0000',
        padding: 15,
        borderRadius: 5,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    localImage: {
        width: 200,
        height: 200,
    },
})
