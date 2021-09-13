import { useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SearchInput from '../SearchInput';
import TextBasic from '../TextBasic';
import ClientsList from '../ClientsList';
import LoadingMore from '../LoadingMore';
import ClientDetails from '../ClientDetails';

import DataContext from '../../providers/DataContext';

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#eeeeee',
  },
}));

const MainContent = () => {
  const { data } = useContext(DataContext);

  const classes = useStyles();

  return (
    <Box
      className={classes.background}
      component="main"
      minHeight="calc(100vh - 9rem)"
      paddingY="2rem"
      paddingX="1rem"
    >
      <Container component="section" maxWidth="md">
        <TextBasic>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          deleniti minima esse repellendus eius ducimus similique! Alias, harum
          consectetur nesciunt commodi deleniti, totam corrupti vitae blanditiis
          molestias nobis, accusantium vero!
        </TextBasic>

        <SearchInput marginBottom={2} marginTop={2} label="Pesquisar" />

        {data.length > 0 ? <ClientsList /> : <p>Loading...</p>}

        <LoadingMore />
      </Container>

      {false && <ClientDetails />}
    </Box>
  );
};

export default MainContent;
