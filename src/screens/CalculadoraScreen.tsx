import React, { useState,useRef } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { UseCalculadora } from '../hooks/UseCalculadora'


export const CalculadoraScreen = () => {
 const {numero,numeroAnterior,armarNumero,limpiar,positivoNegativo,deleteFuncion,btnDividir,btnMultiplicar,btnSumar,calcular,btnRestar} = UseCalculadora()
  
  return (
    <View style={styles.calculadoraContainer}>
       {
        (numeroAnterior !== '0') && (
          <Text style={styles.ResultadoPequeno}>{ numeroAnterior }</Text>
        )
       } 
        <Text 
        style={styles.Resultado}
        numberOfLines = {1}
        adjustsFontSizeToFit
        >{numero}</Text>
      
         {/*Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="C" color="#9B9B9B" accion = {limpiar}/>
            <BotonCalc texto="+/-" color="#9B9B9B" accion = {positivoNegativo}/>
            <BotonCalc texto="del" color="#9B9B9B" accion = {deleteFuncion}/> 
            <BotonCalc texto="/" color="#FF9427" accion = {btnDividir}/>
        </View>

         {/*Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="7" accion={armarNumero}/>
            <BotonCalc texto="8" accion={armarNumero}/>
            <BotonCalc texto="9" accion={armarNumero}/> 
            <BotonCalc texto="X" color="#FF9427" accion = {btnMultiplicar}/>
        </View>

        
         {/*Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="4" accion={armarNumero}/>
            <BotonCalc texto="5" accion={armarNumero}/>
            <BotonCalc texto="6" accion={armarNumero}/> 
            <BotonCalc texto="-" color="#FF9427" accion = {btnRestar}/>
        </View>

        
         {/*Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="1" accion={armarNumero}/>
            <BotonCalc texto="2" accion={armarNumero}/>
            <BotonCalc texto="3" accion={armarNumero}/> 
            <BotonCalc texto="+" color="#FF9427" accion = {btnSumar}/>
        </View>

        
         {/*Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="0" accion={armarNumero} ancho/>
            <BotonCalc texto="." accion={armarNumero}/>
            <BotonCalc texto="=" accion = {calcular}/> 
        </View>

    </View>
    
  )
}
//ff9427 naranja
//2d2d2d gris