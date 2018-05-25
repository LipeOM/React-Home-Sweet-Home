import React from 'react'

import Navbar from './Navbar'

const CasaNumeroUm = props => {
  return (
    <div>
      <Navbar />
      <div className='header-container flex row center-center full-view' >
        <div className="receber">
            <div className="imgt">
            </div>
            <div className="tabela">
                <div className="sai">
                    <p>Proprietario:...</p>
                    <p>Telefone:...</p>
                    <p>Email:...</p>
                </div>
                <div>
                    <p>Preço:...</p>
                    <p>Estado: MS</p>
                    <p>Cidade: Nova Andradina</p>
                    <p>Endereço:...</p>
                    <p>Bairro:...</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default CasaNumeroUm;