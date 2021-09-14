import { useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';
import SearchInput from '../SearchInput';
import TextBasic from '../TextBasic';
import LoadingMore from '../LoadingMore';
import Loading from '../Loading';
import PatientsList from '../PatientsList';

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

        {data.length > 0 ? (
          <PatientsList />
        ) : (
          <Box
            component="section"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Loading />
          </Box>
        )}

        <LoadingMore />
      </Container>
    </Box>
  );
};

export default MainContent;
