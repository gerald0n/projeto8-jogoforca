import { ContainerJogo, Button, Char } from './style'

export default function Jogo(props) {
         
   
   return (
      <ContainerJogo color={props.statusColor}>
         <img data-test="game-image" src={`assets/forca${props.totalErrors}.png`} alt="" />
         <div>
            <Button data-test="choose-word"
               onClick={() => {
                  props.setPalavraSelecionada(
                     props.arrPalavras[Math.floor(Math.random() * props.arrPalavras.length - 1)]
                  )
                  props.setTotalErrors(0)
                  props.setDisabledButton(false)
                  props.setkeysClickeds([])
                  props.setStatusColor('inprogress')
                  props.setFimJogo(false)
               }}
            >
               Escolher Palavra
            </Button>

            <Char data-test="word">
               {props.palavraSelecionada.split('').map((char) => {
                  
                  return (props.fimJogo) ? ` ${char} ` : props.keysClickeds.includes(char) ? ` ${char} ` : ' _ '
               })}

            </Char>
         </div>
      </ContainerJogo>
   )
}
