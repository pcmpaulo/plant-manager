import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../../components/button/Button';

export function UserIdentification (){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleSubmitButton() {
        navigation.navigate('Confirmation');   
    }

    function handleInputBlur () {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus () {
        setIsFocused(true);
    }
    function handleInputChange (value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Feather name="smile" style={styles.emojiIcon}/>
                        <Text style={styles.title}>
                            Como podemos{'\n'}chamar você?
                        </Text>
                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && 
                                {borderColor: colors.green}
                            ]} 
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.button}>
                            <Button 
                                title='Confirmar'
                                onPress={handleSubmitButton}
                            />
                        </View>
                        
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems:"center",
        justifyContent: "space-around"
    },
    form: {
        flex: 1,
        justifyContent: 'center', 
        width: '100%',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emojiIcon: {
        fontSize: 80,
        color: colors.gray
    }, 
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        textAlign: 'center',
        marginTop: 20
    }, 
    button: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})