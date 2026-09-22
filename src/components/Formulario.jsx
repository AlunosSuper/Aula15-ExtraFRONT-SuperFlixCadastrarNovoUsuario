import styled from "styled-components"
import { useState } from "react"
import ConteudoInicial from "../datas/ConteudoInicial"
import SalvarConteudo from "../functions/SalvarConteudo"

 
const Modelo = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`
const ModeloInterno = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
 
export default function Formulario() {
    const [ conteudo, definirConteudo ] = useState(ConteudoInicial)
 
    function Mudar(evento) {
      const campo = evento.target.name
      const valor = evento.target.value
      definirConteudo({ ...conteudo, [campo]: valor })
    }

    function Enviar(evento) {
      evento.preventDefault()

      console.log("conteudo enviado", conteudo)

      SalvarConteudo(conteudo)
        .then(function(resposta) {
          if (resposta.status === 201)
            alert("Conteúdo enviado com sucesso!")
          else
            console.log(resposta)
        })
        .catch(function(erro) {
          console.log("Erro:", erro.response?.data)
        })
      definirConteudo(ConteudoInicial)
    }

  return <Modelo>
    <ModeloInterno onSubmit={ Enviar }>
      <input value={ conteudo.capa } onChange={ Mudar }
        type="url" name="capa" placeholder="Capa" required/>
      <input value={ conteudo.trilha } onChange={ Mudar }
        type="url" name="trilha" placeholder="Trilha" required/>
      <input value={ conteudo.titulo } onChange={ Mudar }
        type="text" name="titulo" placeholder="Título" required/>
      <input value={ conteudo.descricao } onChange={ Mudar }
        type="text" name="descricao" placeholder="Descrição..." required/>
      <input value={ conteudo.genero } onChange={ Mudar }
        type="text" name="genero" placeholder="Gênero" required/>

      <input value={ conteudo.ano } onChange={ Mudar }
        type="number" name="ano" placeholder="Ano (ex.: 2020)" required/>
      <input value={ conteudo.duracao } onChange={ Mudar }
        type="number" name="duracao"
        placeholder="Duração (ex.: 90min)" required/>
      <input value={ conteudo.faixa } onChange={ Mudar }
        type="number" name="faixa"
        placeholder="Faixa etária (ex.: +18)" required/>

      <input type="submit" value="Enviar" />

    </ModeloInterno>
  </Modelo>
}

