import React from 'react'

import Navbar from './Navbar'
import './vender.css'

const VenderPage = props => {
    return (
        <div>
            <Navbar />
            <div className='header-container flex center-center full-view' >
            <form onSubmit={this.handleClick} className="card column">
                
                <div className='brand-login'>
                    <h1>Vender Casa</h1>
                </div>
                <div className="flex">
                    <div className="oque">
                        <div className='input-wrapper'>
                            <input id='preco' type='text' required={true} placeholder="Preço..."/>
                        </div>
                        <div className='input-wrapper'>
                            <input id='estado' type='text' required={true} placeholder="Estado..."/>
                        </div>
                        <div className='input-wrapper'>
                            <input id='cidade' type='text' required={true} placeholder="Cidade..."/>
                        </div>
                        <div className='input-wrapper'>
                            <input id='endereco' type='text' required={true} placeholder="Endereço..."/>
                        </div>
                        <div className='input-wrapper'>
                            <input id='bairro' type='text' required={true} placeholder="Bairro..."/>
                        </div>
                        
                    </div>
                    <div>
                        <div className='input-wrapper'>
                            <input id='foto' type='text' required={true} placeholder="Foto da Casa..."/>
                        </div>
                        <button>Vender Casa</button>
                    </div>
                
                </div>
            </form>
            </div>
        </div>
  )
}

export default VenderPage