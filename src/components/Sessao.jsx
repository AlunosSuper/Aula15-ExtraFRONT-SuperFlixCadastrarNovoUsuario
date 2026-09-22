import styled from "styled-components"
 
const Modelo = styled.div`
  margin: 32px 0;
  padding: 0 32px;
`
const ModeloTitulo = styled.div`
  font-size: 16pt;
`
 
const ModeloInterno = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
`
const Conteudo = styled.img`
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  height: 160px;
  margin: 16px 0;
  min-width: 256px;
  object-fit: cover;
  transition: 0.2s;
 
  &:hover {
    transform: scale(110%);
    transition: 0.2s;
  }
`
export default function Sessao(props) {
  return (
    <Modelo>
      <ModeloTitulo> { props.genero } </ModeloTitulo>
  
      <ModeloInterno>
        {props.conteudos.map(function(conteudo) {
          if (conteudo.genero === props.genero) {
            return (
              <a key={conteudo.id} href={`/video/${conteudo.id}`}>
                <Conteudo src={conteudo.capa} alt="capa" />
              </a>
            )
          }
          return null
        })}
      </ModeloInterno>
    </Modelo>
  )
}