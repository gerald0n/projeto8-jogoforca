import { useState } from 'react'
import { ContainerJogo, Button, Char } from './style'

export default function Jogo(props) {

   const renderPalavra = (palavra) => {
      palavra = palavra.split('')
      palavra = palavra.map(char => (props.fimJogo) ? ` ${char} ` : props.keysClickeds.includes(char) ? ` ${char} ` : ' _ ')
      return palavra.join('')
   }

   const [showString, setShowString] = useState(false)
   
   return (
      <ContainerJogo color={props.statusColor}>
         <img data-test="game-image" src={`assets/forca${props.totalErrors}.png`} alt="" />
         <div>
            <Button
               data-test="choose-word"
               onClick={() => {
                  props.setPalavraSelecionada(
                     props.arrPalavras[Math.floor(Math.random() * (props.arrPalavras.length - 1 ))]
                  )
                  props.setTotalErrors(0)
                  props.setDisabledButton(false)
                  props.setkeysClickeds([])
                  props.setStatusColor('inprogress')
                  props.setFimJogo(false)
                  setShowString(true)
               }}
            >
               Escolher Palavra
            </Button>

               {(showString) ? <Char data-test="word">{renderPalavra(props.palavraSelecionada)}</Char> : ''}
            
         </div>
      </ContainerJogo>
   )
}
