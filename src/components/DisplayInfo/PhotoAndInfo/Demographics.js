import React from 'react';
import {
  Fade,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from 'reactstrap';
import { getMax, getMin, getAverage, getBestResults } from '../../../functions';
import styles from '../../../assets/styles/DisplayInfo.module.css';
import Placeholder from './Placeholder';

const Demographics = props => {
  const { info } = props;
  const ageArray = info.age;
  if (ageArray) {
    const getAges = getBestResults(ageArray);
    const maxAge = getMax(getAges);
    const minAge = getMin(getAges);
    const averageAge = getAverage(getAges);
    const mostLikely = getAges[0];
    const getGender = info.gender[0].name;
    const getGenderPercent = (info.gender[0].value * 100).toFixed(0);
    const getBackground = info.multiculture.slice(0, 3);

    const listItem = (description, value) => {
      return { description, value };
    };
    const listItems = [
      listItem('Most likely', mostLikely),
      listItem('Average', averageAge),
      listItem('Range', `${minAge}-${maxAge}`),
    ];

    return (
      <Fade in={info ? true : false} timeout={400}>
        <ListGroup>
          <ListGroupItem style={{ backgroundColor: 'transparent' }}>
            <ListGroupItemHeading className={styles.Title}>
              Age
            </ListGroupItemHeading>
            {listItems.map(item => (
              <div key={item.description} className={styles.ListItem}>
                <div className={styles.Description}>{item.description}</div>
                <div className={styles.Value}> {item.value}</div>
              </div>
            ))}
          </ListGroupItem>
          <ListGroupItem style={{ backgroundColor: 'transparent' }}>
            <ListGroupItemHeading className={styles.Title}>
              Gender
            </ListGroupItemHeading>
            <div className={styles.ListItem}>
              <div className={styles.Description}>{getGender}</div>
              <div className={styles.Value}>{getGenderPercent}%</div>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ backgroundColor: 'transparent' }}>
            <ListGroupItemHeading className={styles.Title}>
              Background
            </ListGroupItemHeading>
            {getBackground.map(value => (
              <div key={value.name} className={styles.ListItem}>
                <div className={styles.Description}>{value.name}</div>
                <div className={styles.Value}>
                  {(value.value * 100).toFixed(2)}%
                </div>
              </div>
            ))}
          </ListGroupItem>
        </ListGroup>
      </Fade>
    );
  }
  return (
    <Placeholder
      type="demo"
      text="Demographic data"
      icon={<i className="fas fa-signal" />}
    />
  );
};

export default Demographics;
