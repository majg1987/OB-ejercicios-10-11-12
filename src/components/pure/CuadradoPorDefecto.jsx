import React from 'react';
import Cuadrado from '../../styles/cuadrado.scss'

const CuadradoPorDefecto = ({changeColorCuadrado, stopColor}) => {
    const changeCuadrado = () => {
        changeColorCuadrado();
    }

    const stopChangeColor = () => {
        stopColor();
    }
    return (
        <>
            <div className='cuadrado bg-black'  onMouseOver={changeCuadrado} onDoubleClick={stopChangeColor}></div>  
        </>

    );
}

export default CuadradoPorDefecto;
