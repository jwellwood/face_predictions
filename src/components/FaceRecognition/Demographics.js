import React from 'react';
// import { ListGroup, ListGroupItem } from 'reactstrap';
const Demographics = props => {
  const { info } = props;
  console.log(info.map(info => info));
  return (
    <div className="demoInfo">
      <ul>
        <li>
          Age: <span> {info[0]}</span>
        </li>
        <p>{info[1]}%</p>
        <hr />
        <li>
          Gender: <span> {info[2]}</span>
        </li>
        <p>{info[3]}%</p>
        <hr />
        <li>
          Multicultural Profile: <span>{info[4]}</span>
        </li>
        <p>{info[5]}%</p>
        <div className="secondaryInfo">
          <li>
            <span>{info[6]}</span>
          </li>
          <p>{info[7]}%</p>
          <li>
            <span>{info[8]}</span>
          </li>
          <p>{info[9]}%</p>
        </div>
      </ul>
    </div>
  );

  // return (
  //   <ListGroup>
  //     <ListGroupItem>
  //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //         <span>Cras justo odio</span>
  //         <span>14</span>
  //       </div>
  //     </ListGroupItem>
  //     <ListGroupItem>
  //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //         <span>Cras justo odio</span>
  //         <span>14</span>
  //       </div>
  //     </ListGroupItem>
  //     <ListGroupItem>
  //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //         <span>Cras justo odio</span>
  //         <span>14</span>
  //       </div>
  //     </ListGroupItem>
  //   </ListGroup>
  // );
};

export default Demographics;
