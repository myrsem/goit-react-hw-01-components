import { StatsContainer,
    Title,
    List,
    Item,
    Label,
    Percentage } from './Statistics.styled'

function randomColor() {
    let color = `#${(Math.random().toString(16) + '000000')
      .substring(2, 8)
      .toUpperCase()}80`;
    return color;
  }

export const Statistics = ({ stats }) => {
  return (
    <StatsContainer>
      <Title>Upload stats</Title>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item backgroundColor={randomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatsContainer>
  );
};