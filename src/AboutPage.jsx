import React from 'react'

import Navbar from './Navbar'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='header-container flex row full-view' >
        <div>
        <div className="card tamanho">
        <h1>Sobre:</h1>
          <div>
            <p>Este Site são para pessoas que desejam comprar uma casa ou vender a sua!</p>
            <h1>Oque fazemos:</h1>
            <p>Para o usuário que deseja vender sua casa, nos o ajudamos divulgando no site para pessoas se intersarem aumentando a changes da venda.</p>
            <p>Para os usuário que desejam comprar, mostramos as divulgações dos usuários querendo vender.</p>
            <h1>Atenção:</h1>
            <p>Não mexemos com transação, apenas divulgando!!!</p>
            <h1>Como funciona:</h1>
            <p>Para ambos, comprador e vendedor, vão ter que possuir um cadastro no site, para poder ter acesso as divulgações de outras pessoas e as suas publicações.</p>
            <p>A Tag Vender é para o usuário desejar vender sua casa.</p>
            <p>A Tag Casas é onde mostra as publicações das casas á venda.</p>
            <p>Simples, não!?</p>
            <h1>Contato</h1>
            <p>Qualquer feedBack é bem vindo!, l15tomatin@gmail.com</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;