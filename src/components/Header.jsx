import { Link } from "react-router-dom";
import linkedin from "../assets/link.png"
import git from "../assets/git.png"
import face from "../assets/face.png"
import * as S from "./styled"
import eu from "../assets/eu.jpg"
import logo from "../assets/logo.png"


export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
            <S.Img src={eu} alt="minha foto" />
            <S.Title>Izabel Mattos</S.Title>
            <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
              <S.BoxMenu>
                <ul>
                    <S.Lista linha="1px solid white"><Link to="/">Inicio</Link></S.Lista>
                    <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                    <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
                </ul>
              </S.BoxMenu>
              <S.BoxIcon>
                <a href=""> <img src={linkedin} alt="" /> </a>
                <a href=""> <img className="borda" src={git} alt="" /> </a>
                <a href=""> <img src={face} alt="" /> </a>
              </S.BoxIcon>
    </S.Header>
  )
}
