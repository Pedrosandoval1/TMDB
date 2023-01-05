import axios from "axios";
import "../app.css";
import { useState, useEffect } from "react";

const ApiTvs = () => {
  const [storeData, setStoreData] = useState([]);
  const [pagina, setPagina] = useState(1);


  const botonmas = () => {
    // console.log("antes",pagina);
    setPagina((item) => (item += 1));
    x();
    // console.log("despues",pagina);
  };
  const botonmenos = () => {
   pagina ===1 ? console.log("stop") : setPagina((item) => (item -= 1))
    // console.log("despues",pagina);
   
    // console.log("antes",pagina);
  };
  const datosApi = async () => {
    // console.log("pagina",pagina);
    const dataApi = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4110590fc63c5323bbd5c10e7e4bc9d1&language=es-MX&page=${pagina}`
    );
    setStoreData(dataApi.data.results);
  };
  const agregarPeliculas = () =>{
    console.log("holaa");
    
  }
    // ...setStoreData
    useEffect(() => {
      
      datosApi();
      // console.log(agregarPeliculas);
  
      // console.log(x);
    }, [pagina]);

  return (
    <>
      <button className="inputmas" onClick={botonmas}>
        +
      </button>
      <button className="inputmas" onClick={botonmenos}>
        -
      </button>
      <button className="inputmas" onClick={agregarPeliculas}>agregar peliculas</button>
      <div className="div_container">
        {storeData.map((item) => (
          <div className="div_carts" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApiTvs;
