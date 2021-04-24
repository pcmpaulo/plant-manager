import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import LogoPng from '../../assets/Logo.png';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Welcome() {
    const navigation = useNavigation();

    function handleStartButton() {
        navigation.navigate('UserIdentification');   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'} 
                forma fácil
            </Text>

            <Image source={LogoPng} style={styles.image} resizeMode="contain" />

            <Text style={styles.subTitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar
            </Text>

            <TouchableOpacity 
                onPress={handleStartButton}
                style={styles.button} 
                activeOpacity={0.6}
            >
                <Feather name="chevron-right" style={styles.buttonIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent: "space-around",
        paddingHorizontal: 16
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    image: {
        height: Dimensions.get('window').width * 0.75
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: { 
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        width: 56,
        height: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }

})
