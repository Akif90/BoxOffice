import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import { apiCAll } from '../misc/config';

const intitalState = {
  show: null,
  isLoading: true,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, show: action.show, error: null };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, error: action.error, isLoading: false };
    }

    default:
      return prevState;
  }
};

const Show = () => {
  // const [show, setShow] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    intitalState
  );

  useEffect(() => {
    let isMounted = true;
    apiCAll(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: res });
          // setShow(res);
          // setisLoading(false);
        }
      })
      .catch(er => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: er.message });

          // setError(er.message);
          // setisLoading(false);
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
