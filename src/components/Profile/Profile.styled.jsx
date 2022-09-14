import styled from 'styled-components';

export const ProfileContainer = styled.div`
width : 350px;
height: 420px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
background-color: #fff;
border-radius: 2%;
`;

export const Description = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const Avatar = styled.img`
width: 100px;
border-radius: 50%;
margin: 40px;
`;

export const Username = styled.p`
font-size: 24px;
font-weight: 700;
margin-bottom: 12px;
`;

export const Tag = styled.p`
font-weight: 600;
margin-bottom: 12px;
color: grey;
`;

export const Location = styled.p`
font-weight: 600;
color: grey;
margin-bottom: 40px;
`;

export const Stats = styled.ul`
display: flex;
text-align: center;
`;

export const StatsList = styled.li`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 120px;
height: 100px;
background-color: #f3f6f9;
border: solid 1px #e4e9f0;
padding: 5px;
`;

export const StatsTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: grey;
margin-bottom: 10px;
`;

export const StatsNumber = styled.span`
font-size: 18px;
font-weight: 700;
`