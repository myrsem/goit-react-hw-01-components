import styled from 'styled-components';

export const StatsContainer = styled.section`
  width: 400px;
  height: 160px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  border-radius: 2%;
`;

export const Title = styled.h2`
  color: gray;
  font-size: 20px;
  font-weight: 700;
  margin-top: 35px;
  margin-bottom: 35px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 120px;
  height: 57px;
  padding: 5px;
  background-color: ${props => {
    return props.backgroundColor;
  }};
`;

export const Label = styled.span`
font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
font-size: 18px;
  font-weight: 700;
  color: #fff;`;
