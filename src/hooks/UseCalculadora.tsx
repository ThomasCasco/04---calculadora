import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
  }

export const UseCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')
    //cuando el cambio el cambio de la variable no impacta el aspecto visual.
    const ultimaOperacion = useRef<Operadores>()
    
    const limpiar = () => {
      setNumero('0');
      setNumeroAnterior('0');
    }
  
    const armarNumero = ( numeroTexto:string ) => {
      //No aceptar doble punto
      if (numero.includes('.') && numeroTexto === '.') return;
  
      if (numero.startsWith('0') || numero.startsWith('-0')){
        
        //es el punto decimal
        if (numeroTexto === '.'){
          setNumero(numero + numeroTexto)
  
          // Evaluar si es otro cero y hay un punto
        } else if(numeroTexto === '0' && numero.includes('.') ){
          setNumero(numero + numeroTexto);
  
          //si es un numero dif de 0 y no hay punto 
        }else if(numeroTexto !== '0' && !numero.includes('.')) {
          setNumero(numeroTexto)
  
          //evitar 00
        }else if (numeroTexto === '0' && !numero.includes('.')){
          setNumero(numero)
        }
  
      }else {
        setNumero(numero + numeroTexto)
      }
  
    } 
  
    const deleteFuncion = () => {
      if (numero.length === 1 || (numero.length === 2 && numero.startsWith('-'))){
        setNumero('0')
      }else {
        setNumero(numero.slice(0,-1))
      }
    }
  
    const positivoNegativo = () =>  {
      if (numero.includes('-')) {
        setNumero (numero.replace('-',''));
      }else {
        setNumero('-' + numero);
      }
    }
  
    const CambiarNumPorAnt = () => {
      if(numero.endsWith('.')){
        setNumeroAnterior(numero.slice(0,-1));
      }else {
        setNumeroAnterior(numero);
      }
      setNumero('0 ')
    }
  
    const btnDividir = () => {
      CambiarNumPorAnt()
      ultimaOperacion.current = Operadores.dividir;
    }
  
    const btnMultiplicar = () => {
      CambiarNumPorAnt()
      ultimaOperacion.current = Operadores.multiplicar;
    }
  
    const btnRestar = () => {
      CambiarNumPorAnt()
      ultimaOperacion.current = Operadores.restar;
    }
  
    const btnSumar = () => {
      CambiarNumPorAnt()
      ultimaOperacion.current = Operadores.sumar;
    }
  
    const calcular = () => {
      const numero1 = Number( numero );
      const numero2 = Number( numeroAnterior);
  
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
            setNumero(`${numero1 + numero2}`)
          break;
  
          case Operadores.restar:
            setNumero(`${numero2 - numero1}`)
          break;
  
          case Operadores.multiplicar:
            setNumero(`${numero1 * numero2}`)
          break;
  
          case Operadores.dividir:
            setNumero(`${numero2 / numero1}`)
          break;
      
      }

      setNumeroAnterior('0');
    }

    return {numero,numeroAnterior,limpiar,positivoNegativo,deleteFuncion,btnDividir,btnMultiplicar,btnSumar,calcular,btnRestar,armarNumero}
}
