import { useContext } from 'react';
import { Box, Container } from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';
import SearchInput from '../SearchInput';
import TextBasic from '../TextBasic';
import LoadingMore from '../LoadingMore';
import Loading from '../Loading';
import PatientsList from '../PatientsList';
import ErrorMessage from '../ErrorMessage';

const MainContent = () => {
  const { data, error } = useContext(DataContext);

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

        <SearchInput label="Pesquisar" />

        {error && <ErrorMessage />}
        {!error && data.length <= 0 && <Loading />}
        {!error && data.length > 0 && <PatientsList />}

        {!error && data.length > 0 && <LoadingMore />}
      </Container>
    </Box>
  );
};

export default MainContent;
