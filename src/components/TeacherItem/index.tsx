import React from 'react';
import './styles.css';
const whatsappIcon = require("../../assets/images/icons/whatsapp.svg") as string;

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/17866549?s=460&u=2ecc807c86d99b0debf0664824f303627bde04d6&v=4" alt="Carolina Ferreira"/>
                        <div>
                            <strong>Carolina Ferreira</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br/> <br/>
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;