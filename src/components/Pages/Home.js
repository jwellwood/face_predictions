import React from 'react';
import { Fade, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Title from '../ui/Title/Title';
const Home = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '80vh',
      }}
    >
      <Title />
      <div style={{ margin: '10px auto' }}>
        <Link to="/Detect">
          <Button outline color="info" size="sm">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
