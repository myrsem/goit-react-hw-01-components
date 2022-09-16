import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  padding: 10px;
`;

export const Status = styled.span`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 20px;
`;

export const Name = styled.p`
font-size: 22px;
  font-weight: 500;
  color: #010101;
`;