import React from "react";
import logo from './imagens/SENAI.png';
function Navbar() {
    return (
        <nav className="barradenav">
            <img src={logo} alt="Descrição da imagem" className="imgnav"/>
            <ul className="ulnav">
                <li className="linav">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="linav">
                    <a href="/contato" className="nav-link" >Contato</a>
                </li>
                <li className="linav">
                    <a href="/quemsomos" className="nav-link" >Quem somos</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar