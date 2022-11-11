import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Restaurant = ({item}) => {
  return (
    <Link to={`${item.id}`}>
    <div>
        <Card style={{ width: '18rem' ,height:'500px'}}>
      <Card.Img variant="top" src={item.photograph1} style={{height:'255px'}}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
            {item.cuisine_type}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Link>
  )
}

export default Restaurant