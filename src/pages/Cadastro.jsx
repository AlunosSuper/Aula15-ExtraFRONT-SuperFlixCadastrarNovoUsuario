import Principal from "../components/Principal"
import Cadastrar from "../components/Cadastrar"
import fundo from "../assets/fundo.jpg"
 
export default function Cadastro() {
  return <Principal fundo={ fundo } tamanho="480px">
    <Cadastrar/>
  </Principal>
}
