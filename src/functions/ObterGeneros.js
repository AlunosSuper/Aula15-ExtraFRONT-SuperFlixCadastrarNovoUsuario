import axios from "axios"
 
export default function ObterGeneros() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/generos"
  })
}
