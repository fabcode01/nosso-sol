import { useState } from 'react'
import './index.css'
import './estilos/header/header.css'

//imgs
import header_painel from './img/header_painel.svg'
import header_world from './img/header_world.svg'
import Reactangle from './img/Rectangle.svg'

//Componentes
import Nav from './componentes/Nav/Nav'
import Footer from './componentes/Nav/Footer'

function App() {

  return (
    <>
     <Nav/>

      <header id='header'>
        <div className='header_container'>  
          <div className="header_title">NÃO PAGUE MAIS UM ABSURDO NA SUA CONTA DE <span>ENERGIA</span>.</div>
          <div className="header_svg">
            <div  className='svg_world'><img src={header_world} alt="imagem de energia limpa" /></div>
            <div className='svg_painel'><img src={header_painel} alt="imagem de um painel soalr" /></div>
          </div>
        </div>
      </header>
     
      <main>
        
      <section id='showcase_container'>
        <div className="subtitle">
      <p>Nos últimos anos os brasileiros têm investido mais em energia limpa. Além de ser mais barato para o bolso, quem investe em energia solar acaba investindo na sua independência energética.</p>
        </div>

     <span className='line'></span>

        <div className="img_cards">

            <div className='card-1'>
             
              </div>

            <div className='card-2'>
             
              </div>

          </div>
      </section>

      <section className='info_enegy'>
        
         
            <h2 className='title-1'>VOCÊ GERA A SUA PRÓPRIA ENERGIA, PAGA MENOS TARIFAS E SOBRA MAIS DINHEIRO NO SEU BOLSO<span>.</span></h2>

            <p className="description-1">Temos alguns depoimentos muito legais que mostram que esse é o futuro para quem gosta de ter grana no bolso e de quebra ainda ajuda o meio ambiente.</p>
          
      
      </section>

      </main>







     <Footer/>
    </>
  )
}

export default App
