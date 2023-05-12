import { Container, Button } from './style'

export default function Letras(props) {
   const palavraReserva = []

   function logic(char) {
      if (props.palavraSelecionada.includes(char)) {
         props.setTotalAcertos(props.totalAcertos + 1)
         if (props.totalErrors < 5) {
            props.arrAcertos.push(char)
            props.palavraSelecionada.split('').forEach((char) => {
               palavraReserva.push(props.arrAcertos.includes(char) ? char : '_')
            })
            if (palavraReserva.join('') === props.palavraSelecionada) {
               props.setStatusColor('sucess')
               props.setDisabledButton(true)
            }
         }
      } else {
         if (props.totalErrors < 5) {
            props.setTotalErrors(props.totalErrors + 1)
         } else {
            props.setStatusColor('failed')
            props.setDisabledButton(true)
            props.setTotalErrors(6)
            props.setFimJogo(true)
         }
      }
   }

   return (
      <Container>
         {props.arr.map((char, index) => (
            <Button data-test="letter" key={index} disabled={props.disabledButton} onClick={() => logic(char)}>
               {char.toUpperCase()}
            </Button>
         ))}
      </Container>
   )
}
