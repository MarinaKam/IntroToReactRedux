import React  from 'react';
import { Icon, Header, Container } from 'semantic-ui-react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
    return lat > 0 ? 'winter' : 'summer';
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const seasonConfig = {
  summer: {
      text: 'Lets hit the beach',
      icon: 'sun',
      color: 'yellow'
  },
  winter: {
      text: 'Burr, it is chilly',
      icon: 'snowflake',
      color: 'blue'
  }
};

const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth());
    const { text, icon, color } = seasonConfig[season];
    return(
        <section className={`season ${season}`}>
            <Container textAlign='left'>
                <Icon color={color} name={icon} size='massive' />
            </Container>
            <Container textAlign='center'>
                <Header as='h1'>
                    { capitalizeFirstLetter(season) }
                    <Header.Subheader>{ text }</Header.Subheader>
                </Header>
            </Container>
            <Container textAlign='right'>
                <Icon color={color} name={icon} size='massive' />
            </Container>
        </section>
    );
};

export default SeasonDisplay;
