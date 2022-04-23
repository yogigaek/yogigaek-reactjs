import React, { useState } from "react";
import Paragraf from './Components/state';
import "./App.css";;


function App() {

  // State adalah penampungan data (yang bisa di ubah)
  const [getParagrafValue, setParagrafValue] = useState(``);

  const changeParagrafValue = () => {
    setParagrafValue(`Parafraf berhasil diubah`);
  };

  return (
    <div className="App">
      <Paragraf parValue={getParagrafValue}/>
      <button onClick={() => changeParagrafValue()}>Ubah Paragraf</button>
    </div>
  );
}

export default App;
