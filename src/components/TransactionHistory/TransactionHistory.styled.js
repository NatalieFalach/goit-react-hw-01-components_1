import styled from 'styled-components';

export const Transaction = styled.table`
  display: block;
  margin: 70px auto;
  width: 900px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const Thead = styled.thead`
  background-color: #00bcd5;
  color: white;
`;

export const Th = styled.th`
  padding: 15px;
  width: 300px;
`;

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  color: #afb2b5;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Tr = styled.tr`
  &: nth-child(odd) {
    background-color: #ecf1f4;
  }

  &: nth-child(even) {
    background-color: white;
  }
`;
