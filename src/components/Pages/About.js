import React from 'react';
import {
  Jumbotron,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Alert,
  Fade,
} from 'reactstrap';
import PageContainer from '../hoc/PageContainer';
import PageHeader from '../ui/Title/PageHeader';
import styles from '../../assets/styles/Layout.module.css';

const About = () => {
  const listItem = (icon, title, link, linkTitle) => {
    return { icon, title, link, linkTitle };
  };

  const listItems = [
    listItem('fab fa-react', 'app', 'https://reactjs.org/', 'React js'),
    listItem(
      'fas fa-smile',
      'face detection and demographics',
      'https://www.clarifai.com',
      'Clarifai',
    ),
    listItem(
      'fas fa-adjust',
      'background',
      'https://www.npmjs.com/package/react-particles-jsreact-particles-js',
      'react-particles-js',
    ),
    listItem(
      'fas fa-certificate',
      'logo',
      'https://www.npmjs.com/package/react-tilt',
      'react-tilt',
    ),
    listItem(
      'fas fa-paint-brush',
      'styles',
      'https://reactstrap.github.io/',
      'reactstrap',
    ),
    listItem(
      'fab fa-font-awesome',
      'icons',
      'https://fontawesome.com/',
      'font awesome',
    ),
  ];

  return (
    <PageContainer>
      <PageHeader title="About" />
      <Jumbotron className={styles.Jumbotron}>
        <div className={styles.SubTitle}>This app was made using:</div>
        <ListGroup>
          {listItems.map(item => (
            <ListGroupItem key={item.title} color="info">
              <ListGroupItemHeading>
                <i className={item.icon} style={{ color: '#1e3c72' }} />
              </ListGroupItemHeading>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {item.title}
                <a href={item.link}>{item.linkTitle}</a>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>

        <Alert style={{ background: 'transparent' }} color="primary">
          The app was inspired by a code-along project on Andrei Neagoie's 'Zero
          to Mastery' course. I take no responsibility for any offence caused if
          you don't like the results you get.
        </Alert>

        <div style={{ fontSize: '12px' }}>
          2019 jwellwood on Github{' '}
          <Button
            size="sm"
            color="link"
            href="https://github.com/jwellwood/face_predictions"
          >
            <i className="fab fa-github" />
          </Button>
        </div>
      </Jumbotron>
      <Fade timeout={1000}>
        <h3 style={{ color: '#5DADE2' }}>Enjoy!</h3>
      </Fade>
    </PageContainer>
  );
};

export default About;
