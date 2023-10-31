import React, { useState } from 'react'
import './App.css'
function App() {

  const [value,setValue] = useState("");

  function handle(e) {
    setValue(value + e.target.innerHTML)
  }
  function equal (e){
    setValue(eval(value))
  }
 function Ac (e) {
  setValue("")
 }
 function c (e) {
  setValue(value.toString().slice(0,-1))
 }


  return (
    <>
    <center>
      <h1>CALCULATOR</h1>
       <div class="calculator">
          <input type="text" value={value} placeholder='0'/>
          <button class="btn" onClick={c}>C</button>
          <button class="btn" onClick={Ac} >AC</button>
          <button class="btn" id='equal ' onClick={equal}>=</button>
          <button class="btn" onClick={handle}>1</button>
          <button class="btn" onClick={handle}>2</button>
          <button class="btn" onClick={handle}>3</button>
          <button class="btn" onClick={handle}>4</button>
          <button class="btn" onClick={handle}>5</button>
          <button class="btn" onClick={handle}>6</button>
          <button class="btn" onClick={handle}>7</button>
          <button class="btn" onClick={handle}>8</button>
          <button class="btn" onClick={handle}>9</button>
          <button class="btn" onClick={handle}>+</button>
          <button class="btn" onClick={handle}>-</button>
          <button class="btn" onClick={handle}>*</button>
         
          <button class="btn" onClick={handle} >/</button>
         
      </div>
    </center>
    </>
   
  )
}

export default App
