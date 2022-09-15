import { ProfileContainer, Description, Stats, Avatar, Username, Tag, Location, StatsItem, StatsTitle, StatsNumber } from './Profile.styled'
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
    <StatsItem>
      <StatsTitle >Followers</StatsTitle>
      <StatsNumber >{ user.stats.followers }</StatsNumber>
    </StatsItem>
    <StatsItem>
      <StatsTitle >Views</StatsTitle>
      <StatsNumber >{ user.stats.likes }</StatsNumber>
    </StatsItem>
    <StatsItem>
      <StatsTitle >Likes</StatsTitle>
      <StatsNumber >{ user.stats.views }</StatsNumber>
    </StatsItem>
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