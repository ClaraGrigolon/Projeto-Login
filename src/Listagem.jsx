import { useState } from "react"
import './Listagem.css'
import { Link } from 'react-router-dom'
import logo from './assets/lego-logo.webp'

export default function Listagem(){
    return(
        <>
            <main>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className="container">

                    <div className="list">Lista de cadastros</div>
                    
                    <table>
                        <tr>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Senha</td>
                            <td>Editar</td>
                            <td>Excluir</td>
                        </tr>

                        <tr>
                            <td>Carlos</td>
                            <td>carlos123@gmail.com</td>
                            <td>iedoan543</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr> 

                        <tr>
                            <td>Barbara</td>
                            <td>barbcunha@gmail.com</td>
                            <td>barbsdia</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr>  

                        <tr>
                            <td>Joaquim</td>
                            <td>juca50r@gmail.com</td>
                            <td>ragapuovoan50</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr>   
                        <tr>
                            <td>Karina</td>
                            <td>kakan123@gmail.com</td>
                            <td>ahnesjsd</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr>   
                        <tr>
                            <td>Lúcio</td>
                            <td>luciomauro@gmail.com</td>
                            <td>luviioaof</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr>   

                        <tr>
                            <td>Fabio</td>
                            <td>fabiobg@gmail.com</td>
                            <td>bioedms123</td>
                            <td>✏️</td>
                            <td>🗑️</td>
                        </tr>   
                    </table>

                    <Link to="/" className="sair">Sair</Link>
                </div>
            </main>
        </>
    )
}