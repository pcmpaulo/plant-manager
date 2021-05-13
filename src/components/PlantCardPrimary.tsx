import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantCardPropos extends RectButtonProps {
    data: {
        name: string,
        photo: string
    }
}

export default function PlantCardPrimary ({data, ...rest}: PlantCardPropos) {
    return (
        <RectButton 
            style={styles.container}
        >
            <SvgFromUri 
                uri={data.photo} 
                width={70}
                height={70}
            />
            <Text style={styles.text}> {data.name} </Text>
        </RectButton> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.shape,
        width: '45%',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})
