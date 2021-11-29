import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
function Categories() {
  let navigate = useNavigate();
  const handelClick = (id) => {
    navigate('/product/' + id)
  }
  return (
    <div>
      categories page

      <ListGroup>
        <ListGroup.Item onClick={() => handelClick(1)}>product 1</ListGroup.Item>
        <ListGroup.Item onClick={() => handelClick(2)}>product 2</ListGroup.Item>
        <Link className="nav-link" to='/product/3'>Product 3</Link>
      </ListGroup>
    </div>
  )
}

export default Categories
