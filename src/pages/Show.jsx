import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiCAll } from '../misc/config';

const Show = () => {
  const [show, setShow] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    let isMounted = true;
    apiCAll(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        if (isMounted) {
          setShow(res);
          setisLoading(false);
        }
      })
      .catch(er => {
        if (isMounted) {
          setError(er.message);
          setisLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(show);
  if (isLoading) return <div>Data is being loaded</div>;
  if (error) return <div>Error is {error}</div>;
  return <div>This is just a show page</div>;
};

export default Show;
