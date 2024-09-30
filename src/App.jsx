import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";
import Contador from "./components/Contador";

function App() {
  return (
    <main className="container my-4">
      <h1 className="text-center">Primer proyecto react</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        cumque nesciunt eius, sunt neque illum ratione. <br /> Assumenda sed ipsa modi
        adipisci aut minus laborum labore dignissimos. Non beatae tempore
        mollitia.
      </p>
      {/* invocar los componentes */}
      <Informacion></Informacion>
      {/* <Informacion/>/ */}
      <Contador/>
    </main>
  );
}

export default App;
