import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  font-size: 20px;
`;

export const Thead = styled.thead`
   font-size: 14px;
  background-color: #00bcd5;
  color: #fff;
  text-transform: uppercase;
  height: 50px;
`;

export const Tr = styled.tr`
  height: 45px;
  text-align: center;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const Td = styled.td`
  font-size: 16px;
  color: gray;
  text-transform: ${props => (props.type ? 'capitalize' : 'none')};
`;
