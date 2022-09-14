import { ProfileContainer, Description, Stats, Avatar, Username, Tag, Location, StatsList, StatsTitle, StatsNumber } from './Profile.styled'
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
    return (
      <ProfileContainer>
        <Description>
        <Avatar src={user.avatar}
      alt="User avatar"/> 
      <Username>{user.username}</Username>
      <Tag>@{user.tag}</Tag>
      <Location>{user.location}</Location>
      </Description>
      <Stats>
    <StatsList>
      <StatsTitle >Followers</StatsTitle>
      <StatsNumber >{ user.stats.followers }</StatsNumber>
    </StatsList>
    <StatsList>
      <StatsTitle >Views</StatsTitle>
      <StatsNumber >{ user.stats.likes }</StatsNumber>
    </StatsList>
    <StatsList>
      <StatsTitle >Likes</StatsTitle>
      <StatsNumber >{ user.stats.views }</StatsNumber>
    </StatsList>
      </Stats>
      </ProfileContainer>
    );
  };
  
  Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }