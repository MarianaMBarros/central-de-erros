import React from 'react';
import { InputText, Checkbox } from '../../components/components';
import Header from '../Header/index';
import file from '../../img/file.png';
import delet from '../../img/delete.png';
import arrow from '../../img/arrow.png';
import arrowRight from '../../img/arrowRight.png';
import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='div-search'>
        <select>
          <option value="">Ambiente</option>
          <option>Todos</option>
          <option>Produção</option>
          <option>Homologação</option>
          <option>Dev</option>
        </select>
        <select>
          <option value="">Ordenar</option>
          <option>Todos</option>
          <option>Nivel</option>
          <option>Frequência</option>
        </select>
        <select>
          <option value="">Buscar</option>
          <option>Todos</option>
          <option>Level</option>
          <option>Descrição</option>
          <option>Origem</option>
        </select>
        <InputText type='text' placeholder='Pesquisar' className='search-input' />
      </div>
      <div className='container-home'>
        <div className='div-icon'>
          <span className='span-icon'><img className='img-icon' src={file} alt='file' /> Arquivar</span>
          <span className='span-icon'><img className='img-icon' src={delet} alt='delet' /> Excluir</span>
        </div>
        <div className='tbl-error'>
          <table>
            <tr>
              <th>< Checkbox /></th>
              <th>Nivel</th>
              <th>Origem</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Eventos</th>
              <th></th>
            </tr>
            <tr>
              <td>< Checkbox /></td>
              <td>alinha o item ao topo da sua linha. Quando em colunas, alinha o item ao início (esquerda) da coluna.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span className='th-icon'>Exibir</span></td>
            </tr>
            <tr>
              <td>< Checkbox /></td>
              <td>alinha o item ao topo da sua linha. Quando em colunas, alinha o item ao início (esquerda) da coluna.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span className='th-icon'>Exibir</span></td>
            </tr>
            <tr>
              <td>< Checkbox /></td>
              <td>alinha o item ao topo da sua linha. Quando em colunas, alinha o item ao início (esquerda) da coluna.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><span className='th-icon'>Exibir</span></td>
            </tr>
          </table>
        </div>
        <div className='div-pages-home'>
          <span className='span-icon-home'> 0 - 10
            <img className='img-icon-arrow' src={arrow} alt='arrow' />
            <img className='img-icon-arrow' src={arrowRight} alt='arrowRight' />
          </span>

        </div>

      </div>
    </>
  );
}

export default Home;