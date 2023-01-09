import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 15px auto;
  width: 300px;
  background-color: #e7ecf2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Description = styled.div`
  background-color: white;
  text-align: center;
`;

export const Avatar = styled.img`
  margin-top: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #e9edf3;
`;

export const ProfileName = styled.p`
  margin-top: 30px;
  font: 700 20px Arial, sans-serif;
  color: #3f4958;
`;

export const Tag = styled.p`
  margin-top: 13px;
  margin-bottom: 0;
  font: 400 16px Arial, sans-serif;
  color: #97a2ae;
`;

export const Location = styled.p`
  padding: 13px 0 30px;
  font: 400 16px Arial, sans-serif;
  color: #97a2ae;
`;

export const StatsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #f3f6f9;
  text-align: center;
`;

export const StatsItem = styled.li`
  width: 100%;
  padding: 15px;
  border-right: 1px solid #e9edf3;
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.div`
  font: 400 16px Arial, sans-serif;
  color: #97a2ae;
`;

export const Quantity = styled.div`
  margin-top: 5px;
  font: 700 18px Arial, sans-serif;
  color: #3f4958;
`;
