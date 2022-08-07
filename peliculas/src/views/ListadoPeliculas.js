
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
// import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    buscarPeliculas();
  }, [])

  const buscarPeliculas = async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";
    let respuesta = await fetch(url, {
      "method": "GET",
      // 'mode':'no-cors',
      // "headers":"application/json",
      // "Content-Type":"application/json"
    });
    let json = await respuesta.json();
    setPeliculas(json);
    // alert(json);
  };

  const cargarPeliculas = () => {
    // peliculas = peliculas.slice(
    //   (paginaActual - 1) * TOTAL_POR_PAGINA,
    //   paginaActual * TOTAL_POR_PAGINA);
  }

  const getTotalPaginas = () => {
    let conatidadTotalPeliculas = peliculas.length;
    return Math.ceil(conatidadTotalPeliculas / TOTAL_POR_PAGINA);
  };

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA);

  return (
    <PageWrapper>
      {
        peliculasPorPagina.map(pelicula =>
          <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
            director={pelicula.director} actores={pelicula.director} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
            {pelicula.descripcion}
          </Pelicula>
        )
      }

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina);
      }} />

    </PageWrapper>

  );
}

export default ListadoPeliculas;

// npm install react-router-dom