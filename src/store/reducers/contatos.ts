// import { Contato } from './../../components/Contato/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Elon Musk',
      email: 'Elon Musk@X.com',
      telefone: '2345meia78'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    deletar: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<ContatoClass>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert('Contato já cadastrado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { deletar, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
