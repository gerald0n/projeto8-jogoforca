import { useState } from 'react'
import { ContainerJogo, Button, Char } from './style'

export default function Jogo(props) {
   const [showString, setShowString] = useState(false)

   console.log(props.palavraSelecionada)

   const renderPalavra = (palavra = props.palavraSelecionada) => {
      palavra = palavra
         .split('')
         .map((char) => (props.fimJogo ? char : props.keysClickeds.includes(char) ? char : '_'))
      return palavra.join('')
   }

   const startGame = () => {
      props.setPalavraSelecionada(
         props.arrPalavras[Math.floor(Math.random() * (props.arrPalavras.length))]
      )
      props.setTotalErrors(0)
      props.setDisabledButton(false)
      props.setkeysClickeds([])
      props.setStatusColor('inprogress')
      props.setFimJogo(false)
      setShowString(true)
   }

   return (
      <ContainerJogo color={props.statusColor}>
         <img data-test="game-image" src={`assets/forca${props.totalErrors}.png`} alt="" />
         <div>
            <Button data-test="choose-word" onClick={startGame}>
               Escolher Palavra
            </Button>

            {showString && <Char data-test="word">{renderPalavra()}</Char>}
         </div>
      </ContainerJogo>
   )
}
