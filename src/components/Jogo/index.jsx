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
                  props.setArrAcertos([])
                  props.setStatusColor('inprogress')
                  props.setFimJogo(false)
               }}
            >
               Escolher Palavra
            </Button>

            <Char data-test="word">
               {props.palavraSelecionada.split('').map((char, index) => {
                  
                  return (props.fimJogo) ? <span data-test="word" key={index}>{` ${char} `}</span> : <span data-test="word" key={index}>{props.arrAcertos.includes(char) ? ` ${char} ` : ' _ '}</span>
               })}

            </Char>
         </div>
      </ContainerJogo>
   )
}
