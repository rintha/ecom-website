import React from 'react';
import { Button } from 'react-bootstrap';

const Tour = ({ tour }) => {
  return (
    <tr>
      <td>{tour.date}</td>
      <td>{tour.place}</td>
      <td>{tour.description}</td>
      <td>
        <Button style={{ color: 'white' }} variant="info" size="sm">
          BUY TICKETS
        </Button>
      </td>
    </tr>
  );
};

export default Tour;
