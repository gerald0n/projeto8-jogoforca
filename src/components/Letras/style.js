import { styled } from 'styled-components'

export const Container = styled.div`
   width: 66.5rem;
   height: 9rem;

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 1.2rem;
`

export const Button = styled.button`
   width: 4rem;
   height: 4rem;
   font-style: normal;
   font-weight: 700;
   font-size: 1.6rem;
   
   background: #e1ecf4;
   border: .1rem solid #7aa7c7;
   border-radius: .3rem;
   color: #39739d;

   &:disabled {
      background: #9faab5;
      border: .1rem solid #7aa7c7;
      color: #798a9f;
   }
`
