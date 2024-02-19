//import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis albumes favoritos son:</h1>
      <Perfil 
        nombre='Vida'
        grupo='Sui Generis'
        imagen='Vida'
        pais='Argentina'
        fecha='1972'
        descripcion='Album debut de Sui Generis. Folk Rock.'
        spotify= 'https://open.spotify.com/intl-es/album/0EdYPXNaKi8QOBwq1C13jM'
        youtube= 'https://www.youtube.com/watch?v=LQul1cclFIs'
        wikipedia= 'https://es.wikipedia.org/wiki/Vida_(%C3%A1lbum_de_Sui_Generis)'
      />

      <Perfil
        nombre='Pateando Piedras'
        grupo='Los prisioneros'
        imagen='PateandoPiedras'
        pais='Chile'
        fecha='1986'
        descripcion='Segundo album de estudio de Los Prisioneros. New Wave.'
        spotify= 'https://open.spotify.com/intl-es/album/6RctuyYdvP65YaFZMwv9Xo'
        youtube= 'https://www.youtube.com/watch?v=sDNvBpBAul4'
        wikipedia= 'https://es.wikipedia.org/wiki/Pateando_piedras'

      />

      <Perfil
        nombre='Artaud'
        grupo='Pescado Rabioso'
        imagen='Artaud'
        pais='Argentina'
        fecha='1973'
        descripcion='Tercer album de estudio de Pescado Rabioso. Segundo album solista de Spinetta.  Art Rock.'
        spotify= 'https://open.spotify.com/intl-es/album/5MJR9j21vjEi4ODxzhvoTA'
        youtube= 'https://www.youtube.com/watch?v=LXYZQTt-Kuo'
        wikipedia= 'https://es.wikipedia.org/wiki/Artaud_(%C3%A1lbum)'     
      />

     </div>
    </div>
  );
}

export default App;
