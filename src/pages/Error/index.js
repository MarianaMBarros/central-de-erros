import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/index';
import file from '../../img/file.png';
import delet from '../../img/delete.png';
import arrow from '../../img/arrow.png';
import './styles.css';

const Error = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push("/home")
  }

  return (
    <>
      <Header />
      <div className='div-back'>
        <span className='span-icon' onClick={onClickBack}>
          <img className='img-icon' src={arrow} alt='arrow' />
        Voltar
        </span>
      </div>
      <h3 className='title-error'>Erro no 123.3.5.6 em 24/05/2019 10:20</h3>
      <div className='container-error'>
        <div className='cont'>
          <div className='event'>
            <div>
              <h3>Eventos</h3>
              <span>12468654dcbn</span>
            </div>
            <div className='oi'>
              <h3>Coletado Por:</h3>
              <span>Token: 12468654dcbn</span>
            </div>
          </div>
          <div className='div-situation'>
            <span className='situation'>Erro</span>
            <div className='detail'>
              <h3>Título</h3>
              <span>12468654dcbn</span>
              <h3>Detalhes</h3>
              <span>12468654dcbn</span>
            </div>
          </div>
        </div>

      </div>
      <div className='div-error'>
        <span className='span-icon'><img className='img-icon' src={file} alt='file' /> Arquivar</span>
        <span className='span-icon'><img className='img-icon' src={delet} alt='delet' /> Excluir</span>
      </div>
    </>
  )
}
export default Error;