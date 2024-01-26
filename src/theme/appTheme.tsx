import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        paddingHorizontal:20,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-end'
    },
    Resultado: {
        color: 'white',
        fontSize: 60,
        textAlign:'right',
        marginBottom: 10
    },
    ResultadoPequeno:{
        color:'rgba(255,255,255,0.37)',
        fontSize:30,
        textAlign:'right'
    },
    button:{
        height:80,
        width:80,
        borderRadius:100,
        backgroundColor:'#2d2d2d',
        justifyContent:'center',
        marginHorizontal:10
    },
    buttonTexto: {
        textAlign: 'center',
        padding:10,
        color:'white',
        fontSize:30,
        fontWeight: '400'
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal:10
    },naranja: {
        backgroundColor: '#ff9427'
    },gris: {
        backgroundColor: '#2d2d2d'
    }
});