import Navegacao from "../components/Navegacao"
import Destaque from "../components/Destaque"
import fundo from "../assets/fundo.jpg"
import Sessao from "../components/Sessao"
import ObterConteudos from "../functions/ObterConteudos"
import ObterGeneros from "../functions/ObterGeneros"
import { useEffect, useState } from "react"

export default function Explorar() {

  const [ conteudos, definirConteudos ] = useState([])
  const [ generos, definirGeneros ] = useState([])

  useEffect(function() {

    ObterConteudos()
      .then(function(resposta) {
        if (resposta.status == 200)
          definirConteudos(resposta.data)
        else
          console.log(resposta)
      })
      .catch(function(erro) {
        console.log(erro)
      })

    ObterGeneros()
      .then(function(resposta) {
        if (resposta.status == 200)
          definirGeneros(resposta.data)
        else if (resposta.status == 404)
          alert("Nenhum gênero encontrado!")
        else if (resposta.status == 500)
          alert("problema com o servidor!")
        else
          console.log(resposta)
      })
      .catch(function(erro) {
        console.log(erro)
      })

  }, [])

  return (
    <Destaque fundo={ fundo }>
      <Navegacao />
      { generos.length > 0 &&
        generos.map(function(genero, indice) {
          return <Sessao
            key={ indice }
            genero={ genero }
            conteudos={ conteudos }
          />
        })
      }
    </Destaque>
  )
}