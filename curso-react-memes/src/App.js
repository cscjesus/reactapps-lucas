import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  // estados 
  const [linea1,setLinea1] = useState("");
  const [linea2,setLinea2] = useState("");
  const [imagen,setImagen] = useState("");

  const onChangeLinea1 = function(evt){
    // debugger;
    // alert(valor.target.value);
    setLinea1(evt.target.value);
  }
  const onChangeLinea2 = function(evt){
    setLinea2(evt.target.value);
  }
  const onChangeImagen = function(evt){
    setImagen(evt.target.value);
  }
  const onClickBotonLimpiar =function(evt){
    setLinea1("");
    setLinea2("");

  }
  const onClickExportar =function(evt){
    alert("exportar");
    html2canvas(document.querySelector("#meme")).then(function(canvas) {
      // document.body.appendChild(canvas);
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
  });
 

  }
  return (
    <div className="App">
      {/* select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br/>
      {/* input text - primer linea */}
      <input type="text" placeholder='linea 1' onChange={onChangeLinea1} /> <br/>
      {/* input text - segunda linea */}
      <input type="text" placeholder='linea 2' onChange={onChangeLinea2}/> <br/>
      {/* boton exportar */}
      <button onClick={onClickExportar}>Exportar</button>
      <button onClick={onClickBotonLimpiar}>Limpiar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={'/img/'+imagen+'.jpg'}/>
      </div>
    </div>
  );
}

export default App;
