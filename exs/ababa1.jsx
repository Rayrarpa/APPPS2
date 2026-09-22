import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [visivel, setVisivel] = useState(false);

    return (
        <View style={styles.container}>
            <Button
                title={visivel ? "Ocultar" : "Mostrar"}
                onPress={() => setVisivel(!visivel)}
            />

            {visivel && (
                <Text style={styles.texto}>Este é o texto oculto!</Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    texto: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
    },
});