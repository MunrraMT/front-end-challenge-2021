import { useContext } from 'react';

import { Paper, Table, TableContainer } from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';
import PatientsTableBody from '../PatientsTableBody';
import PatientsTableHead from '../PatientsTableHead';
import ErrorMessage from '../ErrorMessage';

const PatientsList = () => {
  const { dataFiltered, textSearch } = useContext(DataContext);

  const classes = useStyles();

  return (
    <>
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

      {textSearch.length > 0 && dataFiltered.length === 0 && (
        <ErrorMessage message="Nome não encontrado na lista." />
      )}
    </>
  );
};

export default PatientsList;
