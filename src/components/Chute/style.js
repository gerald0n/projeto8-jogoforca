import { styled } from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   gap: 1.5rem;
   color: ${({ disabled }) => (disabled ? '#798a9f' : 'black')};
   align-items: center;
   font-size: 2rem;

   input {
      width: 35.3rem;
      height: 4rem;

      background: #ffffff;
      border: .1rem solid #cccccc;
      box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, 0.25);
      border-radius: .3rem;

      padding-inline: 1rem;
      text-align: center;
      font-size: 2rem;
      outline-color: #7aa7c7;
      color: #3c76a1;

      &:disabled {
         background: #9faab5;
         border: .1rem solid #7aa7c7;
         color: #798a9f;
      }
   }

   button {
      width: 10rem;
      height: 4rem;

      background: #e1ecf4;
      border: .1rem solid #7aa7c7;
      border-radius: .3rem;

      font-weight: 700;
      font-size: 1.6rem;

      color: #3c76a1;

      &:disabled {
         background: #9faab5;
         border: .1rem solid #7aa7c7;
         color: #798a9f;
      }
   }
`
