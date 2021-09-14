import { useContext } from 'react';

import { Box, Paper, Table, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';
import Loading from '../Loading';
import PatientsTableBody from '../PatientsTableBody';
import PatientsTableHead from '../PatientsTableHead';

const useStyles = makeStyles(() => ({
  relative: {
    position: 'relative',
  },
}));

const PatientsList = () => {
  const { data } = useContext(DataContext);

  const classes = useStyles();

  return data.length > 0 ? (
    <TableContainer component={Paper} className={classes.relative}>
      <Table
        className={classes.relative}
        size="small"
        aria-label="a dense table"
      >
        <PatientsTableHead />

        <PatientsTableBody />
      </Table>
    </TableContainer>
  ) : (
    <Box display="flex" justifyContent="center">
      <Loading />
    </Box>
  );
};

export default PatientsList;
