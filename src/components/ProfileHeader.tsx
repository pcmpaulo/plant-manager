import React, {useEffect, useState} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import profileImage from '../assets/profile.png';

export default function ProfileHeader () {
    const [profileName, setProfileName] = useState<string>();

    useEffect(() => {
        async function loadProfileName() {
            const profileName = await AsyncStorage.getItem('@plantmanager:profileName');
            setProfileName(profileName || '');
        }
        loadProfileName();
    }, []);

    return (
        <View 
            style={styles.container}
        >
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.profileName}>{profileName}</Text>
            </View>

            <Image 
                style={styles.profileImage} 
                source={profileImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    profileName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35
    }
})