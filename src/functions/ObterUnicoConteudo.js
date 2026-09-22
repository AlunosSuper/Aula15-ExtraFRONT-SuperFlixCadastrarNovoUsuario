import axios from "axios"

export default function ObterUnicoConteudo(codigo) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/conteudo/${ codigo }`
  })
}
