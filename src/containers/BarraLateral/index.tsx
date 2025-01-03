import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  Branding,
  EnunciadoCadastro,
  EnunciadoBusca
} from '../../components/Branding'
import { Buscador } from '../../components/Buscador'
import { CadastrarContato } from '../../components/CadastrarContatos'
import {
  BarraLateralStyle,
  ContainerBuscaCadastrar,
  ContadorContatos
} from './styles'

const BarraLateral = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <BarraLateralStyle>
      <ContainerBuscaCadastrar>
        <EnunciadoBusca />
        <Buscador />
      </ContainerBuscaCadastrar>
      <ContainerBuscaCadastrar>
        <EnunciadoCadastro />
        <CadastrarContato />
      </ContainerBuscaCadastrar>
      <ContadorContatos>Contatos cadastrados: {itens.length}</ContadorContatos>
      <Branding />
    </BarraLateralStyle>
  )
}

export default BarraLateral
