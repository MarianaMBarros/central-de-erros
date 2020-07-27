import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { InputText, Checkbox, Button } from "../../components/components";
import Header from "../Header/index";
import file from "../../img/file.png";
import delet from "../../img/delete.png";
import arrow from "../../img/arrow.png";
import arrowRight from "../../img/arrowRight.png";
import "./styles.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [erros, setErros] = useState([]);
  const [environment, setEnvironment] = useState("1");
  const [searchBy, setSearchBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("@@central-accessToken");

  useEffect(() => {
    api
      .get("logs?environment=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setErros(response.data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [token]);

  async function handleSearch() {
    let url = `logs?environment=${environment}`;

    if (searchBy) url += `&searchBy=${searchBy}`;

    if (orderBy) url += `&orderBy=${orderBy}`;

    if (search) url += `&search=${search}`;
    try {
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setErros(response.data);
    } catch (error) {
      alert("ocorreu um erro ao tentar obter os dados");
    }
  }

  function handleDetail(id) {
    console.log(id);
    history.push(`/error/${id}`);
  }
  return (
    <>
      <Header />
      <div className="div-search">
        <select onChange={(e) => setEnvironment(e.currentTarget.value)}>
          <option value="1">Produção</option>
          <option value="2">Homologação</option>
          <option value="3">Dev</option>
        </select>
        <select onChange={(e) => setOrderBy(e.currentTarget.value)}>
          <option value="">Ordenar</option>
          <option value="1">Nivel</option>
          <option value="2">Frequência</option>
        </select>
        <select onChange={(e) => setSearchBy(e.currentTarget.value)}>
          <option value="">Buscar</option>
          <option value="1">Level</option>
          <option value="2">Descrição</option>
          <option value="3">Origem</option>
        </select>
        <InputText
          type="text"
          placeholder="Pesquisar"
          className="search-input"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Button className="button" name="Buscar" onClick={handleSearch} />
      </div>
      <div className="container-home">
        <div className="div-icon">
          <span className="span-icon">
            <img className="img-icon" src={file} alt="file" /> Arquivar
          </span>
          <span className="span-icon">
            <img className="img-icon" src={delet} alt="delet" /> Excluir
          </span>
        </div>
        <div className="tbl-error">
          <table>
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>Nivel</th>
                <th>Origem</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Eventos</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {erros.map((error) => (
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>{error.level}</td>
                  <td> {error.host}</td>
                  <td> {error.createdAt}</td>
                  <td> {error.description}</td>
                  <td> {error.event}</td>
                  <td>
                    <span
                      className="th-icon"
                      onClick={() => handleDetail(error.id)}
                    >
                      Exibir
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="div-pages-home">
          <span className="span-icon-home">
            {" "}
            0 - 10
            <img className="img-icon-arrow" src={arrow} alt="arrow" />
            <img className="img-icon-arrow" src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
