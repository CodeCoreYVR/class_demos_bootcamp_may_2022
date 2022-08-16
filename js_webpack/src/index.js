console.log("Hello universe!");
import './a'
import firstImg from "./images/320xszow9ofdvve0hxhkm7kot.jpg"
import "./styles/main.css"
import React from "react";
import ReactDom from "react-dom";


function add(a, b) {
  return a + b
}

add(1, 2)

const arr = [1, 2, 3, 4]

add(arr[0], arr[2])

const App = () => {
  return (
    <>
      <h1>Here is a react element</h1>
      <img src={firstImg} alt="" />
    </>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img")
  img.src = firstImg
  document.querySelector("body").append(img)

  const rootDiv = document.createElement('div');
  document.querySelector("body").append(rootDiv)
  ReactDom.render(<App/>, rootDiv)
})