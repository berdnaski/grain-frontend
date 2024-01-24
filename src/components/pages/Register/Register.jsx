import React from 'react'
import './style.css'
import Logo from '../../../assets/logo.svg';

const Register = () => {
  return (
    <div className="container-login">
        <div className="wrap-login">
            <form className="login-form">
                <span className="login-form-title">Logar</span>
                <span className="login-form-title">
                    <img src={Logo} alt="Logo grão direto" />
                </span>

                <div className="wrap-input">
                    <input className='input' type="email" placeholder='Insira o email' />
                    <label htmlFor="" className="focus-input"></label>
                </div>

                <div className="wrap-input">
                    <input className='input' type="password" placeholder='Insira a password' />
                    <label htmlFor="" className="focus-input"></label>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="have-not-account">
                    <span className="txt1">Não possui conta?</span>
                    <a href="#" className="txt2">Criar conta.</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register