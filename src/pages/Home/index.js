import React from 'react';
import { InputText, Button, Checkbox } from '../../components/components';
import lupa from '../../img/lupa.png';
import arquivar from '../../img/arquivar.png';
import excluir from '../../img/excluir.png';
import exibir from '../../img/exibir.png';
import user from '../../img/user.png';
import './styles.css';

const Home = () => {
  return (
    <>
      <header>
        <span>Bem Vindo: Mariana  </span>
        <span>Seu Token é: chsguysdgfygs </span>
        <img className='img' src={user} alt='user' />
      </header>
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
          <InputText type='text' placeholder='Pesquisar' /> <img className='img' src={lupa} alt='lupa' />
        </div>
        <div>
          <span><img className='img' src={arquivar} alt='arquivar' /> Arquivar</span>
          <span><img className='img' src={excluir} alt='excluir' /> Excluir</span>
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
              <th><img className='img' src={exibir} alt='exibir' /> Exibir</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;