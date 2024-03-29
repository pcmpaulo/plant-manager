import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonPropos extends RectButtonProps {
    title: string,
    active?: boolean
}

export default function EnviromentButton ({title, active=false, ...rest}: EnviromentButtonPropos) {
    return (
        <RectButton 
            style={[styles.container, active && styles.containerActive]} 
            {...rest}
        >
            <Text style={[styles.text, active && styles.textActive]}> {title} </Text>
        </RectButton> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 5
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        color: colors.green,
        fontFamily: fonts.heading
    }
})