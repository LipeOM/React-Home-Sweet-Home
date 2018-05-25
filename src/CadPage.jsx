import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from './base'
import Navbar from './Navbar'
import './login.css'

class CadPage extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <div className='header-container flex row center-center full-view' >
            <form onSubmit={this.handleClick} className="card login flex column justify-center">
                
                <div className='brand-login'>
                    <h1>Cadastrar Usuário</h1>
                </div>
                <div className='input-wrapper'>
                    <input id='nome' type='text' required={true} placeholder="Nome..."/>
                    
                    <span className='line'></span>
                </div>
                <div className='input-wrapper'>
                    <input id='cpf' type='number' required={true} placeholder="Cpf..."/>
                    
                    <span className='line'></span>
                </div>
                <div className='input-wrapper'>
                    <input id='contato' type='text' required={true} placeholder="Telefone..."/>
                </div>
                <div className='input-wrapper'>
                    <input id='email' type='text' required={true} placeholder="Email..."/>
                    
                    <span className='line'></span>
                </div>
                <div className='input-wrapper'>
                    <input id='pass' type='password' required={true} placeholder="Senha..."/>
                    
                    <span className='line'></span>
                </div>
                <div className='input-flex'>
                    <p>Comprador</p><input type="RADIO" name="OPCAO" value="op1" />
                    <p>Vendedor</p><input type="RADIO" name="OPCAO" value="op2" />
                    <span className='line'></span>
                </div>
                

                <button>Registrar</button>
                
            </form>
            </div>
        </div>
        )
    }
}
export default CadPage