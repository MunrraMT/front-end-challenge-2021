import { useContext } from 'react';
import { Box, Paper, Table, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';
import ClientsTableBody from '../ClientsTableBody';
import ClientsTableHead from '../ClientsTableHead';
import Loading from '../Loading';

const useStyles = makeStyles(() => ({
  relative: {
    position: 'relative',
  },
}));

const ClientsList = () => {
  const { data } = useContext(DataContext);

  const classes = useStyles();

  return data.length > 0 ? (
    <TableContainer component={Paper} className={classes.relative}>
      <Table
        className={classes.relative}
        size="small"
        aria-label="a dense table"
      >
        <ClientsTableHead />

        <ClientsTableBody />
      </Table>
    </TableContainer>
  ) : (
    <Box display="flex" justifyContent="center">
      <Loading />
    </Box>
  );
};

export default ClientsList;
