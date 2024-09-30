import { useState } from "react";
const Contador = () => {
    // Logica del componente
    // let numero= 1;
    // Crear un estado
    const [numero, setNumero] = useState(1);

    // const sumar = ()=>{
    //     // numero++;
    //     setNumero(numero + 1);
    //     console.log(numero)
    // }

    return (
        <section className="text-center my-5">
            <h2>Contador</h2>
            <h4>{numero}</h4>
            <button className="btn btn-primary me-2" onClick={()=>setNumero(numero +1)}>+1</button>
            <button className="btn btn-danger" onClick={()=>setNumero(numero -1)}>-1</button>
        </section>
    );
};

export default Contador;