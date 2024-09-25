import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tela1 from './Tela1'
import Tela2 from './Tela2'
import Tela3 from './Tela3'
import { Ionicons } from '@expo/vector-icons'

export default function Abas() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Tela1"
                component={Tela1}
                options={{
                    title: 'Primeira',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="home-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Tela2"
                component={Tela2}
                options={{
                    title: 'Segunda',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="cart-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Tela3"
                component={Tela3}
                options={{
                    title: 'Terceira',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="settings-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    )
}
