import { Container, Button } from './style'

export default function Letras(props) {
   const palavraReserva = []
   function logic(char) {
      props.keysClickeds.push(char)
      if (props.palavraSelecionada.includes(char)) {
         props.setTotalAcertos(props.totalAcertos + 1)
         if (props.totalErrors < 6) {
            props.palavraSelecionada.split('').forEach((char) => {
               palavraReserva.push(props.keysClickeds.includes(char) ? char : '_')
            })
            if (palavraReserva.join('') === props.palavraSelecionada) {
               props.setStatusColor('sucess')
               props.setDisabledButton(true)
            }
            console.log(palavraReserva)
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
         {props.arr.map((char, index) => {
            if (props.keysClickeds.includes(char)) {
               return (
                  <Button
                     data-test="letter"
                     key={index}
                     disabled={true}
                     onClick={() => logic(char)}
                  >
                     {char.toUpperCase()}
                  </Button>
               )
            } else {
               return (
                  <Button
                     data-test="letter"
                     key={index}
                     disabled={props.disabledButton}
                     onClick={() => logic(char)}
                  >
                     {char.toUpperCase()}
                  </Button>
               )
            }
         })}
      </Container>
   )
}
