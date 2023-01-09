import styled from 'styled-components';

export const Item = styled.li`
  padding: 25px 25px;
  width: 100px;
  color: white;
  background-color: ${props => props.color || 'green'};
  text-align: center;
`;
export const ItemPercentage = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-top: 7px;
`;

export const StatisticsTitle = styled.section`
  margin: 0 auto;
  margin-top: 70px;
  width: 500px;
`;
export const Title = styled.h2`
  text-align: center;
  padding: 30px 0;
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  color: #a6acb0;
  background-color: white;
`;
export const StatList = styled.ul`
  display: flex;
`;
