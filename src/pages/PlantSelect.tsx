import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

import ProfileHeader from '../components/ProfileHeader';
import EnviromentButton from '../components/EnviromentButton';
import PlantCardPrimary from '../components/PlantCardPrimary';
import Load from '../components/Load';

interface EnviromentProps {
    key: string;
    title: string;
}

interface PlantCardProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    enviroments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect (){
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantCardProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantCardProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    function handleEnviromentSelected(enviroment: string) {
        setEnviromentSelected(enviroment)

        if (enviroment == 'all')
            return setFilteredPlants(plants)
        

        const filtered = plants?.filter(plant => 
            plant.enviroments.includes(enviroment)
        );

        setFilteredPlants(filtered);
    }

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_enviroments?_sort=title&order_asc')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])
        }

        fetchEnviroment();
    }, [])

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get('plants?_sort=name&order_asc')
            setPlants(data)
            setFilteredPlants(data)
            setLoading(false)
        }

        fetchPlants();
    }, [])

    if (loading) 
        return <Load />
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <ProfileHeader />
                <View>
                    <Text style={styles.title}>Em qual ambiente</Text>
                    <Text style={styles.subTitle}>Você quer colocar sua planta?</Text>
                </View>
            </View>
            <View>
                <FlatList 
                    data={enviroments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnviromentButton 
                            title={item.title} 
                            active={item.key == enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>
            <View style={styles.plantsListContainer}>
                <FlatList 
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (<PlantCardPrimary data={item} />)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.backgound
    },
    profileHeader: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
    },
    subTitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        paddingLeft: 30
    },
    plantsListContainer: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
});
