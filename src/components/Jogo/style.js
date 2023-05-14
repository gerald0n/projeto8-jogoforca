import { styled } from 'styled-components'

export const ContainerJogo = styled.div`
   width: 93.5rem;

   display: flex;
   justify-content: space-between;
   padding-top: 5rem;
   box-sizing: border-box;
   color: ${({color}) => {
      return (color === 'inprogress')?'black':(color === 'sucess') ? '#27AE60': (color === 'failed') ? 'red' : 'black'
   }};

   img,
   div {
      height: 46.66rem;
   }

   div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      padding-right: 1rem;
   }
`

export const Button = styled.button`
   width: 20rem;
   height: 6rem;
   margin-top: 3rem;

   background: #27ae60;
   color: #ffffff;

   border-radius: .8rem;
   border: none;

   font-family: 'Roboto';
   font-weight: 700;
   font-size: 2rem;
`

export const Char = styled.p`
   font-weight: 700;
   font-size: 5rem;
   letter-spacing: 1rem;
`
