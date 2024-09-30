import { useState } from "react";
const Contador = () => {
    // Logica del componente
    // let numero= 1;
    // Crear un estado
    const [numero, setNumero] = useState(1);

    const sumar = ()=>{
        numero++;
        console.log(numero)
    }

    return (
        <section className="text-center my-5">
            <h2>Contador</h2>
            <h4>{numero}</h4>
            <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
            <button className="btn btn-danger">-1</button>
        </section>
    );
};

export default Contador;