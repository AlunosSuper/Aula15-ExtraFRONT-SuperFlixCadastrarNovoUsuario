import Principal from "../components/Principal";
import Entrar from "../components/Entrar";
import fundo from "../assets/fundo.jpg";

export default function Inicio() {
  return <Principal fundo={fundo} tamanho="480px">
    <Entrar/>
        
  </Principal>;
}
