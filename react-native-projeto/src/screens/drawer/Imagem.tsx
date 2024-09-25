import { View, StyleSheet, Text, Image } from 'react-native'

export default function Imagem() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Imagem local</Text>
            <Image
                source={require('../../../assets/images/react-logo.png')}
                style={styles.imagem}
            />
            <Text style={styles.label}>Imagem online</Text>
            <Image
                source={{ uri: 'https://dummyimage.com/300x200/000/fff' }}
                style={styles.imagem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
    },
    imagem: {
        width: 200,
        height: 200,
    },
})
