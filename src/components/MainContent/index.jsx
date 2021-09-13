import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SearchInput from '../SearchInput';
import TextBasic from '../TextBasic';
import ClientsList from '../ClientsList';
import LoadingMore from '../LoadingMore';

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#eeeeee',
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.background}
      component="main"
      minHeight="calc(100vh - 8rem)"
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

        <ClientsList
          columns={['Nome', 'Genero', 'Aniversário', 'Ações']}
          rows={[
            {
              id: '1',
              name: 'André',
              gender: 'Masculino',
              birth: '29/08/1990',
            },
            {
              id: '2',
              name: 'Camila Maria',
              gender: 'Feminino',
              birth: '30/04/1994',
            },
            {
              id: '3',
              name: 'Pérola',
              gender: 'Feminino',
              birth: '30/04/2018',
            },
            {
              id: '4',
              name: 'Charles',
              gender: 'Masculino',
              birth: '30/04/2019',
            },
          ]}
        />

        <LoadingMore />
      </Container>
    </Box>
  );
};

export default MainContent;
