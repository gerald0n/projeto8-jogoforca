import { useState } from 'react'
import { Container } from './style'
import GlobalStyle from '../../styles/global'
import Jogo from '../Jogo'
import Letras from '../Letras'
import palavras from '../../palavras'
import alfabeto from '../../alfabeto'

export default function App() {
   const [totalErrors, setTotalErrors] = useState(0)
   const [palavraSelecionada, setPalavraSelecionada] = useState('')
   const [disabledButton, setDisabledButton] = useState(true)
   const [keysClickeds, setkeysClickeds] = useState([])
   const [totalAcertos, setTotalAcertos] = useState(0)
   const [statusColor, setStatusColor] = useState('inprogress')
   const [fimJogo, setFimJogo] = useState(false)
   return (
      <Container>
         <GlobalStyle />
         <Jogo
            totalErrors={totalErrors}
            setTotalErrors={setTotalErrors}
            arrPalavras={palavras}
            palavraSelecionada={palavraSelecionada}
            setPalavraSelecionada={setPalavraSelecionada}
            setDisabledButton={setDisabledButton}
            keysClickeds={keysClickeds}
            setkeysClickeds={setkeysClickeds}
            statusColor={statusColor}
            setStatusColor={setStatusColor}
            fimJogo={fimJogo}
            setFimJogo={setFimJogo}
         />
         <Letras
            arr={alfabeto}
            setDisabledButton={setDisabledButton}
            disabledButton={disabledButton}
            palavraSelecionada={palavraSelecionada}
            setPalavraSelecionada={setPalavraSelecionada}
            totalErrors={totalErrors}
            setTotalErrors={setTotalErrors}
            keysClickeds={keysClickeds}
            setkeysClickeds={setkeysClickeds}
            totalAcertos={totalAcertos}
            setTotalAcertos={setTotalAcertos}
            statusColor={statusColor}
            setStatusColor={setStatusColor}
            fimJogo={fimJogo}
            setFimJogo={setFimJogo}
         />
      </Container>
   )
}
