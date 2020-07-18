import React from 'react';
import { Button } from '../../components/components';
import arquivar from '../../img/arquivar.png';
import excluir from '../../img/excluir.png';

const Error = () => {
  return (
    <>
      <header>
        <span>Bem Vindo: Mariana  </span>
        <span>Seu Token é: chsguysdgfygs </span>
        <button>icone</button>
      </header>
      <Button className='button' name='Voltar' />
      <span>Erro no 123.3.5.6 em 24/05/2019 10:20</span>
      <span>Erro</span>
      <div>
        <h3>Título</h3>
        <span>12468654dcbn</span>
        <h3>Detalhes</h3>
        <span>12468654dcbn</span>
      </div>
      <div>
        <h3>Eventos</h3>
        <span>12468654dcbn</span>
        <h3>Coletado Por:</h3>
        <span>Token: 12468654dcbn</span>
      </div>
      <div>
        <Button className='button' name='Arquivar' /> <img className='img' src={arquivar} alt='arquivar' />
        <Button className='button' name='Apagar' /> <img className='img' src={excluir} alt='excluir' />
      </div>
    </>
  )
}
export default Error;