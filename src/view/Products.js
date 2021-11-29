import React from 'react'
import { useParams } from 'react-router';

function Products() {
  let { id } = useParams();
  return (
    <div>
      products page { id || '' }
    </div>
  )
}

export default Products
