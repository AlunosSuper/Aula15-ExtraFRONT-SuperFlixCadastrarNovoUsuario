import styled from "styled-components";

const Modelo = styled.div`
  background: #222;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;
const ModeloTrailer = styled.iframe`
  border: none;
  height: 500px;
  width: 100%;
`;

const ModeloDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;
const Titulo = styled.div`
  font-size: 20pt;
  font-weight: bold;
`;

const Descricao = styled.div`
  text-align: justify;
`;

const Organizador = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default function Reprodutor(props) {
  return (
    <Modelo>
      <ModeloTrailer src={props.conteudo.trilha} />

      <ModeloDados>
        <Titulo> {props.conteudo.titulo} </Titulo>
        <Organizador>
          <div> {props.conteudo.ano} </div>
          <div> {props.conteudo.duracao} min </div>
          <div> + {props.conteudo.faixa} </div>
        </Organizador>
        <Descricao> {props.conteudo.descricao} </Descricao>
      </ModeloDados>
    </Modelo>
  );
}
