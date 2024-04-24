import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"

export default function Projetos() {
  return (
   <S.Main>
      <Header/>
    <S.Container>
        <div>
        <h2>Projetos</h2>
        <p>Aqui falarei sobre meus projetos</p>
        </div>
      </S.Container>
    </S.Main>
  )
}

