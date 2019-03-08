import React from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';
import styles from '../../../assets/styles/Instructions.module.css';

const InstructionsList = () => {
  const listItem = (icon, color, text) => {
    return { icon, color, text };
  };

  const listItems = [
    listItem(
      '',
      'info',
      'Right click on an image and select "copy image address"',
    ),
    listItem('', 'info', 'Paste your image address in the input field'),
    listItem('', 'info', 'Click "detect"'),
    listItem(
      <i className="fas fa-exclamation-circle" />,
      'success',
      'Make sure that you copy the image address not just the image',
    ),
  ];

  return (
    <Card className={styles.List}>
      <ListGroup>
        {listItems.map(item => (
          <ListGroupItem key={item.text} color={item.color}>
            {item.icon} {item.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default InstructionsList;
