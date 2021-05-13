import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import waterDrop from '../assets/water_drop.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Button from '../components/Button';

export function Confirmation (){
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=''
                    height={150}
                    width={150} 
                />
                <Text style={styles.plantName}>
                    Plant Name
                </Text>
                <Text style={styles.plantAbout}>
                    Um belo texto descrevendo a planta e como ela se comporta.
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.plantTip}>
                    <Image 
                        source={waterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        A dica de como regar fica aqui.
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado
                </Text>
                <Button title="Cadastrar Planta" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "space-between",
        backgroundColor: colors.shape
    },
    plantInfo: {
        
    },
    plantName: {

    },
    plantAbout: {

    },
    controller: {

    },
    plantTip: {
        
    },
    tipImage: {

    },
    tipText: {

    },
    alertLabel: {

    }
})