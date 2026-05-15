import { useState } from "react"
import './Usuarios.css'
import logo from './assets/lego-logo.webp'
import { Link } from "react-router-dom"

export default function Usuarios(){
    return(
        <>
            <main>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='container'>
                    <h1>Cadastro</h1>

                    <p>Nome:</p>
                    <input type="text" placeholder='Insira seu nome'/>

                    <p>Email:</p>
                    <input type="text" placeholder='Insira seu email'/>

                    <p>Senha:</p>
                    <input type="password" placeholder='Insira sua senha'/>

                    <p>Confirme sua senha:</p>
                    <input type="password" placeholder='Confirme sua senha'/>

                    <button>Cadastrar</button>

                    <Link to="/" className='login'>
                        Já tem uma conta? Entrar
                    </Link>
                </div>
            </main>
        </>
    )
}