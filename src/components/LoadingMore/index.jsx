/* eslint-disable no-console */

import { useContext, useEffect, useState } from 'react';

import { Box, Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

import DataContext from '../../providers/DataContext';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const LoadingMore = () => {
  const { setData } = useContext(DataContext);

  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(false);

  const morePages = () => {
    setIsLoaded(false);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    let isCancelled = false;

    if (page > 1) {
      fetch(`https://randomuser.me/api/?page=${page}&results=50`)
        .then((response) => {
          if (!response.ok) {
            setError(true);
          }

          return response.json();
        })
        .then((dataFetch) => {
          const newData = dataFetch.results.map((patient) => ({
            ...patient,
            page,
            seed: dataFetch.info.seed,
          }));

          if (!isCancelled) {
            setData((prev) => [...prev, ...newData]);
          }

          setIsLoaded(true);
        });
    }

    return () => {
      setIsLoaded(false);
      isCancelled = true;
    };
  }, [page]);

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      marginTop="1rem"
    >
      {error && <ErrorMessage />}
      {!error && !isLoaded && <Loading />}
      {!error && isLoaded && (
        <Button
          onClick={morePages}
          size="small"
          variant="outlined"
          color="default"
          startIcon={<ReplayIcon />}
        >
          Carregar mais pacientes
        </Button>
      )}
    </Box>
  );
};

export default LoadingMore;
