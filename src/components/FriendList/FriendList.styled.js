import styled from 'styled-components';

export const Friends = styled.ul`
  display: block;
  margin: 70px auto;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Online = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  margin: 20px 10px 0 0;
`;
export const Offline = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin: 20px 10px 0 0;
`;
export const Avatar = styled.img`
  padding: 5px;
  border-radius: 20%;
  border: 1px solid #e9edf3;
`;
export const FriendsName = styled.p`
  margin: 15px 0 0 20px;
  font-size: 25px;
  font-weight: 500;
`;
