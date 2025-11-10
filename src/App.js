import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#programas">programas</a></li>
          <li><a href="#acerca">acerca</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </nav>

      <section id="inicio" className="main-section">
        <div className="main-box">
          <h1>SENA</h1>
          <p>Centro de gestión de mercados, logística y tecnologías</p>
          <p>Bogotá</p>
        </div>
      </section>

      <section id="programas" className="programs">
        <h2>programas</h2>
        <div className="programs-container">
          <div className="program-box">adso</div>
          <div className="program-box">redes de datos</div>
          <div className="program-box">logística</div>
        </div>
      </section>

      <section id="contacto" className="contact-form">
        <form>
          <input type="text" placeholder="nombre" />
          <input type="email" placeholder="correo" />
          <textarea placeholder="mensaje"></textarea>
          <button type="submit">enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;