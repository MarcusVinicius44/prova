import React from "react";
import logo2 from './imagens/SESI.png'

function Footer() {
    return(
    <footer>
        <div className="footer">
        <div className="navfooter">
            <img src={logo2} alt="Descrição da imagem" className="imgnav"/>
            <p className="paragrafo">© 2024 Todos os direitos reservados ao povo do 3º/Informática para Internet.</p>
            <br></br>
            <p className="paragrafo2">Contato: almossar@cabacos.com</p>
        </div>
        </div>
        </footer>
    )
}
export default Footer;