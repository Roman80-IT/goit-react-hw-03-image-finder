import { styled } from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
`;
