import Header from '../../components/Header'
import * as S from "./styled"
import Fotobanner from "../../assets/banner.jpg"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.Banner>
          <img src={Fotobanner} alt="banner" />
        </S.Banner>
        <S.Div>
        <h2>Bem Vindos!</h2>
        <p> colocar sobre minha historia</p>
        </S.Div>
      </S.Container>
    </S.Main>
  )
}
