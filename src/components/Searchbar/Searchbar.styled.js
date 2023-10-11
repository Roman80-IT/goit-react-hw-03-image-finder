import { styled } from 'styled-components';

export const Bar = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #a8b8d0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  height: 28px;
  width: 300px;

  padding-left: 30px;

  border-radius: 8px;
  border: none;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

export const Btn = styled.button`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 28px;
  border: none;
  background-color: transparent;
  color: #666693;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #00004b;
  }
`;
