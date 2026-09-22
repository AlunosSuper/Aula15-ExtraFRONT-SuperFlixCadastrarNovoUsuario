import styled from "styled-components"
import logo from "../assets/logo.png"

const Modelo = styled.div`
  background-image: url(${props => props.fundo});
  background-size: cover;
  background-position: center;
  height: 100vh;
`
const Barra = styled.div`
  background: linear-gradient(black, transparent);
  padding: 32px;
`
const BarraImagem = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
`
const Mensagem = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  width: ${ props => props.tamanho };
`

export default function Principal(props) {
  return <Modelo fundo={ props.fundo }>
    <Barra>
      <BarraImagem src={ logo } alt="logo"/>
    </Barra>
    <Mensagem tamanho={ props.tamanho }>
      { props.children }
    </Mensagem>
  </Modelo>
}
