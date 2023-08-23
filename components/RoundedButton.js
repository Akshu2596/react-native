import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RoundedButton = ({ label, onPress, bgColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.button, {backgroundColor: bgColor}]}>
                <Text style={[styles.text, {color: textColor}]}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        height: 45,
    },
    text: {
        fontSize: 16,
    },
    button:{
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default RoundedButton