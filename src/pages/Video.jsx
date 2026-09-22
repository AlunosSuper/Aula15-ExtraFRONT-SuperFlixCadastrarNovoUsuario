import ObterUnicoConteudo from "../functions/ObterUnicoConteudo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Principal from "../components/Principal";
import Reprodutor from "../components/Reprodutor";

export default function Video() {
  const { codigo } = useParams();
  const [conteudo, definirConteudo] = useState({});

  useEffect(function () {
    ObterUnicoConteudo(codigo)
      .then(function (resposta) {
        if (resposta.status == 200) definirConteudo(resposta.data);
        else console.log(resposta);
      })
      .catch(function (erro) {
        console.log(erro.message);
      });
  }, [codigo]);

  return (
    <>
      {conteudo && (
        <Principal fundo={conteudo.capa} tamanho="700px">
          <Reprodutor conteudo={conteudo} />
        </Principal>
      )}
    </>
  );
}
