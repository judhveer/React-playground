import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export  function ProductDetail() {

  const params = useParams();
  // console.log(params.id);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("keyword"));
  // console.log( searchParams.get("instock"));
  // console.log(searchParams.get("rating"));
  const location = useLocation();
  // console.log(location);

  return (
    <main>
      <div className='component'> {params.id} - ProductDetail</div>
    </main>
  )
}
