import { styled } from 'styled-components'

export const ContainerJogo = styled.div`
   width: 935px;

   display: flex;
   justify-content: space-between;
   padding-block: 50px;
   box-sizing: border-box;
   color: ${({color}) => {
      return (color === 'inprogress')?'black':(color === 'sucess') ? '#27AE60': (color === 'failed') ? 'red' : 'black'
   }};

   img,
   div {
      height: 466.67px;
   }

   div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      padding-right: 10px;
   }
`

export const Button = styled.button`
   width: 200px;
   height: 60px;
   margin-top: 30px;

   background: #27ae60;
   color: #ffffff;

   border-radius: 8px;
   border: none;

   font-family: 'Roboto';
   font-weight: 700;
   font-size: 20px;
`

export const Char = styled.p`
   font-weight: 700;
   font-size: 50px;
   letter-spacing: 10px;
`
