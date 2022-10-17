import React from 'react';
import cuadrado from '../../styles/cuadrado.scss'

const CuadradoColorAleatorio = ({defectCuadrado, colorAleatorio, stopColor}) => {

    const changeCuadrado = () => {
        defectCuadrado();
    }

    const stopChangeColor = () => {
        stopColor();
    }
    return (
        <>
            <div
            className='cuadrado' 
            style={{backgroundColor: colorAleatorio}} 
            onMouseOut={changeCuadrado}
            onDoubleClick={stopChangeColor}></div>
        </>
        
    );
}

export default CuadradoColorAleatorio;
