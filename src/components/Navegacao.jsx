import styled from "styled-components"
import logo from "../assets/logo.png"

const Modelo = styled.div`
  align-items: center;
  background: linear-gradient(black, transparent);
  display: flex;
  gap: 32px;
  height: 32px;
  padding: 32px;
`
 
const ModeloImagem = styled.img`
  height: 48px;
`
 
const ModeloLink = styled.a`
  color: #fff;
  text-decoration: none;
`
export default function Navegacao() {
  return <Modelo>
    <ModeloImagem src={ logo } alt="logo"/>
 
    <ModeloLink href="#"> Início </ModeloLink>
    <ModeloLink href="#"> Filmes </ModeloLink>
    <ModeloLink href="#"> Séries </ModeloLink>
    <ModeloLink href="#"> Em alta </ModeloLink>
  </Modelo>
}
