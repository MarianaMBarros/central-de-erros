import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/api";

import Header from "../Header/index";
import file from "../../img/file.png";
import delet from "../../img/delete.png";
import arrow from "../../img/arrow.png";
import "./styles.css";

const Error = () => {
  const history = useHistory();
  const [log, setLog] = useState({});
  let { id } = useParams();
  console.log("id", id);
  const token = localStorage.getItem("@@central-accessToken");

  useEffect(() => {
    api
      .get(`logs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [id, token]);

  async function handleRemove() {
    try {
      const response = await api.delete(`logs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(`Item excluído com sucesso`);
      history.push("/home");
    } catch (error) {
      alert("ocorreu um erro ao tentar excluir o item");
    }
  }

  function onClickBack() {
    history.push("/home");
  }

  return (
    <>
      <Header />
      <div className="div-back">
        <span className="span-icon" onClick={onClickBack}>
          <img className="img-icon" src={arrow} alt="arrow" />
          Voltar
        </span>
      </div>
      <h3 className="title-error">
        Erro no {log.host} em {log.createdAt}
      </h3>
      <div className="container-error">
        <div className="cont">
          <div className="event">
            <div>
              <h3>Título</h3>
              <span>{log.title}</span>
            </div>
            <div className="oi">
              <h3>Detalhes</h3>
              <span>{log.description}</span>
            </div>
          </div>
          <div className="div-situation">
            <span className="situation"> {log.level}</span>
            <div className="detail">
              <h3>Eventos</h3>
              <span>{log.event}</span>

              <h3>Coletado Por:</h3>
              <span>Token: {log.userToken}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="div-error">
        <span className="span-icon">
          <img className="img-icon" src={file} alt="file" /> Arquivar
        </span>
        <span className="span-icon" onClick={handleRemove}>
          <img className="img-icon" src={delet} alt="delet" /> Excluir
        </span>
      </div>
    </>
  );
};
export default Error;
