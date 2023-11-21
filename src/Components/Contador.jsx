import { useState } from "react";
import "./Contador.css";

const Contador=()=> {
const [contador, setContador]=useState(0);

const sumar=()=> {
    setContador(contador+1)
}


const reinicio=()=> {
    setContador(0)
}


const restar=()=> {
    setContador(contador-1)
}
    return (
       <div className="Container">
        <h1>Contador</h1>
        <h2 style={{ margin: "0 auto" }}>{contador}</h2>
        <div className="Container__button">
        <button onClick={sumar}>Sumar</button>
        <button onClick={reinicio}>Restablecer</button>
        <button onClick={restar}>Restar</button>
        </div>
       </div>
    )
}

export {Contador}