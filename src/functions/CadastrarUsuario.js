import axios from "axios"
 
export default function CadastrarUsuario(email, senha) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/usuarios",
    data: {
      email: email,
      senha: senha
    }
  })
}
