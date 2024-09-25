import { View, StyleSheet, Text, TextInput, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Entrada() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const quandoClicar = () => {
        Alert.alert('Enviado!', `Email: ${email}\nSenha: ${password}`)
        setEmail('')
        setPassword('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe seu email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={(e) => setEmail(e.toLowerCase())}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe sua senha"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.botao} onPress={quandoClicar}>
                <Text style={styles.textoBotao}>Clique para enviar</Text>
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
    label: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 16,
        color: '#000',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '80%',
    },
    botao: {
        backgroundColor: '#00BFFF',
        padding: 15,
        borderRadius: 5,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 16,
    },
})
