import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function Confirmation (){
    const navigation = useNavigation();

    function handleFinishRegisterButton() {
        navigation.navigate('PlantSelect');   
    }

    return (
        <View style={styles.container}>
            <Feather name="smile" style={styles.emojiIcon}/>
            <Text style={styles.title}>
                Prontinho
            </Text>
            <Text style={styles.subTitle}>
                Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito cuidado.
            </Text>
            <View style={styles.button}>
                <Button 
                    title='Começar'
                    onPress={handleFinishRegisterButton}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems:"center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    emojiIcon: {
        fontSize: 80,
        color: colors.green_dark
    }, 
    title: {
        fontSize: 22,
        lineHeight: 38,
        fontFamily: fonts.heading,
        color: colors.heading,
        textAlign: 'center',
        marginTop: 15
    }, 
    subTitle: {
        textAlign: "center",
        lineHeight: 24,
        fontSize: 17,
        paddingVertical: 15,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 50    
    }
})