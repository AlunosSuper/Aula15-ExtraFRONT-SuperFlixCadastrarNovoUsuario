import styled from "styled-components"
import CadastrarUsuario from "../functions/CadastrarUsuario"
import { useNavigate } from "react-router-dom"



const Modelo = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`
 
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
 
const FormularioTitulo = styled.div`
  font-size: 24pt;
  font-weight: bold;
  text-align: center;
`
export default function Cadastrar() {

    const navegar = useNavigate()
 
    function Validar(evento) {
        const email = evento.target.email.value
        const senha = evento.target.senha.value
        evento.preventDefault()

        CadastrarUsuario(email, senha)
            .then(function(resposta) {
                if (resposta.status === 201) {
                alert("Cadastro realizado com sucesso!")
                navegar("/")
                }
            })
            .catch(function(erro) {
                alert(erro.message)
            })
}

  return <Modelo>
    <Formulario onSubmit={Validar}>
      <FormularioTitulo> Cadastrar </FormularioTitulo>
      <input type="text" name="email" placeholder="Email" required/>
      <input type="password" name="senha" placeholder="****" required/>
      <input type="submit" value="Cadastrar"/>
    </Formulario>
  </Modelo>
}
