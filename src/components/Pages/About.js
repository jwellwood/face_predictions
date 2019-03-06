import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PageContainer from '../hoc/PageContainer';
import PageHeader from '../ui/Title/PageHeader';
import styles from './styles/About.module.css';

const About = () => {
  const listItem = (icon, title, link, linkTitle) => {
    return { icon, title, link, linkTitle };
  };

  const listItems = [
    listItem('fab fa-react', 'app:', 'https://reactjs.org/', 'React js'),
    listItem(
      'fas fa-smile',
      'face detection and demographics:',
      'https://www.clarifai.com',
      'Clarifai',
    ),
    listItem(
      'fas fa-adjust',
      'background:',
      'https://www.npmjs.com/package/react-particles-jsreact-particles-js',
      'react-particles-js',
    ),
    listItem(
      'fas fa-certificate',
      'logo:',
      'https://www.npmjs.com/package/react-tilt',
      'react-tilt',
    ),
    listItem(
      'fas fa-paint-brush',
      'styles:',
      'https://reactstrap.github.io/',
      'reactstrap',
    ),
    listItem(
      'fab fa-font-awesome',
      'icons:',
      'https://fontawesome.com/',
      'font awesome',
    ),
  ];

  return (
    <PageContainer>
      <PageHeader title="About" />
      <Jumbotron className={styles.Jumbotron}>
        <h5>This app was made using:</h5>
        <ul>
          {listItems.map(item => (
            <li key={item.title}>
              <i className={item.icon} /> {item.title}{' '}
              <a href={item.link}>{item.linkTitle}</a>
            </li>
          ))}
        </ul>
        <hr />
        <p>
          The app was inspired by a code-along project on Andrei Neagoie's 'Zero
          to Mastery' course
        </p>
        <p>
          Source code:
          <Button
            size="sm"
            color="link"
            href="https://github.com/jwellwood/face_predictions"
          >
            <i className="fab fa-github" />
          </Button>
        </p>
      </Jumbotron>

      <h4>Enjoy!</h4>
    </PageContainer>
  );
};

export default About;
