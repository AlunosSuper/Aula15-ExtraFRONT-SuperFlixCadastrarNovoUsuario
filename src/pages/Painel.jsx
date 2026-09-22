import Principal from "../components/Principal"
import fundo from "../assets/fundo0.jpg"
import Formulario from "../components/Formulario"

export default function Painel() {
  return <Principal fundo={ fundo } tamanho="480px">
    <Formulario/>
  </Principal>
}
