import { styled } from 'styled-components'

export const Container = styled.div`
   width: 665px;
   height: 90px;

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 12px;
`

export const Button = styled.button`
   width: 40px;
   height: 40px;
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   
   background: #e1ecf4;
   border: 1px solid #7aa7c7;
   border-radius: 3px;
   color: #39739d;

   &:disabled {
      background: #9faab5;
      border: 1px solid #7aa7c7;
      color: #798a9f;
   }
`
