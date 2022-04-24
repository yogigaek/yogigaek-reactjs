import React, { useState } from "react";
import Paragraf from './Components/state';
import Footer from "./Components/Props";
import MyButton from "./Components/buttonAlert";
import ClassComponent from "./Components/ClassState";
import "./App.css";


function App() {

  // State adalah penampungan data (yang bisa di ubah)
  // State dalam hooks
  const [getParagrafValue, setParagrafValue] = useState(``);
  const changeParagrafValue = () => {
    setParagrafValue(`Parafraf berhasil diubah`);
  };

  // Props
  const propsParagraf = () => {
    return (
      <div>
        <h3>Props berhasil digunakan</h3>
        <h3><i>Mantaaappp</i></h3>
        <h3 className="marquee">React js Muhammad Yogi</h3>
      </div>
    );
  };

  const clicked = () => {
    return alert(`Button berhasil`);
  };

  return (
    <div className="App">
      <Paragraf parValue={getParagrafValue} />
      <button onClick={() => changeParagrafValue()}>Ubah Paragraf</button>
      <ClassComponent />
    
      <Footer propsParagraf={propsParagraf} />
      <MyButton clicked={clicked} />
    </div>
  );
};

export default App;
