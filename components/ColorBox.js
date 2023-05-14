/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
    }
    return (
        <>
            <View style={[boxColor, styles.box]}>
                <Text style={styles.boxText}>
                    {colorName}: {colorHex}
                </Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({

    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    // cyan: {
    //     backgroundColor: '#2aa198',
    // },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
export default ColorBox;