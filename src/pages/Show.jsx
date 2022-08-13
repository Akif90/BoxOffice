import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiCAll } from '../misc/config';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    apiCAll(`shows/${id}?embed[]=seasons&embed[]=cast`).then(res =>
      setShow(res)
    );
  }, [id]);
  console.log(show);

  return <div>This is just a show page</div>;
};

export default Show;
