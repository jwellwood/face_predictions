import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { getMax, getMin, getAverage, getBestResults } from './functions';
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

    console.log(getBackground);
    return (
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Age</ListGroupItemHeading>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Average</span>
            <span>
              {averageAge} {minAge} - {maxAge}
            </span>
            {mostLikely}
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Gender</ListGroupItemHeading>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{getGender}</span>
            <span>{getGenderPercent}%</span>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Background</ListGroupItemHeading>
          {getBackground.map(value => (
            <div key={value.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{value.name}</div>
                <div>{(value.value * 100).toFixed(2)}%</div>
              </div>
              <hr />
            </div>
          ))}
        </ListGroupItem>
      </ListGroup>
    );
  }

  // return (
  //   <div className="demoInfo">
  //     <ul>
  //       <li>
  //         Age: <span> {info[0]}</span>
  //       </li>
  //       <p>{info[1]}%</p>
  //       <hr />
  //       <li>
  //         Gender: <span> {info[2]}</span>
  //       </li>
  //       <p>{info[3]}%</p>
  //       <hr />
  //       <li>
  //         Multicultural Profile: <span>{info[4]}</span>
  //       </li>
  //       <p>{info[5]}%</p>
  //       <div className="secondaryInfo">
  //         <li>
  //           <span>{info[6]}</span>
  //         </li>
  //         <p>{info[7]}%</p>
  //         <li>
  //           <span>{info[8]}</span>
  //         </li>
  //         <p>{info[9]}%</p>
  //       </div>
  //     </ul>
  //   </div>
  // );
  // if (ageArray) {

  // }
  return <div style={{ width: '3rem', height: '3rem' }}>Loading</div>;
};

export default Demographics;
