import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"

export default function Sobre() {
  return (
 <S.Main>
      <Header/>
     <S.Container>
        <div>
        <h2>Sobre</h2>
        <p> falar sobre minha jornada de programação</p>
        </div>
      </S.Container>
    </S.Main>
  )
}