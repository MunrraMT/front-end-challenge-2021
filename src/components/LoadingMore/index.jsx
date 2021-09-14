import { useContext, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

import DataContext from '../../providers/DataContext';

const LoadingMore = () => {
  const { setData, page, setPage } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${page}&results=50`)
      .then((response) => response.json())
      .then(({ results }) => {
        setData((prev) => [...prev, ...results]);
      });
  }, [page]);

  const morePages = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      marginTop="2rem"
    >
      <Button
        onClick={morePages}
        size="small"
        variant="outlined"
        color="default"
        startIcon={<ReplayIcon />}
      >
        Loading more
      </Button>
    </Box>
  );
};

export default LoadingMore;
