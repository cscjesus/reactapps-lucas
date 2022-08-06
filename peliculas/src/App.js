import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';

function App() {
  let peliculas = peliculasJson;
  return (
    <PageWrapper>
      {
        // peliculas.map(pelicula => {
        //   return (
        //     <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
        //       director={pelicula.director} actores={pelicula.director} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
        //       Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
        //     </Pelicula>
        //   );
        // })
        peliculas.map(pelicula =>
          <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
            director={pelicula.director} actores={pelicula.director} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
            {pelicula.descripcion}
          </Pelicula>
        )
      }





      {/* <Pelicula titulo="into the wild (2014)" calificacion="7.8"
      director="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min" img="images/uploads/mv2.jpg">
      Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
    </Pelicula> */}
    </PageWrapper>

  );
}

export default App;
