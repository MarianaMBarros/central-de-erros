import React from 'react';
import { InputText, Checkbox } from '../../components/components';
import Header from '../Header/index';
import search from '../../img/search.png';
import file from '../../img/file.png';
import delet from '../../img/delete.png';
import display from '../../img/display.png';
import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div class="dropdown-menu">
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
          <InputText type='text' placeholder='Pesquisar' /> <img className='img-icon' src={search} alt='search' />
        </div>
        <div>
          <span><img className='img-icon' src={file} alt='file' /> Arquivar</span>
          <span><img className='img-icon' src={delet} alt='delet' /> Excluir</span>
        </div>
        <div>
          <table>
            <tr>
              <th>< Checkbox type='checkbox' /></th>
              <th> Nivel </th>
              <th> Origem </th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Eventos</th>
            </tr>
            <tr>
              <th>< Checkbox type='checkbox' /></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th><img className='img-icon' src={display} alt='display' /> Exibir</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;