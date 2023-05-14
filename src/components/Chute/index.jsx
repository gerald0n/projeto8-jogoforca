import { useState } from 'react'
import { Container } from './style'

export default function Chute(props) {
   const [inputValue, setInputValue] = useState('')

   function verificaFimJogo() {
      if (
         inputValue.toLowerCase() === props.palavraSelecionada ||
         inputValue === props.palavraSelecionada.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      ) {
         props.setFimJogo(true)
         props.setDisabledButton(true)
         props.setStatusColor('sucess')
         setInputValue('')
      } else {
         props.setTotalErrors(6)
         props.setFimJogo(true)
         props.setDisabledButton(true)
         props.setStatusColor('failed')
         setInputValue('')
      }
   }

   return (
      <Container disabled={props.fimJogo}>
         <label htmlFor="chute">Já sei a palavra! </label>
         <input
            data-test="guess-input"
            disabled={props.fimJogo}
            type="text"
            name="chute"
            value={inputValue}
            onChange={(event) => {
               setInputValue(event.target.value)
            }}
         />
         <button data-test="guess-button" disabled={props.fimJogo} onClick={verificaFimJogo}>
            Chutar
         </button>
      </Container>
   )
}
