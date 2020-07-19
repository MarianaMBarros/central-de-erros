import React from 'react';
import Header from '../Header/index';
import file from '../../img/file.png';
import delet from '../../img/delete.png';

const Error = () => {
  return (
    <>
      <Header />
      <div><span>Voltar</span></div>
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
        <span><img className='img-icon' src={file} alt='file' /> Arquivar</span>
        <span><img className='img-icon' src={delet} alt='delet' /> Excluir</span>
      </div>
    </>
  )
}
export default Error;