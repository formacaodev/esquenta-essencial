import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Inicio from './Inicio'
import Texto from './Texto'
import Imagem from './Imagem'
import Rolagem from './Rolagem'
import Botao from './Botao'
import Pressionavel from './Pressionavel'
import Entrada from './Entrada'
import Pilha from '../stack'
import Abas from '../tabs'

export default function App() {
    const Drawer = createDrawerNavigator()

    function tela(props: { nome: string; icone: string; titulo: string; componente: any }) {
        return (
            <Drawer.Screen
                name={props.nome}
                component={props.componente}
                options={{
                    drawerIcon: ({ focused }: any) => (
                        <Ionicons
                            name={props.icone as any}
                            size={24}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                    drawerLabel: props.titulo,
                    title: props.titulo,
                }}
            />
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                {tela({
                    nome: 'Inicio',
                    icone: 'home-outline',
                    titulo: 'Início',
                    componente: Inicio,
                })}

                {tela({
                    nome: 'Texto',
                    icone: 'text-outline',
                    titulo: 'Texto',
                    componente: Texto,
                })}

                {tela({
                    nome: 'Imagem',
                    icone: 'image-outline',
                    titulo: 'Imagem',
                    componente: Imagem,
                })}

                {tela({
                    nome: 'Rolagem',
                    icone: 'list-outline',
                    titulo: 'Rolagem',
                    componente: Rolagem,
                })}

                {tela({
                    nome: 'Botao',
                    icone: 'ellipse-outline',
                    titulo: 'Botão',
                    componente: Botao,
                })}

                {tela({
                    nome: 'Pressionavel',
                    icone: 'finger-print',
                    titulo: 'Pressionável',
                    componente: Pressionavel,
                })}

                {tela({
                    nome: 'Entrada',
                    icone: 'key-outline',
                    titulo: 'Entrada',
                    componente: Entrada,
                })}

                {tela({
                    nome: 'Stack',
                    icone: 'layers-outline',
                    titulo: 'Stack',
                    componente: Pilha,
                })}

                {tela({
                    nome: 'Tabs',
                    icone: 'albums-outline',
                    titulo: 'Tabs',
                    componente: Abas,
                })}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        color: 'red',
    },
})
