import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
// import logo from './images/person.png';

function App() {
    return (
        <div className="app">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    );
}

export default App;
