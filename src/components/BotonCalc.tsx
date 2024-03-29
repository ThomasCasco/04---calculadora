import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void
}

export const BotonCalc = ({ texto, color = '#2d2d2d',ancho = false,accion }: Props) => {
  return (
    <TouchableOpacity
        onPress={ ()=> accion(texto) }
    >
        <View style={{
        ...styles.button,
        backgroundColor: color,
        width: (ancho) ? 180 : 80
        }}>
        <Text style={{
            ...styles.buttonTexto,
            color: ( color === '#9b9b9b') ? 'black' : 'white'
        }}>{texto}</Text>
        </View>
    </TouchableOpacity>
  );
};
