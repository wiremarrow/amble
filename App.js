import './App.css';
import './slider.js';
import React from 'react';
import styled from 'styled-components';
import Production from '/Users/hansonx/Desktop/react-amble-website/src/components/video/production ID_4429804.mp4';
import {Link } from "react-router-dom";
import SecondPage from './SecondPage'


function clickMe() {
    alert("Clicked!")
}

const Button = styled.button`
    background-color: white;
    color: #006400;
    padding: 20px 50px;
    outline: 0;
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-size: 80;
    box-shadow: 0px 2px 2px black;
    transition: ease background-color 250ms;
    justify-content: center;
    display: flex;
    align-items: center;
`

function App() {
  return (
    <div>

    <div className="App">
        <video autoPlay loop muted
        style = {{
            position: "absolute",
            width: "105%", 
            zIndex: "-1"}}>
            <source src={Production} type="video/mp4"/>
        </video>
        <div>
            <span className="font-link">
            <div style={{fontSize: 100, textAlign: "center", color: '#006400', backgroundColor: 'beige'}}>
                amble
            </div>
            
            <div style={{fontSize: 20, textAlign: "center", height: 45, color: '#006400', backgroundColor: 'beige'}}>
                a relaxed itinerary
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh"}}>
            <Link to="/page2"><Button onClick={clickMe}>
                    Get Started!
                </Button>
            </Link>
            </div>
            </span>
        </div>
    </div>
    </div>
  );


 
}

export default App;