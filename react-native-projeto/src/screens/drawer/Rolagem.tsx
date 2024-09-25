import Item from '@/src/components/Item'
import { StyleSheet, ScrollView } from 'react-native'

export default function Rolagem() {
    return (
        <ScrollView>
            <Item principal="Item 1" secundario="Descrição do item 1" />
            <Item principal="Item 2" secundario="Descrição do item 2" />
            <Item principal="Item 3" secundario="Descrição do item 3" />
            <Item principal="Item 4" secundario="Descrição do item 4" />
            <Item principal="Item 5" secundario="Descrição do item 5" />
            <Item principal="Item 6" secundario="Descrição do item 6" />
            <Item principal="Item 7" secundario="Descrição do item 7" />
            <Item principal="Item 8" secundario="Descrição do item 8" />
        </ScrollView>
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
        paddingTop: 10,
        fontWeight: 'bold',
    },
    secundario: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        color: '#777',
        fontStyle: 'italic',
    },
    imagemRemota: {
        width: 300,
        height: 200,
        marginBottom: 30,
    },
})
