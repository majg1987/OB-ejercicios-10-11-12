import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CuadradoColorAleatorio from '../pure/CuadradoColorAleatorio';
import CuadradoPorDefecto from '../pure/CuadradoPorDefecto';


const Cuadrado = () => {

    const [inCuadrado, setInCuadrado] = useState(false);
    const [red, setRed] = useState(null);
    const [green, setGreen] = useState(null);
    const [blue, setBlue] = useState(null);
    const [color, setColor] = useState("black")
    const [changeColor, setChangeColor] = useState(true);

    const changeColorCuadrado = () => {
        if (changeColor) {
            setInCuadrado(!inCuadrado);
            setRed(Math.floor(Math.random() * 255 + 1));
            setGreen(Math.floor(Math.random() * 255 + 1));
            setBlue(Math.floor(Math.random() * 255 + 1));
            setColor(`rgb(${red},${green},${blue})`)
        }

    }

    const defectCuadrado = () => {
        if (changeColor) {
            setInCuadrado(!inCuadrado);
        }
    }

    const stopColor = () => {
        setChangeColor(!changeColor);
    }

    return (
        <>
            {inCuadrado ?
                (<CuadradoColorAleatorio defectCuadrado={defectCuadrado} colorAleatorio={color} stopColor={stopColor}/>)
                :
                (<CuadradoPorDefecto changeColorCuadrado={changeColorCuadrado} stopColor={stopColor}/>)
            }    
        </>
    );
}

export default Cuadrado;
