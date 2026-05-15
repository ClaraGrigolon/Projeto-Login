import './App.css'
import { Link } from 'react-router-dom'
import logo from './assets/lego-logo.webp'

export default function App() {

  return (
    <>
      <main>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <div className='container'>
          <h1>Fazer Login</h1>

          <p>Usuário:</p>
          <input type="text" placeholder='Insira seu nome de usuário'/>

          <p>Senha:</p>
          <input type="password" placeholder='Insira sua senha'/>
          <a href="#">Esqueci minha senha</a>

          <Link to="/listagem" className='entrar'>Entrar</Link>

          <Link to="/cadastro" className='cadastro'>
            Não tem uma conta? Cadastre-se
          </Link>
        </div>

      </main>
    </>
  )
}
