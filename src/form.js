import React from "react";

function Forms() {
    return(
        <div>
            <h1>Formulário de Contato</h1>
            <br></br>
            <form>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" required />
                <br></br>
                <br></br>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" required />
                <br></br>
                <br></br>
                <label htmlFor="mensagem" className="msgform">Mensagem: </label>
                <textarea id="mensagem" name="mensagem" rows="4" required ></textarea>
                <br></br>
                <br></br>
                <br></br>
        </form>
        </div>
    )
}
export default Forms;