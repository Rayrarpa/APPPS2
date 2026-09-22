import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Card({ titulo, corFundo = '#f0f0f0' }) {
    return (

        <View style={[styles.cardContainer, { backgroundColor: corFundo }]}>
            <Text style={styles.tituloCard}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 20,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    tituloCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default function App() {
    return (
        <View>
            <Card titulo={"ababa"} />
        </View>
    )
}