import { styled } from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   gap: 15px;
   color: ${({ disabled }) => (disabled ? '#798a9f' : 'black')};
   align-items: center;
   font-size: 20px;

   input {
      width: 353px;
      height: 40px;

      background: #ffffff;
      border: 1px solid #cccccc;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      border-radius: 3px;

      padding-inline: 10px;
      text-align: center;
      font-size: 20px;
      outline-color: #7aa7c7;
      color: #3c76a1;

      &:disabled {
         background: #9faab5;
         border: 1px solid #7aa7c7;
         color: #798a9f;
      }
   }

   button {
      width: 100px;
      height: 40px;

      background: #e1ecf4;
      border: 1px solid #7aa7c7;
      border-radius: 3px;

      font-weight: 700;
      font-size: 16px;

      color: #3c76a1;

      &:disabled {
         background: #9faab5;
         border: 1px solid #7aa7c7;
         color: #798a9f;
      }
   }
`
